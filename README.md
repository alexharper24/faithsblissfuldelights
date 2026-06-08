# Faith's Blissful Delights — Website (First Draft)

A modern, mobile-friendly static website. No backend needed — perfect for
**GitHub Pages** or **Azure Static Web Apps**.

## Pages
- `overview.html` — **All-in-one single page** (hero + categories + about + full gallery + order, all on one scroll). Great for sharing one link or simplest hosting.
- `index.html` — Home (multi-page version)
- `menu.html` — Menu & Gallery (all 36 photos, filterable by category + lightbox)
- `about.html` — About / Meet the Baker (uses the cropped photo of Faith)
- `order.html` — Custom Order request form + contact info
- `style.css`, `main.js` — shared styling & scripts
- `img/` — all optimized photos + the SVG logo placeholder

## Colors (dusty rose + ivory + soft charcoal-plum + champagne accent)
Defined as CSS variables at the top of `style.css` — change them in one place
to re-theme the whole site.

## ⚠️ PLACEHOLDERS TO FILL IN
Search the files for square brackets `[ ]` and replace:

1. **Service area** — `[Service Area]` (footers)
2. **Pickup location** — `[Pickup location / Service area]` (`order.html` sidebar)
3. **Lead time** — `[e.g. Please order at least 1 week ahead]` (`order.html`)

Already filled in: phone (574) 253-2807, email violinteacher1@gmail.com,
the Facebook page link, and the Formspree order form.

## Logo
`img/logo.svg` is a simple placeholder mark (cupcake + cherry in the rose palette).
Swap it for a real logo later — just replace that file (keep the name) or update
the `<img src="img/logo.svg">` references.

## How the order form works (Formspree)
The custom order form submits through **Formspree** (form ID `xjgdwvov`, already
wired in) — submissions land in Faith's email inbox and the Formspree dashboard,
and the customer sees a "Thank you!" message right on the page (no redirect,
no email app needed).

### Already done
- Form endpoint is connected: `https://formspree.io/f/xjgdwvov`
- Notification email: **violinteacher1@gmail.com**
- Spam reduced via a hidden honeypot field; emails arrive with a clear subject line.

### One thing to do the first time
The **first** real submission triggers a Formspree confirmation email to
violinteacher1@gmail.com — click the link in it once to verify the address,
and submissions flow automatically after that.

> Note: Formspree's free tier is 50 submissions/month. If the bakery ever
> outgrows that, Web3Forms (free + unlimited) is a drop-in alternative — just
> ask and I'll re-wire it.

## To host on GitHub Pages
1. Create a repo, upload everything in this folder (keep the structure).
2. Settings → Pages → deploy from branch → root.
3. Done — your site is live.

## To host on Azure Static Web Apps
Point the app at this folder as the app/output location; no build step needed.
