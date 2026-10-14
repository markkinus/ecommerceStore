# Driply

**Driply** is a React-based e-commerce web application that allows users to browse products, view product details, manage a shopping cart, and access a protected checkout page.

The project was built to practice React development, component-based architecture, routing, API integration, state management, and modern UI design.

## Features

- **Homepage:** Landing page with a Shop Now button.
- **Product Listing:** Fetches and displays products from the Fake Store API.
- **Product Details:** Displays individual product information.
- **Product Tabs:** Includes Overview, Reviews, and Specifications sections.
- **Search and Filtering:** Search products by title and filter by category.
- **Shopping Cart:** Add products, remove items, and update quantities.
- **Cart Summary:** Calculates item subtotals and the total price.
- **Login:** Demonstrates a basic login flow.
- **Protected Checkout:** Redirects unauthenticated users to the login page.
- **Responsive UI:** Uses Tailwind CSS and shadcn/ui components.

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- shadcn/ui
- React Router
- Axios
- Context API
- Fake Store API
- Git and GitHub

## Getting Started

### Prerequisites

Install the following:

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate into the project folder:

   ```bash
   cd ecommerceStore
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually:

   ```text
   http://localhost:5173
   ```

## Product Data

Driply retrieves product information from the [Fake Store API](https://fakestoreapi.com/).

The API provides sample product data, including titles, prices, categories, images, and descriptions.

## Project Structure

```text
src/
├── components/
│   ├── ui/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProtectedCheckout.jsx
├── context/
│   ├── AuthContext.jsx
│   └── CartContext.jsx
├── pages/
│   ├── Homepage.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── Login.jsx
│   └── product-tabs/
│       ├── Overview.jsx
│       ├── Reviews.jsx
│       └── Specifications.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Contributing and Collaboration

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test your changes locally.
5. Commit your changes.
6. Push your changes to your branch.
7. Create a Pull Request.

## LICENSE 
This project is licensed under the [MIT License](LICENSE).






