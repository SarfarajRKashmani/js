const nbar = () => {
    return `<nav class="navbarr">
        <div class="logo">Foodies</div>
        <ul class="nav-links">
            <li><a href="/food/index.html""><i class="fas fa-home"></i> Home</a></li>
            <li><a href="#about"><i class="fas fa-info-circle"></i> About</a></li>
            <li><a href="#"><i class="fas fa-envelope"></i> Contact Us</a></li>
            <li><a href="/food/pages/login.html"><i class="fas fa-user"></i> Login</a></li>
            <li><a href="/food/pages/signup.html"><i class="fas fa-shopping-cart"></i> SignUp</a></li>
            <li><a href="/food/pages/cart.html"><i class="fas fa-bag-shopping"></i> Cart</a></li>
        </ul>
    </nav>
    
     <footer class="footer">
      <div class="footer-content">
          <div class="social-links">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <p>&copy; 2024 Foodies. All Rights Reserved.</p>
      </div>
  </footer>`;
  };
  const styls = () => {
    return ` body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.navbarr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff6f61;
    padding: 10px 20px;
}

.navbarr .logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin:0px;
}

.nav-links li {
    display: inline;
}

.nav-links a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #ffe6e1;
}

.order-btn {
    background-color: #fff;
    color: #ff6f61;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.order-btn:hover {
    background-color: #ffe6e1;
    color: #ff6f61;
}
    .footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
    line-height:20px;
}

.footer .social-links a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
    font-size: 24px;
    transition: color 0.3s ease;
}

.footer .social-links a:hover {
    color: #ff6f61;
}

.footer p {
    margin: 10px 0 0;
    font-size: 14px;
}`;
  };
  
  export { nbar, styls };