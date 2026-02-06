# GitHub Pages Deployment Guide

## Step 1: Initialize Git and Push to GitHub

Open PowerShell or Command Prompt in the `prangon_portfolio` directory and run:

```bash
# Navigate to project directory
cd "C:\Prangon's Portfolio\prangon_portfolio"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 2: Deploy to GitHub Pages

After pushing your code, deploy to GitHub Pages:

```bash
npm run deploy
```

This command will:
- Build your React app
- Create a `gh-pages` branch
- Deploy the build folder to GitHub Pages

## Step 3: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Select **gh-pages** branch
6. Select **/ (root)** folder
7. Click **Save**

## Step 4: Access Your Live Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

**Note:** It may take a few minutes for the site to be live after deployment.

## Future Updates

Whenever you make changes to your portfolio:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update portfolio"

# Push to GitHub
git push

# Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### If you get authentication errors:
- Make sure you're logged into GitHub
- Use GitHub Personal Access Token instead of password
- Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`

### If the site shows 404:
- Wait 5-10 minutes for GitHub Pages to update
- Check that the `gh-pages` branch exists in your repository
- Verify the homepage URL in package.json matches your GitHub Pages URL
