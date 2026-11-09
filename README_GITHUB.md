# BinhiScan — GitHub Pages Ready

## Upload to GitHub (recommended: GitHub Desktop)

1. Download and extract this ZIP on your computer.
2. Install and open **GitHub Desktop**. Sign in to your GitHub account.
3. Choose **File → New repository** (or add this folder as an existing repository).
4. Set the local path to the extracted `BinhiScan` folder. If creating a new repository, create it in that folder.
5. Click **Publish repository**.

## Publish with GitHub Pages

1. Open the repository on GitHub.com.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then Save.
5. Wait for the Pages URL to appear. Open it using HTTPS. Camera access requires HTTPS or localhost.

## Important project structure

Keep the folders and files in this arrangement. Do not move the files out of their folders:

- `index.html`
- `app.js`, `style.css`, `seeds.js`
- `model/` — contains `model.json`, `metadata.json`, and `weights.bin`
- `lib/` — TensorFlow.js library location
- `training/` — optional training resources

The current package includes the trained model. `lib/tf.min.js` is not bundled; while online, `index.html` falls back to TensorFlow.js from jsDelivr. To support offline use, download TensorFlow.js 4.17.0 and save it as `lib/tf.min.js`.

**Do not upload the ZIP file as the website.** Extract it first and publish the extracted files. GitHub Pages serves the repository files, not the contents of a ZIP archive.
