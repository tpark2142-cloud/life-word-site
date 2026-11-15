from pathlib import Path
from PIL import Image
out = Path(r"C:\Users\tea21\Documents\Codex\2026-04-21-summarize-my-unread-emails-and-draft\life-word-site\assets\img\gallery\incoming-photos")
for stem in ("20261029_155517", "20261030_105918", "20261030_115640"):
    im = Image.open(out / f"{stem}.jpg").convert("RGB")
    im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
    im.save(out / f"{stem}-regular.webp", "WEBP", quality=82, method=6)
    thumb = Image.open(out / f"{stem}.jpg").convert("RGB")
    thumb.thumbnail((480, 480), Image.Resampling.LANCZOS)
    thumb.save(out / f"{stem}-thumb.webp", "WEBP", quality=78, method=6)
