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
-  `img/` — all optimized photos, Faith's logo (logo-faith.png) & favicon.png

## Colors (dusty rose + ivory + soft charcoal-plum + champagne accent)
Defined as CSS variables at the top of `style.css` — change them in one place
to re-theme the whole site.

## ✅ All details filled in
- Service area: Bellevue, OH area
- Pickup: Local pickup in the Bellevue, OH area
- Lead time: 1 week preferred, rush orders for a fee
- Dietary: limited gluten-free, dairy-free & sugar-free options noted
- Phone, email (violinteacher1@gmail.com), Facebook, and the Formspree order form are all set.

No remaining placeholders.


## Logo
The site uses Faith's real logo: `img/logo-faith.png` in the header (the teal
mixer emblem with the photographed paper background removed), and `img/favicon.png`
(just the mixer) as the browser tab icon. The header tagline reads
"It's all about the Buttercream!" 

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
