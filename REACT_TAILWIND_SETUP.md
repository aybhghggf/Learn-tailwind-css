# Complete React + Tailwind CSS Setup Guide

## Step 1: Create a New React Project
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
```

## Step 2: Install Dependencies
```bash
npm install
```

## Step 3: Install Tailwind CSS and Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
```

## Step 4: Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```
This creates both `tailwind.config.js` and `postcss.config.js` files.

## Step 5: Configure Tailwind Config File
Update `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Step 6: Add Tailwind Directives to CSS
Replace the content of `src/index.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Step 7: Verify PostCSS Configuration
Your `postcss.config.js` should look like:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Step 8: Test Tailwind in Your App
Update `src/App.jsx` to test Tailwind:
```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Hello Tailwind CSS!
        </h1>
        <p className="text-gray-600">
          Your React + Tailwind setup is working perfectly! 🎉
        </p>
      </div>
    </div>
  )
}

export default App
```

## Step 9: Start the Development Server
```bash
npm run dev
```

## Step 10: Verify Everything Works
- Open your browser to the local development URL (usually `http://localhost:5173`)
- You should see styled content with Tailwind classes applied
- Check browser dev tools to confirm Tailwind CSS is loaded

## Quick Setup Commands (All in One)
```bash
# Create project and navigate
npm create vite@latest my-react-app -- --template react
cd my-react-app

# Install all dependencies
npm install
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p

# Start development server
npm run dev
```

## Common Issues & Solutions:

### Issue 1: Styles not applying
- **Solution**: Check that your `content` paths in `tailwind.config.js` are correct
- Make sure you're using the right file extensions

### Issue 2: Build errors
- **Solution**: Ensure `postcss.config.js` exists and has the correct plugin configuration

### Issue 3: Purging issues in production
- **Solution**: Verify your content paths include all files where you use Tailwind classes

## Optional: VS Code Extensions
For better development experience, install:
- **Tailwind CSS IntelliSense** - Autocomplete and syntax highlighting
- **PostCSS Language Support** - Better CSS support

## File Structure After Setup
```
my-react-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css (with Tailwind directives)
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

That's it! You now have a fully functional React project with Tailwind CSS. You can start building beautiful, responsive UIs using Tailwind's utility classes! 🚀
