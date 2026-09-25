---
name: faithsblissfuldelights-website-repo
description: Project state for Faith's Blissful Delights, read first every session
kind: service-site
updated: 2026-09-24
gate: G5
review_url: ""
live_url: "https://faithsblissfuldelights.com"
open:
  # G2 Build, still owed by the live site
  - {id: g2-images, gate: G2, blocked_on: claude, item: "The gallery serves 1050 to 1400px WebP into tiles about 281px wide with no srcset, so menu.html pulls 3,977 KB of images and the homepage 1,522 KB (audit.py page_img_kb, 2026-09-24). Add 400w and 800w derivatives with srcset and sizes per site-image-pipeline and keep the 1400px file for the lightbox. Dimensions and gitignored source media are already done"}
  - {id: g2-404, gate: G2, blocked_on: claude, item: "No custom 404 page (audit.py any_404 false), so GitHub Pages serves its generic one with no way back to the menu or the order form"}
  - {id: g2-headings, gate: G2, blocked_on: claude, item: "Every page skips from h2 to h4 in the footer and order.html goes from h1 to h3 (audit.py heading_skips), so renumber until the outline has no gaps"}
  - {id: g2-titles, gate: G2, blocked_on: alex, item: "Decision needed. The homepage title leads with the brand where the lifecycle says to lead with service and town, and the faq and menu titles run 68 to 70 characters against a target near 60. The homepage already ranks first for custom and wedding cakes in Bellevue, Ohio but sits outside the top nine for bakery Bellevue Ohio, so a service-first title is a low-risk test rather than a fix"}
  # G3 Review
  - {id: g3-client-review, gate: G3, blocked_on: client, item: "Faith has not reviewed the copy. The About page needs her own story, which was left generic rather than invented. She should confirm which towns she wants orders from, because the twelve in the schema were inferred (README, Service area), and whether the TikTok account blissfuldelightsbys is hers"}
  # G4 Launch
  - {id: g4-search-consoles, gate: G4, blocked_on: alex, item: "Google Search Console is done as a Domain property with the sitemap reading Success. Bing Webmaster Tools is not set up, and it imports from Search Console in a few minutes"}
  # G5 Grow
  - {id: g5-validate-fix, gate: G5, blocked_on: alex, item: "Search Console still lists 6 invalid Product snippets. The fix shipped 2026-08-30 in 4ef1979, but validation reads Not Started because Validate Fix was never clicked"}
  - {id: g5-order-indexing, gate: G5, blocked_on: alex, item: "order.html is Discovered, currently not indexed, with its last crawl N/A, so Google has never fetched the order page. It checks clean (200, self-canonical, in the sitemap, 19 internal links), which makes this crawl priority rather than a quality verdict. Request Indexing in URL Inspection"}
  - {id: g5-reviews, gate: G5, blocked_on: client, item: "Zero Google reviews. The Bellevue rival holding the birthday cake map pack has 8, and in Google's AI answer every other bakery shows stars while Faith shows none. Target 10 within 90 days by sending the profile's review link at every pickup, and answer each one. aggregateRating stays out of the schema"}
  - {id: g5-gbp, gate: G5, blocked_on: alex, item: "The website field and sameAs are done. Still missing are Products with photos (cinnamon rolls, scones, decorated cookies, cupcakes, a custom cake), Cinnamon rolls and Scones as services now that the site names them, and secondary categories picked from Google's own list with Bakery kept as primary"}
  - {id: g5-gbp-posts, gate: G5, blocked_on: client, item: "No Google Posts yet. Faith already posts ready-to-buy stock on Facebook, such as cinnamon rolls by the pan, and putting the same post on the profile each week is the cheapest ongoing signal available"}
  - {id: g5-gbp-attributes, gate: G5, blocked_on: client, item: "Profile attributes are all empty, and payments and service options need Faith's facts rather than guesses"}
  - {id: g5-local-groups, gate: G5, blocked_on: client, item: "In Bellevue, Sandusky and Norwalk a local Facebook group thread asking who makes custom cakes ranks on page one. Faith answering those threads, or customers naming her in them, reaches buyers at the moment they ask"}
  - {id: g5-citations, gate: G5, blocked_on: alex, item: "Bing Places and Apple Business Connect are unclaimed, and Bing indexes the site but shows no local card. microbakerydirectory.com ranks on page one for bakery Bellevue Ohio with a home bakery listed and fits her, and a local chamber listing is the other obvious one"}
  - {id: g5-pricing, gate: G5, blocked_on: client, item: "No starting prices anywhere, so the FAQ can only say every order is quoted. The cost of a custom cake and of a wedding cake are real searches, and a from price supplied by Faith would strengthen the FAQ and the order page. Never estimated"}
  - {id: g5-compliance, gate: G5, blocked_on: client, item: "One compliance question for Faith before any promotion of one product line, detailed in source-files/seo-strategy.md. Not guessed"}
  - {id: g5-cinnamon, gate: G5, blocked_on: claude, item: "Cinnamon rolls are the largest low-difficulty near me search she actually sells, yet they appear only in the gallery and the FAQ. Name them on the homepage Breads card and add them to the catalog schema, which the visible copy then supports"}
  - {id: g5-wedding-page, gate: G5, blocked_on: client, item: "The first content cluster is a wedding cakes page, the highest-value order and already first for the Bellevue phrase through the homepage. It waits on Faith's facts, meaning whether she delivers or sets up a wedding cake when everything else is pickup, tastings, wedding lead time and a from price"}
  - {id: g5-monthly, gate: G5, blocked_on: alex, item: "The monthly Search Console and profile check is not running. The 2026-09-24 baseline was 41 impressions, 0 clicks and average position 8.9 in Search Console, with 44 views and 0 interactions on the profile"}
  - {id: g5-ai-check, gate: G5, blocked_on: alex, item: "Google AI Mode names Faith and describes her accurately (2026-09-24). ChatGPT, Perplexity and Gemini have not been checked"}
