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

## Photos

Camera originals live in `source-photos/`, which is gitignored, and never get
committed. Each gallery photo ships as a pair in `img/`, a web-sized `.jpg` and a
`.webp` at 1400px on the long edge, and the `.webp` is what the pages reference.
Name the pair `category-descriptor` to match the gallery filters (`cake-`,
`cookies-`, `cupcakes-`, `pie-`, `bread-`, `treats-`). Saving through Pillow
without `exif=` strips all metadata, which matters on a home bakery because a phone
photo can carry the GPS position of the kitchen it was taken in.

Added 2026-09-22 from `source-photos/`: `cupcakes-sunburst` (from
`cake-cupcake.jpg`), `bread-cinnamon-rolls` (from `cinamon rolls.jpg`) and
`bread-scones` (from `scones.jpg`). None of the three originals carried GPS data.
`cupcakes-sunburst` is cropped, dropping the top 21% of the original to remove
bystanders' legs and feet, which also cuts the feather centerpiece down to a
sliver. The uncropped original is still in `source-photos/` if that ever needs
revisiting.

## Service area: the town list is inferred, not confirmed

**The seven towns named beyond Bellevue were never supplied by Faith.** Commit
`3f5562c` (2026-07-30) chose Clyde, Castalia, Monroeville, Norwalk, Milan,
Sandusky and Fremont as places "within about 20 minutes of Bellevue". That was a
geographic inference made during an SEO pass. The only service-area fact Faith
actually confirmed is the line above: **"Bellevue, OH area"**.

The Google Business Profile, checked 2026-08-30, carries a *different* seven:
Flat Rock, York, Clyde, Bloomingville, Bellevue, Monroeville and North
Monroeville. Only Bellevue, Clyde and Monroeville appear on both lists. That list
looks like Google's auto-suggested nearby areas accepted at signup, since
Bloomingville and North Monroeville are tiny unincorporated places nobody would
volunteer when describing their own catchment.

**Resolved 2026-08-30:** Alex's call is that the service area covers the
surrounding towns, so the two lists are merged rather than one replacing the
other. `areaServed` in the schema now carries all twelve. The visible chip row on
the homepage still carries the recognisable eight, because Bloomingville and
North Monroeville are poor reading in body copy even though they are useful to a
crawler. Humans get eight, machines get twelve.

Still worth confirming with Faith when convenient, since the underlying lists
were inferred rather than given. Nothing here claims delivery: the copy says
pickup is "an easy drive from" those towns, which is a statement about geography.

The Business Profile carries the same twelve since 2026-09-22, when Castalia,
Norwalk, Milan, Sandusky and Fremont were added to the seven it already had.

## Pending

Open items live in [`_claude-state.md`](_claude-state.md), which holds the stage gate,
every open item with who it is blocked on, and what closed each finished one. The list
that used to sit here moved there on 2026-09-24, with each item either closed with
evidence or carried across. The SEO reasoning and competitor data are in the gitignored
`source-files/seo-strategy.md`.

Deliberate, do not "fix":

- `style.css` has no `@media (prefers-color-scheme: dark)` block and no
  `@media print` block. The site checks report both as warnings. The dark-mode
  omission was measured on this site on 2026-07-31: `color-scheme: light only`
  on `:root` is what prevents the inversion, and an override block would wash
  out the intentionally dark footer. See `.claude/guides/p2-open-items.md`.
- `img/logo-faith.png` is superseded by `img/logo-faith.webp` for display but
  stays tracked. It still backs the `logo` field in the schema, where a PNG is
  the safer bet for the Knowledge Panel.


## Logo
The site uses Faith's real logo: `img/logo-faith.png` in the header (the
hand-painted watercolour stand-mixer emblem — dusty plum mixer, warm taupe bowl,
and a laurel of leaves and flowers — with the photographed paper background
removed, so it has a real alpha channel), and `img/favicon.png` (just the mixer)
as the browser tab icon. The header tagline reads
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
