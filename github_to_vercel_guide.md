# GitHub to Vercel Deployment Guide

This guide will walk you through the process of deploying your enhanced Carlo SP Photography website to Vercel using GitHub.

## Step 1: Extract the Files

1. Download and extract the `carlo-sp-website-package.zip` file to your local computer
2. This package contains all the essential files needed for your website, including:
   - Enhanced components (Navbar, Footer, InstagramFeed)
   - Improved page layouts
   - Configuration files
   - Project setup files

## Step 2: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account (or create one if you don't have it)
2. Click on the "+" icon in the top-right corner and select "New repository"
3. Name your repository (e.g., "carlo-sp-photography")
4. Set it to Public or Private as you prefer
5. Click "Create repository"

## Step 3: Upload Files to GitHub

### Option 1: Using GitHub Desktop
1. Install [GitHub Desktop](https://desktop.github.com/) if you don't have it
2. Clone your new repository to your computer
3. Copy all the extracted files into the repository folder
4. Commit the changes with a message like "Initial commit with enhanced website files"
5. Push the changes to GitHub

### Option 2: Using Git Command Line
1. Open a terminal/command prompt in the directory where you extracted the files
2. Initialize a Git repository:
   ```
   git init
   ```
3. Add all files:
   ```
   git add .
   ```
4. Commit the files:
   ```
   git commit -m "Initial commit with enhanced website files"
   ```
5. Add your GitHub repository as remote:
   ```
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   ```
6. Push to GitHub:
   ```
   git push -u origin main
   ```

## Step 4: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in (or create an account)
2. Click "Add New..." and select "Project"
3. Connect your GitHub account if you haven't already
4. Select the repository you just created
5. Vercel will automatically detect that it's a Next.js project
6. Configure your project:
   - Project Name: carlo-sp-photography (or your preferred name)
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: Leave as default
   - Output Directory: Leave as default
7. Click "Deploy"

## Step 5: Install Dependencies and Complete Setup

Once your project is deployed, you'll need to install the required dependencies:

1. In your local project directory, run:
   ```
   npm install
   ```
2. This will install all the necessary packages including:
   - next
   - react
   - react-dom
   - tailwindcss
   - typescript
   - The required font packages

## Step 6: Verify and Test Your Website

1. After deployment completes, Vercel will provide you with a URL (e.g., https://carlo-sp-photography.vercel.app)
2. Visit this URL to verify your website is working correctly
3. Test all pages and features to ensure everything functions as expected
4. Test on different devices to verify responsive design

## Step 7: Set Up Custom Domain (Optional)

1. In your Vercel dashboard, go to your project settings
2. Click on "Domains"
3. Add your custom domain (e.g., carlosp.photography)
4. Follow Vercel's instructions to configure your DNS settings

## Troubleshooting

If you encounter any issues during deployment:

1. Check the Vercel build logs for specific errors
2. Ensure all dependencies are correctly listed in package.json
3. Verify that your Next.js configuration is correct
4. Make sure your file paths and imports are correct

## Making Future Updates

To update your website in the future:

1. Make changes to your local files
2. Commit and push the changes to GitHub
3. Vercel will automatically detect the changes and redeploy your website

## Need Help?

If you need assistance with the deployment process, you can:

1. Refer to [Vercel's documentation](https://vercel.com/docs)
2. Check [Next.js documentation](https://nextjs.org/docs)
3. Contact Vercel support through their website
