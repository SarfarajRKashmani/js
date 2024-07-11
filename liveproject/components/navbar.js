const navbar=(login="login",signup="signup")=>{
    return `<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="bg-dark-subtle rounded-2 container-fluid">
      <a  href="#"><img class="logo" src="/liveproject/images/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg" alt="Logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class=" nav-link active" aria-current="page" href="/liveproject/liveproject.html"><i class="fa-solid fa-house"></i> Home</a>
          </li>
          <li class=" nav-item">
            <a class="nav-link" href="/liveproject/pages/products.html"><i class="fa-solid fa-bag-shopping"></i> Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/liveproject/pages/addproduct.html"><i class="fa-solid fa-plus"></i> Add Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/liveproject/pages/cart.html"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
          </li>
          <li id="log" class="nav-item">
            <a class="nav-link" href="/liveproject/pages/login.html"><i class="fa-regular fa-user"></i>${login}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/liveproject/pages/signup.html"> <i class="fa-solid fa-user-plus"></i>${signup}</a>
          </li>
        
          
        </ul>
        <form class="d-flex" role="search" id="search">
          <input id="searchvalue" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`
}
export default navbar




{/* <li class="nav-item">
<a onclick="togglePopup() class="nav-link" href="/liveproject/pages/popup.html"><i class="fa-brands fa-wpforms"></i></i> popup</a>
</li> */}