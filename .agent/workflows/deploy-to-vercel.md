---
description: How to host the website on Vercel
---

# Deploying to Vercel

Follow these steps to get your portfolio live.

## Option A: GitHub (Continuous Deployment)
1. **Prepare Repository**: Ensure your latest changes are pushed to GitHub.
   ```bash
   git add .
   git commit -m "Add new project cards"
   git push origin main
   ```
2. **Vercel Dashboard**: Go to [vercel.com](https://vercel.com) and click **Import Project**.
3. **Select Repo**: Connect your GitHub account and select your portfolio repository.
4. **Project Settings**: 
   - Framework Preset: **Vite** (Detected automatically)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Click "Deploy" and wait for the "Congratulations" screen.

## Option B: Vercel CLI
1. Open your terminal in the project folder.
2. Run `npx vercel`.
3. Follow the prompts to link your account and project.
4. Run `npx vercel --prod` to deploy to production.
