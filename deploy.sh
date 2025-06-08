
#!/bin/bash

# Build the project
npm run build

# Create a simple index file for GitHub Pages if needed
echo "Building for GitHub Pages deployment..."

# The build files are now in the dist folder
echo "Build complete! Files are in the 'dist' folder."
echo "To deploy to GitHub Pages:"
echo "1. Push your code to GitHub"
echo "2. Go to Settings > Pages in your GitHub repo"
echo "3. Set source to 'GitHub Actions'"
echo "4. The workflow will automatically deploy your site"
