// Sample data representing the user's recently visited products
const recentlyVisitedProducts = [
    { name: "Product 1", price: "$19.99", image: "product1.jpg" },
    { name: "Product 2", price: "$29.99", image: "product2.jpg" },
    { name: "Product 3", price: "$39.99", image: "product3.jpg" }
];

// Function to dynamically populate the recently visited products section
function populateRecentlyVisitedProducts() {
    const recentlyVisitedSection = document.querySelector('.recently-visited');

    recentlyVisitedProducts.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('item');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        itemInfo.appendChild(productName);
        itemInfo.appendChild(productPrice);

        item.appendChild(image);
        item.appendChild(itemInfo);

        recentlyVisitedSection.appendChild(item);
    });
}

// Call the function to populate the recently visited products section
populateRecentlyVisitedProducts();
