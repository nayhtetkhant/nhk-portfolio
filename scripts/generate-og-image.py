#!/usr/bin/env python3
"""
Generate a 1200x630 Open Graph (OG) image for nayhtetkhant.com
Complies with modern social platform requirements:
- Exact 1200x630 dimensions
- Clear bold headline: "Nay Htet Khant"
- Subheadline: "Full Stack Developer"
- Value description & tech stack tags
- High-contrast Call to Action (CTA): "View Portfolio ↗"
- Framed portrait of Nay Htet Khant
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
import shutil

W, H = 1200, 630

# Base canvas
img = Image.new("RGBA", (W, H), (10, 10, 12, 255))

# Ambient radial glow
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow)
glow_draw.ellipse([(-100, -100), (500, 500)], fill=(30, 41, 59, 120))
glow_draw.ellipse([(800, 100), (1300, 600)], fill=(16, 185, 129, 35))
glow = glow.filter(ImageFilter.GaussianBlur(100))
img = Image.alpha_composite(img, glow)

draw = ImageDraw.Draw(img)

# Outer card border (inset 28px)
card_inset = 28
r = 24
draw.rounded_rectangle(
    [(card_inset, card_inset), (W - card_inset, H - card_inset)],
    radius=r,
    fill=(14, 14, 17, 240),
    outline=(39, 39, 42, 255),
    width=2,
)

# Subtle top highlight line
draw.line(
    [(card_inset + 24, card_inset + 2), (W - card_inset - 24, card_inset + 2)],
    fill=(255, 255, 255, 18),
    width=1,
)

# Fonts
font_bold = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
font_regular = "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"

f_status = ImageFont.truetype(font_regular, 16)
f_name = ImageFont.truetype(font_bold, 54)
f_title = ImageFont.truetype(font_bold, 30)
f_desc = ImageFont.truetype(font_regular, 21)
f_tag = ImageFont.truetype(font_regular, 16)
f_cta = ImageFont.truetype(font_bold, 20)
f_domain = ImageFont.truetype(font_regular, 18)

left_x = 76

# 1. Status Badge
status_y = 68
status_text = "AVAILABLE FOR WORK & PROJECTS"
status_bbox = draw.textbbox((0, 0), status_text, font=f_status)
status_w = status_bbox[2] - status_bbox[0]
badge_pad_x = 18
badge_w = status_w + 32 + badge_pad_x * 2
badge_h = 36

draw.rounded_rectangle(
    [(left_x, status_y), (left_x + badge_w, status_y + badge_h)],
    radius=18,
    fill=(24, 24, 27, 255),
    outline=(63, 63, 70, 200),
    width=1,
)
dot_cx = left_x + 18
dot_cy = status_y + badge_h // 2
draw.ellipse(
    [(dot_cx - 4, dot_cy - 4), (dot_cx + 4, dot_cy + 4)],
    fill=(52, 211, 153, 255),
)
draw.text(
    (dot_cx + 14, status_y + 8),
    status_text,
    font=f_status,
    fill=(212, 212, 216, 255),
)

# 2. Main Headline
name_y = 132
draw.text((left_x, name_y), "Nay Htet Khant", font=f_name, fill=(255, 255, 255, 255))

# 3. Subheadline / Role
title_y = 208
draw.text(
    (left_x, title_y),
    "Full Stack Developer",
    font=f_title,
    fill=(228, 228, 231, 255),
)

# 4. Description
desc_y = 262
desc_line1 = "Real-time systems, APIs & high-performance web applications."
desc_line2 = "Specialized in Laravel, Next.js, WebSockets & scalable cloud."
draw.text((left_x, desc_y), desc_line1, font=f_desc, fill=(161, 161, 170, 255))
draw.text((left_x, desc_y + 30), desc_line2, font=f_desc, fill=(113, 113, 122, 255))

# 5. Tech Badges
tags_y = 362
tags = ["Laravel", "Next.js", "TypeScript", "WebSockets", "Docker"]
cur_tag_x = left_x
for tag in tags:
    tb = draw.textbbox((0, 0), tag, font=f_tag)
    tw = tb[2] - tb[0]
    pw = tw + 24
    ph = 32
    draw.rounded_rectangle(
        [(cur_tag_x, tags_y), (cur_tag_x + pw, tags_y + ph)],
        radius=16,
        fill=(24, 24, 27, 200),
        outline=(39, 39, 42, 255),
        width=1,
    )
    draw.text((cur_tag_x + 12, tags_y + 6), tag, font=f_tag, fill=(212, 212, 216, 255))
    cur_tag_x += pw + 10

# 6. Call To Action (CTA) Button & URL
cta_y = 445
cta_text = "View Portfolio  ↗"
cta_tb = draw.textbbox((0, 0), cta_text, font=f_cta)
cta_tw = cta_tb[2] - cta_tb[0]
cta_btn_w = cta_tw + 44
cta_btn_h = 56

draw.rounded_rectangle(
    [(left_x, cta_y), (left_x + cta_btn_w, cta_y + cta_btn_h)],
    radius=28,
    fill=(255, 255, 255, 255),
)
draw.text((left_x + 22, cta_y + 16), cta_text, font=f_cta, fill=(10, 10, 12, 255))

domain_x = left_x + cta_btn_w + 24
domain_text = "nayhtetkhant.com"
draw.text(
    (domain_x, cta_y + 18), domain_text, font=f_domain, fill=(113, 113, 122, 255)
)

# 7. Portrait
portrait_w = 380
portrait_h = 474
portrait_x = W - card_inset - portrait_w - 38
portrait_y = (H - portrait_h) // 2

profile_src = Image.open("public/profile.jpg").convert("RGBA")
pw_src, ph_src = profile_src.size

crop_size = min(pw_src, ph_src)
cx, cy = int(pw_src * 0.50), int(ph_src * 0.38)
x1 = max(0, cx - int(crop_size * 0.45))
y1 = max(0, cy - int(crop_size * 0.45))
x2 = min(pw_src, x1 + int(crop_size * 0.90))
y2 = min(ph_src, y1 + int(crop_size * 1.10))

crop = profile_src.crop((x1, y1, x2, y2))
crop = crop.resize((portrait_w, portrait_h), Image.Resampling.LANCZOS)

mask = Image.new("L", (portrait_w, portrait_h), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.rounded_rectangle([(0, 0), (portrait_w, portrait_h)], radius=24, fill=255)

portrait_shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
ps_draw = ImageDraw.Draw(portrait_shadow)
ps_draw.rounded_rectangle(
    [
        (portrait_x - 4, portrait_y - 4),
        (portrait_x + portrait_w + 4, portrait_y + portrait_h + 4),
    ],
    radius=26,
    fill=(0, 0, 0, 180),
)
portrait_shadow = portrait_shadow.filter(ImageFilter.GaussianBlur(16))
img = Image.alpha_composite(img, portrait_shadow)

img.paste(crop, (portrait_x, portrait_y), mask)

border_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
b_draw = ImageDraw.Draw(border_layer)
b_draw.rounded_rectangle(
    [(portrait_x, portrait_y), (portrait_x + portrait_w, portrait_y + portrait_h)],
    radius=24,
    outline=(63, 63, 70, 220),
    width=2,
)

loc_text = "📍 Chiang Mai, Thailand"
loc_f = ImageFont.truetype(font_regular, 15)
loc_tb = b_draw.textbbox((0, 0), loc_text, font=loc_f)
loc_w = loc_tb[2] - loc_tb[0]
loc_bg_w = loc_w + 24
loc_bg_h = 32
loc_x = portrait_x + (portrait_w - loc_bg_w) // 2
loc_y = portrait_y + portrait_h - 44

b_draw.rounded_rectangle(
    [(loc_x, loc_y), (loc_x + loc_bg_w, loc_y + loc_bg_h)],
    radius=16,
    fill=(10, 10, 12, 220),
    outline=(63, 63, 70, 200),
    width=1,
)
b_draw.text((loc_x + 12, loc_y + 7), loc_text, font=loc_f, fill=(228, 228, 231, 255))

img = Image.alpha_composite(img, border_layer)

final_png = img.convert("RGB")
final_png.save("public/og-image.png", "PNG", optimize=True)
shutil.copyfile("public/og-image.png", "app/opengraph-image.png")
shutil.copyfile("public/og-image.png", "app/twitter-image.png")

print(f"Generated OG image: 1200x630 -> public/og-image.png, app/opengraph-image.png, app/twitter-image.png")
