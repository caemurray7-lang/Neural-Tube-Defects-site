Neural Tube Defects (NTDs) — Static Site
========================================

This folder contains a deploy-ready static website (no build tools).

Files
-----
- index.html
- styles.css
- script.js

How to deploy (Vercel - manual upload)
--------------------------------------
1) Go to https://vercel.com and sign in.
2) Click **New Project** → **Import manually**.
3) Drag this entire folder into the upload box.
4) Vercel will give you a live URL immediately (e.g., https://yourproject.vercel.app).
5) To add your custom domain (www.yourdomain.com): Project → Settings → Domains → Add, then follow the DNS prompts.

How to deploy (Netlify - drag-and-drop)
---------------------------------------
1) Go to https://app.netlify.com/drop.
2) Drag this entire folder into the page.
3) Netlify will give you a live URL immediately (e.g., https://yourproject.netlify.app).
4) To use a custom domain: Site settings → Domain management → Add domain.

Editing content
---------------
- Open **index.html** and edit the text in each section (Overview, Types, Risk, Prevention, Diagnosis, Management, FAQ).
- You can add logos, images, or links using standard HTML.
- Colors/spacing: adjust **styles.css**.

Contact form
------------
This demo form doesn't send emails by itself. To connect it:
- Formspree: https://formspree.io — replace the form `onsubmit` handler with their action URL.
- Netlify Forms: Add `netlify` attributes to the form and deploy on Netlify.

Notes
-----
- This site is educational and not a substitute for medical advice.
