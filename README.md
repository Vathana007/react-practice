# Paradise Nursery - E-Commerce Shopping Cart Application

A dynamic web application for an online plant shop that allows users to browse plants, view details, add items to a shopping cart, and manage cart items.

## Project Overview

Paradise Nursery is a React-based e-commerce platform featuring:
- Product listing page with plant categories
- Shopping cart management with quantity controls
- Dynamic cart total calculations
- Responsive navigation
- Add to cart functionality with visual feedback

## Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

The app will run at `http://localhost:5173`

## Features

### Product Listing (ProductList.jsx)
- Display 6 unique plants per category
- 3 plant categories (Succulents, Tropical, Indoor)
- Show thumbnail, name, and price for each plant
- Add to Cart buttons with disable functionality after adding
- Dynamic cart icon with item count in navbar
- Navigation bar with Home, Plants, and Cart links

### Shopping Cart (CartItem.jsx)
- Display cart total amount
- Show total cost for each plant (quantity × price)
- Display thumbnail, name, and unit price
- Increase/decrease quantity buttons with live updates
- Delete button for each item
- Checkout button (Coming Soon message)
- Continue Shopping button links back to products

### Navigation (Navbar.jsx)
- Sticky navbar with shop name and logo
- Navigation links to Home, Plants, and Cart
- Cart icon with dynamic item count badge

### State Management
- Redux store for cart management
- CartSlice with reducers for add, remove, increase, decrease
- Centralized state for quantity and price calculations

## Project Structure

```
paradise-nursery/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── ProductList.jsx
│   │   ├── CartItem.jsx
│   │   └── App.jsx
│   ├── store/
│   │   ├── cartSlice.js
│   │   └── store.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── ProductList.css
│   │   └── CartItem.css
│   └── main.jsx
├── public/
│   └── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## Running the Project

1. Extract the project folder
2. Navigate to the directory:
   ```bash
   cd paradise-nursery
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Pushing to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Paradise Nursery shopping cart application"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin https://github.com/your-username/paradise-nursery.git

# Push to GitHub
git push -u origin main
```

## Task Completion

This project fulfills all 7 tasks:
- ✅ Task 1: README.md with project details
- ✅ Task 2: AboutUs.jsx (company details in app)
- ✅ Task 3: App.css with background styling
- ✅ Task 4: App.jsx with landing page and Get Started button
- ✅ Task 5: CartSlice.jsx with Redux cart management
- ✅ Task 6: ProductList.jsx with 18 plants across 3 categories
- ✅ Task 7: CartItem.jsx with full cart functionality

## Author

Chort Sereivathana
