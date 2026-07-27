# Aaditya Ghimire Portfolio

A responsive personal portfolio site built as a static website for Cloudflare Pages.

## Publish with GitHub and Cloudflare Pages

1. On GitHub, create a new empty repository named `aaditya-ghimire-portfolio`.
2. In this folder, connect and push the repository:

   ```powershell
   git add .
   git commit -m "Create Aaditya Ghimire portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/aaditya-ghimire-portfolio.git
   git push -u origin main
   ```

3. In the Cloudflare dashboard, open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Choose the GitHub repository and use these settings:

   - Framework preset: `None`
   - Build command: `exit 0`
   - Build output directory: `.`
   - Production branch: `main`

5. Select **Save and Deploy**. Cloudflare gives you a temporary `pages.dev` address.
6. Open your Pages project → **Custom domains** → **Set up a custom domain**, then enter your `.np` domain. Cloudflare will configure the required DNS records because the domain is already in your Cloudflare account.

Every future push to the `main` branch automatically updates the live website.

## Before publishing

You can update the three focus cards with your own projects as they become available.
