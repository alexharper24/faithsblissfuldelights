# Publishing to GitHub Pages — Step by Step

This folder is ready to publish exactly as-is. Two ways to do it — pick one.

---

## Option A — Web upload (no tools, easiest)

1. Go to **github.com** and sign in (create a free account if needed).
2. Click the **+** (top right) → **New repository**.
   - Name it something like `faiths-blissful-delights`
   - Set it to **Public**
   - Do NOT check "Add a README" (this folder already has one)
   - Click **Create repository**.
3. On the new empty repo page, click **uploading an existing file**
   (the link in "Quick setup").
4. **Drag in the entire contents of this folder** — every file AND the `img`
   folder. Important: upload the *contents*, so that `index.html` ends up at the
   top level of the repo (not inside a sub-folder).
5. Click **Commit changes**.
6. Go to the repo's **Settings** → **Pages** (left sidebar).
7. Under "Build and deployment" → Source: **Deploy from a branch**.
   - Branch: **main**  •  Folder: **/ (root)**  → click **Save**.
8. Wait ~1–2 minutes. Refresh the Pages settings screen and your live URL
   appears at the top, like:
   `https://YOUR-USERNAME.github.io/faiths-blissful-delights/`

That's it — the site is live. The homepage is `index.html`.

---

## Option B — Git command line (if you prefer)

```bash
cd path/to/faiths-blissful-delights
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/faiths-blissful-delights.git
git push -u origin main
```
Then do steps 6–8 above to turn on Pages.

---

## What's in this folder

| File | What it is |
|------|------------|
| `index.html` | Home page (this is the site's front door) |
| `menu.html` | Menu & Gallery (all photos, filterable) |
| `about.html` | About / Meet the Baker |
| `order.html` | Order request form (wired to Formspree) |
| `overview.html` | Optional single-page version of the whole site |
| `style.css` | Styling for all pages |
| `main.js` | Menu, filters, lightbox, scroll effects |
| `img/` | All photos + the logo |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (leave it) |

> The homepage links to `menu.html`, `about.html`, and `order.html`, so they all
> need to stay together in the same repo. Don't rename `index.html` — GitHub
> Pages looks for that name as the front page.

---

## After it's live

- **Order form:** the first real submission sends a confirmation email to
  violinteacher1@gmail.com — click the verify link once and orders flow after that.
  (Do a quick test order yourself to trigger and clear this.)
- **Custom domain (optional):** if Faith ever buys a domain like
  `faithsblissfuldelights.com`, you can point it at the site in
  Settings → Pages → Custom domain.
- **Updating the site later:** edit a file and re-upload it (or `git push`).
  Changes go live in a minute or two.

## Still-open placeholders (search for `[ ]` brackets)
- `[Service Area]` — in the footers
- `[Pickup location / Service area]` — `order.html` sidebar
- `[e.g. Please order at least 1 week ahead]` — `order.html` lead time

Already done: phone, email (violinteacher1@gmail.com), Facebook link, order form.
