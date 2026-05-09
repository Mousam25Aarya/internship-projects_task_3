const productData = [
    {
        name: "Laptop",
        category: "electronics",
        price: 50000
    },
    {
        name: "Shoes",
        category: "fashion",
        price: 2000
    },
    {
        name: "Mobile",
        category: "electronics",
        price: 30000
    }
];

function displayProducts(products) {
    const productContainer = document.getElementById("products");

    productContainer.innerHTML = "";

    products.forEach(product => {
        productContainer.innerHTML += `
            <div class="card">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
            </div>
        `;
    });
}

function filterProducts() {
    const filterValue = document.getElementById("filter").value;

    if(filterValue === "all") {
        displayProducts(productData);
    }
    else {
        const filtered = productData.filter(product => product.category === filterValue);

        displayProducts(filtered);
    }
}

function sortProducts() {
    const sortValue = document.getElementById("sort").value;

    let sortedProducts = [...productData];

    if(sortValue === "low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(sortedProducts);
}

window.onload = function() {
    displayProducts(productData);
}