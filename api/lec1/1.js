document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.example.com/products')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('products-container');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>`;
                container.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching the products:', error));
});
