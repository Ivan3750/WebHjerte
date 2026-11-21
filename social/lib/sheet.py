import sys, glob
from PIL import Image
files = sys.argv[2:]
out = sys.argv[1]
cols = 3
th = 640
ims = []
for f in files:
    im = Image.open(f).convert("RGB")
    s = th / im.height
    ims.append(im.resize((int(im.width * s), th)))
rows = [ims[i:i+cols] for i in range(0, len(ims), cols)]
W = max(sum(i.width for i in r) + 12*(len(r)+1) for r in rows)
H = len(rows) * (th + 12) + 12
sheet = Image.new("RGB", (W, H), (90, 90, 90))
y = 12
for r in rows:
    x = 12
    for im in r:
        sheet.paste(im, (x, y)); x += im.width + 12
    y += th + 12
sheet.save(out)
print(out, sheet.size)
