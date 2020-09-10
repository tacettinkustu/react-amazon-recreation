import React from 'react';
import './App.css';


function App() {
  
  return (
        <div clasName="grid-container">
            <header clasName="header">
                <div clasName="brand">
                <button onclick="openMenu()">
                    &#9776;
                </button>
                <a href="index.html">amazona</a>
                </div>
                <div clasName="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
                </div>
            </header>
            <aside clasName="sidebar">
                <h3>
                Shopping Categories
                </h3>
                <button clasName="sidebar-close-button" onclick="closeMenu()">x</button>
                <ul>
                    <li>
                    <a href="index.html">Pants</a>
                    </li>
                    <li>
                    <a href="index.html">Shirt</a>
                    </li>
                </ul>
                
            </aside>
            <main clasName="main">
                <div clasName="content">
                <ul clasName="products">
                    <li>
                    <div clasName="product">
                        <img clasName="product-image" src="/images/d1.jpg" alt="product" />
                        <div clasName="product-name">
                        <a href="product.html">Slim Shirt</a>
                        </div>
                        <div clasName="product-brand">LAcoste</div>
                        <div clasName="product-price">$50</div>
                        <div clasName="product-rating">4.2 Stars (10 Reviews)</div>
                    </div>
                    </li>
                    <li>
                    <div clasName="product">
                        <img clasName="product-image" src="/images/d1.jpg" alt="product" />
                        <div clasName="product-name">
                        <a href="product.html">Slim Shirt</a>
                        </div>
                        <div clasName="product-brand">LAcoste</div>
                        <div clasName="product-price">$50</div>
                        <div clasName="product-rating">4.2 Stars (10 Reviews)</div>
                    </div>
                    </li>
                    <li>
                    <div clasName="product">
                        <img clasName="product-image" src="/images/d1.jpg" alt="product" />
                        <div clasName="product-name">
                        <a href="product.html">Slim Shirt</a>
                        </div>
                        <div clasName="product-brand">LAcoste</div>
                        <div clasName="product-price">$50</div>
                        <div clasName="product-rating">4.2 Stars (10 Reviews)</div>
                    </div>
                    </li>
                    <li>
                    <div clasName="product">
                        <img clasName="product-image" src="/images/d1.jpg" alt="product" />
                        <div clasName="product-name">
                        <a href="product.html">Slim Shirt</a>
                        </div>
                        <div clasName="product-brand">LAcoste</div>
                        <div clasName="product-price">$50</div>
                        <div clasName="product-rating">4.2 Stars (10 Reviews)</div>
                    </div>
                    </li>
                    <li>
                    <div clasName="product">
                        <img clasName="product-image" src="/images/d1.jpg" alt="product" />
                        <div clasName="product-name">
                        <a href="product.html">Slim Shirt</a>
                        </div>
                        <div clasName="product-brand">LAcoste</div>
                        <div clasName="product-price">$50</div>
                        <div clasName="product-rating">4.2 Stars (10 Reviews)</div>
                    </div>
                    </li>
                    <li>
                    <div clasName="product">
                        <img clasName="product-image" src="/images/d1.jpg" alt="product" />
                        <div clasName="product-name">
                        <a href="product.html">Slim Shirt</a>
                        </div>
                        <div clasName="product-brand">LAcoste</div>
                        <div clasName="product-price">$50</div>
                        <div clasName="product-rating">4.2 Stars (10 Reviews)</div>
                    </div>
                    </li>
                </ul>
                </div>
            </main>
            <footer clasName="footer">All right reserved.</footer>
        </div>
  )
}

export default App;