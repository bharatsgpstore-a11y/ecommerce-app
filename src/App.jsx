import { useState } from "react";
import "./index.css";

const products = [
  {
    id: 1,
    name: "Premium Plastic Chair",
    price: 899,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657"
  },
  {
    id: 2,
    name: "Storage Container",
    price: 299,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f"
  },
  {
    id: 3,
    name: "Plastic Water Bottle",
    price: 199,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
  },
  {
    id: 4,
    name: "Plastic Stool",
    price: 499,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <header className="navbar">
        <div className="logo">MyShop</div>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart">
          🛒 Cart ({cart.length})
        </div>
      </header>

      <section className="hero">
        <h1>Welcome to MyShop</h1>
        <p>Quality products at the best prices</p>
        <button>Shop Now</button>
      </section>

      <main>
        <h2>Our Products</h2>

        <div className="products">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <p className="category">{product.category}</p>
                <h3>{product.name}</h3>

                <div className="bottom">
                  <strong>₹{product.price}</strong>

                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="cart-section">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((product, index) => (
                <div className="cart-item" key={index}>
                  <span>{product.name}</span>
                  <span>₹{product.price}</span>

                  <button onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              ))}

              <h3>Total: ₹{total}</h3>

              <button className="checkout">
                Proceed to Checkout
              </button>
            </>
          )}
        </section>
      </main>

      <footer>
        <p>© 2026 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
