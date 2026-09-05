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

The Business Profile still needs the five missing towns added to match
(Castalia, Norwalk, Milan, Sandusky, Fremont). Google allows up to 20 service
areas and the profile currently has 7.

## Pending

Search and Business Profile work, as of 2026-08-30:

- **Turn on "Enforce HTTPS"** in Settings > Pages. `http://faithsblissfuldelights.com/`
  currently answers 200 without redirecting, so the site is reachable on both
  protocols. The canonicals all point at HTTPS, so this is tidy-up rather than
  breakage, but it should be on before Google crawls in earnest.
- **Submit `sitemap.xml` in Google Search Console.** Verify as a *Domain*
  property, not a URL-prefix one: DNS is on Cloudflare (`marlowe`/`jerome.ns.
  cloudflare.com`) with no TXT records on the apex yet, and a Domain property
  covers the http/www variants in one go.
- **Click "Validate Fix" on the Products report in Search Console.** The six
  `hasOfferCatalog` entries were typed `Product` with only a name, which Google
  rejects unless `offers`, `review` or `aggregateRating` is present. They are now
  typed `Service`, which is the accurate type for made-to-order baking and
  carries no such requirement. Fixed and deployed 2026-08-30. Validation takes a
  couple of weeks to run once requested.
- **Once the Google Business Profile verification lands**, add to the `Bakery`
  schema in `index.html`:
  - `geo` and street address: **settled, do not add.** The profile was verified
    2026-08-30 as a service-area business, so Google hides the address itself.
    Publishing coordinates would put a home location on the site and contradict
    order.html, which promises the pickup address only after confirmation. The
    town-level locality, region and postal code stay as they are.
  - ~~the Business Profile URL, appended to `sameAs`~~ **done 2026-08-30.** Uses
    the Knowledge Graph id form (`kgmid=/g/11zfb1ywrf`), not a Maps place URL,
    which would have embedded `@lat,lng` coordinates. See the comment above the
    schema block.
  - Confirm the phone on the profile matches the site exactly. The site uses
    `(574) 253-2807` in all 19 places it appears, which is a northern Indiana
    area code for an Ohio business. If that is correct, fine, but the two must
    match character for character or the local pack suffers.
- **`about.html` is the thinnest page at 325 words** and was deliberately left
  alone. Its copy is generic because the specifics were never supplied, and
  inventing a founding year, a birth order or a "baking since" date is exactly
  the failure mode to avoid. It needs a few real sentences from Faith before it
  can grow.

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
