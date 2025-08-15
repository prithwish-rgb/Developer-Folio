# Portfolio Deployment Guide

## Vercel Deployment Instructions

### Prerequisites
- GitHub account
- Vercel account (free)
- Your portfolio code pushed to GitHub

### Step-by-Step Deployment

#### 1. Push Code to GitHub
```bash
git add .
git commit -m "Prepare portfolio for deployment"
git push origin main
```

#### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your portfolio repository
5. Configure the following settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

#### 3. Environment Variables (Optional)
If you want to enable GitHub data fetching:
1. In Vercel project settings, go to "Environment Variables"
2. Add the following variables:
   - `REACT_APP_GITHUB_TOKEN`: Your GitHub personal access token
   - `GITHUB_USERNAME`: prithwish-rgb
   - `USE_GITHUB_DATA`: true
   - `MEDIUM_USERNAME`: (your Medium username if applicable)

#### 4. Custom Domain (Optional)
1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

### Build Configuration
- The project is configured to work without GitHub data by default
- Environment variables are set to disable GitHub API calls for easier deployment
- All custom sections (About, Skills, Education, etc.) work without external APIs

### Troubleshooting
- If build fails, check the Vercel build logs
- Ensure all image assets are in the correct paths
- Verify environment variables are set correctly if using GitHub integration

### Project Features
- ✅ Custom About section with profile picture
- ✅ Skills and education sections
- ✅ Project showcase
- ✅ Achievement certificates
- ✅ Contact information
- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ SEO optimized
