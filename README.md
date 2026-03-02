# Weather Now - Dashboard

High-performance weather dashboard built with React and Feature-Sliced Design.
Focused on efficient network usage, optimized assets, and scalable architecture.

# Demo version
Link: https://weather-now-dashboard.vercel.app/

## Performance & Optimization
This project was engineered for speed and efficiency, especially for low-bandwidth environments:

* Network Efficiency: Implemented useDebounce and RTK Query's auto-caching to eliminate redundant API calls and prevent rate-limiting.
* Asset Performance: Integrated vite-plugin-image-optimizer for automated compression (PNG -68%, SVG -10%).
* Web Fonts: All fonts converted to WOFF2 (Brotli compression), reducing weight by 52% (~500 KB savings).
* Bundle Size: JS bundle optimized to ~120 KB (gzipped) for rapid initial load.
* Architecture: Strictly follows FSD (Feature-Sliced Design) methodology for superior scalability and maintainability.

## Tech Stack
* Core: React 19, TypeScript, Vite.
* State Management: Redux Toolkit + RTK Query (automated server state & caching).
* Styling: SCSS with CSS Modules for scoped and maintainable styles.

## Installation
1. Clone the repository: `git clone https://github.com/TiN0X/weather-now-dashboard.git`
2. Copy the contents of `.env.example` to `.env.local`
3. Install dependencies: `npm install`
4. Run development server: `npm run dev`