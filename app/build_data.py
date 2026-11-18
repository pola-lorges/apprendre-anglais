#!/usr/bin/env python3
"""Génère data.js (jours, pistes, transcriptions horodatées) à partir des fichiers XML d'audioscripts."""
import glob, html, json, os, re
import xml.etree.ElementTree as ET

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SB = "new_total_english_pre_intermediate_sb_audio/new_total_english_pre_intermediate_sb_audio"
WB = "new_total_english_pre_intermediate_wb_audio"
TRACKS_PER_DAY = 3
WB_TRACKS_PER_DAY = 5

TS = re.compile(r"`?\[(\d+):(\d+(?:\.\d+)?)\]")


def clean(s):
    s = re.sub(r"<[^>]+>", " ", s)
    s = html.unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    return re.sub(r"\s+([,.?!;:])", r"\1", s)


def parse_track(path):
    root = ET.parse(path).getroot()
    legend, segs = {}, []
    for el in root.findall("text"):
        sect = (el.get("sect") or "").strip().rstrip(":")
        raw = el.text or ""
        if not TS.search(raw):
            for k, v in re.findall(r"(\w+)\s*=\s*([^,<]+)", clean(raw)):
                legend[k] = v.strip()
            continue
        parts = TS.split(raw)
        # parts: [pre, min, sec, text, min, sec, text, ...]
        for i in range(1, len(parts), 3):
            t = int(parts[i]) * 60 + float(parts[i + 1])
            text = clean(parts[i + 2])
            if not text or re.fullmatch(r"\d+", text) or re.match(r"CD\d Track", text):
                continue
            segs.append({"t": round(t, 1), "s": sect, "x": text})
    for s in segs:
        s["s"] = legend.get(s["s"], s["s"])
    return segs


def track_entry(base, folder, label, with_script):
    entry = {
        "id": base,
        "label": label,
        "src": "../" + folder + "/" + base + ".mp3",
        "segs": [],
    }
    if with_script:
        entry["segs"] = parse_track(os.path.join(ROOT, folder, "Audioscripts", base + "_script.xml"))
    return entry


def main():
    sb_dir = os.path.join(ROOT, SB)
    tracks = []
    for f in sorted(glob.glob(os.path.join(sb_dir, "Audioscripts", "cd*trk*_script.xml"))):
        base = os.path.basename(f).replace("_script.xml", "")
        cd, trk = re.match(r"cd(\d)trk(\d+)", base).groups()
        tr = {
            "id": base,
            "label": f"CD{cd} piste {int(trk)}",
            "src": "../" + SB + "/" + base + ".mp3",
            "segs": parse_track(f),
        }
        if os.path.exists(os.path.join(sb_dir, base + ".mp3")) and tr["segs"]:
            tracks.append(tr)

    days = []
    for i in range(0, len(tracks), TRACKS_PER_DAY):
        group = tracks[i:i + TRACKS_PER_DAY]
        if len(group) == 1 and days:  # évite un dernier jour d'une seule piste
            days[-1]["tracks"] += group
            continue
        days.append({"kind": "book", "tracks": group})

    wb_dir = os.path.join(ROOT, WB)
    wb = sorted(glob.glob(os.path.join(wb_dir, "*track *.mp3")))
    wb_tracks = []
    for f in wb:
        n = int(re.search(r"track (\d+)", f).group(1))
        name = os.path.basename(f)
        wb_tracks.append({
            "id": f"wb{n:02d}",
            "label": f"Workbook piste {n}",
            "src": "../" + WB + "/" + name,
            "segs": [],
        })
    for i in range(0, len(wb_tracks), WB_TRACKS_PER_DAY):
        days.append({"kind": "workbook", "tracks": wb_tracks[i:i + WB_TRACKS_PER_DAY]})

    for n, d in enumerate(days, 1):
        d["n"] = n

    with open(os.path.join(HERE, "data.js"), "w", encoding="utf8") as out:
        out.write("window.DAYS = " + json.dumps(days, ensure_ascii=False, separators=(",", ":")) + ";\n")
    print(len(days), "jours,", sum(len(d["tracks"]) for d in days), "pistes")


if __name__ == "__main__":
    main()
