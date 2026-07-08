# श्री साईसच्चरित पारायण सोहळा, शिर्डी – २०२६

A single-page devotional website for the **Shri Sai Satcharitra Parayan Sohala, Shirdi – 2026** (32nd year), hosted on **GitHub Pages** at the custom domain **www.saiparayan.org**.

Fully static — **no PHP, no Node.js, no database, no build tools.** Registration is submitted client-side to **Google Apps Script → Google Sheets** (and WhatsApp), so nothing server-side is required. Marathi / हिंदी / English language toggle is built in.

---

## 📁 Folder structure

Upload these to the **root** of your repository (not inside any subfolder):

```
saiparayan.org/            ← your GitHub repository root
├── index.html             ← homepage (images are embedded, no separate files needed)
├── style.css              ← all styles
├── script.js              ← all interactivity (countdown, form, language toggle, gallery)
├── CNAME                  ← custom domain (www.saiparayan.org)
├── robots.txt             ← SEO – lets search engines crawl
├── sitemap.xml            ← SEO – single-page sitemap
├── .nojekyll              ← tells GitHub Pages to serve files as-is
├── og-image.jpg           ← (you add this) 1200×630 social-share preview image
└── README.md              ← this file
```

> **Images:** all site images (Sai Charan logo, the 20 gallery photos) are **Base64-embedded** inside `index.html` / `script.js`, so you do **not** need an `assets/images/` folder for the site to work. The only image you must add yourself is `og-image.jpg` (used for WhatsApp/Facebook link previews).

---

## 🚀 Step-by-step: deploy to GitHub Pages

### 1. Create the repository
1. Sign in to GitHub → click **+** (top-right) → **New repository**.
2. Repository name: `saiparayan.org` (any name works; this one is tidy).
3. Set it **Public**. Do **not** add a README (you already have one). Click **Create repository**.

### 2. Upload the files
1. On the repo page click **Add file → Upload files**.
2. Drag in **all** the files listed above (`index.html`, `style.css`, `script.js`, `CNAME`, `robots.txt`, `sitemap.xml`, `.nojekyll`, `README.md`, and your `og-image.jpg`).
   - If `.nojekyll` is hard to drag (hidden file), you can instead create it in-browser: **Add file → Create new file**, name it `.nojekyll`, leave it empty, and commit.
3. Click **Commit changes**.

### 3. Enable GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait ~1 minute. A URL like `https://<your-username>.github.io/saiparayan.org/` will appear — that confirms the site is live.

### 4. Connect your custom domain
1. Still in **Settings → Pages → Custom domain**, type `www.saiparayan.org` → **Save**.
   (The `CNAME` file already contains this, so it should populate automatically.)
2. Now set DNS at your domain registrar (where you bought saiparayan.org):

   **For the `www` subdomain** — create a **CNAME** record:
   | Type  | Name / Host | Value / Points to            |
   |-------|-------------|------------------------------|
   | CNAME | `www`       | `<your-username>.github.io`  |

   **For the apex** `saiparayan.org` (so the bare domain also works) — create four **A** records:
   | Type | Name/Host | Value             |
   |------|-----------|-------------------|
   | A    | `@`       | `185.199.108.153` |
   | A    | `@`       | `185.199.109.153` |
   | A    | `@`       | `185.199.110.153` |
   | A    | `@`       | `185.199.111.153` |

   *(Optional IPv6 — add four **AAAA** records on `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.)*

   Because the `CNAME` file is `www.saiparayan.org`, GitHub will treat **www** as primary and automatically redirect the apex `saiparayan.org` → `www.saiparayan.org`.

### 5. Enable HTTPS
1. DNS can take a few minutes to ~24 hours to propagate.
2. Once GitHub verifies the domain, return to **Settings → Pages** and tick **Enforce HTTPS**.
3. Visit **https://www.saiparayan.org** — done. 🌼

---

## 🔧 Configuration (already set, change only if needed)

Open `script.js` and look at the `CONFIG` object near the top:

- `whatsapp: "919822285080"` — the Natya Rasik Manch WhatsApp number (country code + number, no `+`). All WhatsApp buttons and form submissions use this.
- `webAppUrl: "...script.google.com/macros/s/.../exec"` — the **Google Apps Script Web App URL** that saves each registration to your Google Sheet. To change it: deploy your Apps Script as a Web App (*Execute as: Me*, *Who has access: Anyone*) and paste the `/exec` URL here.

No other server setup is needed — the form posts directly from the browser to Apps Script.

---

## 🖼️ Add the social-share image (recommended)

For rich link previews on WhatsApp / Facebook, create a **1200 × 630 px** JPG (event banner + title) and upload it to the repo root as **`og-image.jpg`**. The meta tags in `index.html` already point to `https://www.saiparayan.org/og-image.jpg`.

---

## 📱 Notes

- **Mobile responsive** — phone, tablet, and desktop layouts are all handled.
- **Languages** — मराठी (default) · हिंदी · English toggle in the header; numbers show in Latin digits for Hindi/English.
- **No external dependencies / CDNs** — everything is self-contained, so the site loads even if third-party services are down.
- After any edit, just re-upload the changed file(s) and GitHub Pages redeploys automatically within a minute.

॥ ॐ साई राम ॥
