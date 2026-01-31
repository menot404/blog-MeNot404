# MeNot404 Blog Platform

## Overview

MeNot404 is a modern, full-stack blog platform built with Node.js, Express, and EJS. It features a clean separation between server-side logic and client-side assets, providing a robust foundation for scalable web applications. The project demonstrates best practices in code organization, modularity, and maintainability.

## Features

- RESTful blog CRUD operations (Create, Read, Update, Delete)
- Modular MVC architecture (Models, Views, Controllers)
- EJS templating for dynamic server-side rendering
- Organized static assets (CSS, images, JS)
- Custom error pages (404)
- Environment-based configuration
- Scalable routing structure

## Project Structure

```
app.js                # Main application entry point
package.json          # Project metadata and dependencies
client/               # Frontend assets
  public/             # Publicly served static files
    css/              # Stylesheets
    img/              # Images
    index.js          # Client-side JS
  src/                # EJS templates
    views/            # Main views and layouts
    partials/         # Shared partials (header, footer, etc.)
server/               # Backend logic
  controllers/        # Route controllers
  data/               # Database configuration
  models/             # Mongoose models
  routes/             # Express routers
scripts/              # Utility scripts
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/menot404/blog-MeNot404.git
   cd blog-MeNot404
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment:**

   - Set up your MongoDB connection string in `server/data/configDB.js` or use environment variables as needed.

4. **Run the application:**
   ```bash
   npm start
   ```
   The server will start on the default port (e.g., 3000). Visit `http://localhost:3000` in your browser.

## Scripts

- `npm start` — Start the production server
- `npm run dev` — Start the server with nodemon for development (if configured)
- `node scripts/migrate-image-to-media.js` — Run image migration utility

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. For major changes, open an issue first to discuss your ideas.

## License

This project is licensed under the MIT License.

## Author

Developed by a Junior Node.js engineer.