closed:
  - {id: g1-inputs, closed: 2026-09-24, evidence: "Name, town, phone, email, service area, logo and photos are all in place, and the README lists no remaining placeholders"}
  - {id: g1-old-site, closed: 2026-09-24, evidence: "n/a, no earlier site on this domain. Search Console data begins 2026-08-29 and its indexing report lists only the five real pages and their http, www and index.html variants"}
  - {id: g1-money-searches, closed: 2026-09-24, evidence: "Eight money searches checked in Google with the town named, including each map pack, and recorded in source-files/_run.md"}
  - {id: g1-design, closed: 2026-09-24, evidence: "Predates the convention. The palette is sampled from Faith's logo and documented in style.css and the README"}
  - {id: g2-pages, closed: 2026-09-24, evidence: "The lifecycle's home bakery money pages are the menu and ordering, and menu.html and order.html exist alongside about and faq"}
  - {id: g2-onpage, closed: 2026-09-24, evidence: "One H1 per page, descriptions of 120 to 153 characters, and NAP with a tel link on every page (audit.py). Title length and order are tracked in g2-titles"}
  - {id: g2-schema, closed: 2026-09-24, evidence: "Bakery on the homepage, BreadcrumbList on all four inner pages and FAQPage on faq, all parsing. The homepage canonical is /, and Search Console reports 3 valid breadcrumbs and none invalid"}
  - {id: g2-forms, closed: 2026-09-24, evidence: "The order form posts to the live Formspree endpoint, and its guard checks the endpoint shape"}
  - {id: g2-house, closed: 2026-09-24, evidence: "Cache-busting, lowercase relative paths, favicon.ico, .nojekyll, sitemap and robots are all present. The light-mode lock deliberately has no dark media block (README, Deliberate), and the missing 404 page is tracked in g2-404"}
  - {id: g2-checks, closed: 2026-09-24, evidence: "check_site.py reports 0 errors and its 2 documented warnings, and audit.py reports 0 broken links and 0 missing images. Its one no-alt image on menu.html is the lightbox shell, whose alt is deliberately empty"}
  - {id: g3-noindex, closed: 2026-09-24, evidence: "n/a, the site is live"}
  - {id: g3-previews, closed: 2026-09-24, evidence: "overview.html is noindex, out of the sitemap and canonical to /, and Search Console has never listed it"}
  - {id: g3-redirects, closed: 2026-09-24, evidence: "n/a, no legacy URLs"}
  - {id: g4-noindex-off, closed: 2026-09-24, evidence: "No page other than overview.html carries noindex, robots.txt allows everything, and four pages are indexed"}
  - {id: g4-dns-https, closed: 2026-09-24, evidence: "Search Console lists http://, http://www and https://www as redirects to the https apex"}
  - {id: g4-legacy-check, closed: 2026-09-24, evidence: "n/a, no legacy URLs"}
  - {id: nap-phone, closed: 2026-08-30, evidence: "The profile phone (574) 253-2807 matches the site character for character, read in the profile editor"}
decisions:
  - {date: 2026-08-30, decision: "The profile is a service-area business, so geo and the street address stay out of the schema permanently"}
  - {date: 2026-08-30, decision: "Catalog items are typed Service rather than Product, because there are no prices to publish and no reviews to cite"}
  - {date: 2026-09-22, decision: "Alex. The service area covers the surrounding towns, so areaServed carries twelve and the visible chips carry eight"}
  - {date: 2026-09-22, decision: "Alex. Profile hours stay at open with no main hours"}
---

# Faith's Blissful Delights

**Objective.** Turn local search into custom orders for a home bakery in Bellevue, Ohio,
counted as order form submissions and calls rather than as rankings.

**Status.** Live and at G5 as of 2026-09-24. The site already ranks first organically for
custom and wedding cakes in Bellevue, Ohio, but it has drawn no clicks yet, and the
Business Profile has no reviews and appears in none of the map packs checked. The full
reasoning and the competitor data are in `source-files/seo-strategy.md`, which stays out
of the public repo.

## Open questions

- Faith owns the About page story, the confirmed town list, the TikTok account, a
  starting price, the compliance question and the wedding facts (`g3-client-review`,
  `g5-pricing`, `g5-compliance`, `g5-wedding-page`).
- Alex owns the decision on the title test (`g2-titles`).

## Next

Claude takes `g2-images`, `g2-404`, `g2-headings` and `g5-cinnamon` on the next
go-ahead. Alex's four quick items, `g5-validate-fix`, `g5-order-indexing`,
`g4-search-consoles` and `g5-gbp`, take under an hour between them.

## Where things landed

- The live site is https://faithsblissfuldelights.com and the repo is
  github.com/alexharper24/faithsblissfuldelights.
- The private strategy, run log and Semrush table are in the gitignored `source-files/`.
- `overview.html` is a `noindex` all-in-one copy kept on purpose.
