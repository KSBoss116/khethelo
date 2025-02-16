const products = [
    { name: "Product 1", image: "images/hero-pic.jpg", desc: "Short product description", price: "R4566.00", category: "men", PID: "1234597891234567", Code: "hbdn5621", Amount: "70" }, 
    { name: "Product 2", image: "images/hero-pic.jpg", desc: "Another product description", price: "R280.00", category: "girls", PID: "1234567891034567", Code: "kisq1252", Amount: "400" }, 
    { name: "Product 3", image: "images/hero-pic.jpg", desc: "More details about this product", price: "R450.00", category: "boys", PID: "1234547891234567", Code: "gres1038", Amount: "390" }, 
    { name: "Product 4", image: "images/hero-pic.jpg", desc: "More details about this product", price: "R450.00", category: "accessories", PID: "1234587891234567", Code: "hyvd7292", Amount: "157" },
    { name: "Leather Wallet", image: "images/hero-pic.jpg", desc: "Premium leather wallet", price: "R599.99", category: "accessories", PID: "2234597891234567", Code: "lw4521", Amount: "50" },
    { name: "Running Shoes", image: "images/hero-pic.jpg", desc: "Comfortable running shoes", price: "R999.00", category: "shoes", PID: "3234597891234567", Code: "rs9856", Amount: "100" },
    { name: "Baseball Cap", image: "images/hero-pic.jpg", desc: "Stylish baseball cap", price: "R250.00", category: "hats", PID: "4234597891234567", Code: "bc6584", Amount: "200" },
    { name: "Denim Jacket", image: "images/hero-pic.jpg", desc: "Classic denim jacket", price: "R1200.00", category: "men", PID: "5234597891234567", Code: "dj7645", Amount: "60" },
    { name: "Summer Dress", image: "images/hero-pic.jpg", desc: "Lightweight summer dress", price: "R850.00", category: "women", PID: "6234597891234567", Code: "sd8963", Amount: "80" },
    { name: "Sneakers", image: "images/hero-pic.jpg", desc: "Casual white sneakers", price: "R799.00", category: "shoes", PID: "7234597891234567", Code: "sn5236", Amount: "120" },
    { name: "Beanie", image: "images/hero-pic.jpg", desc: "Warm winter beanie", price: "R180.00", category: "hats", PID: "8234597891234567", Code: "bn7412", Amount: "300" },
    { name: "Leather Belt", image: "images/hero-pic.jpg", desc: "Classic brown leather belt", price: "R399.00", category: "accessories", PID: "9234597891234567", Code: "lb3298", Amount: "90" },
    { name: "Casual Shirt", image: "images/hero-pic.jpg", desc: "Comfortable casual shirt", price: "R600.00", category: "men", PID: "10234597891234567", Code: "cs2345", Amount: "150" },
    { name: "Formal Heels", image: "images/hero-pic.jpg", desc: "Elegant formal heels", price: "R1200.00", category: "shoes", PID: "11234597891234567", Code: "fh5678", Amount: "70" },
    { name: "Bucket Hat", image: "images/hero-pic.jpg", desc: "Trendy bucket hat", price: "R220.00", category: "hats", PID: "12234597891234567", Code: "bh9876", Amount: "250" },
    { name: "Crossbody Bag", image: "images/hero-pic.jpg", desc: "Fashionable crossbody bag", price: "R750.00", category: "accessories", PID: "13234597891234567", Code: "cb4321", Amount: "80" },
    { name: "Loafers", image: "images/hero-pic.jpg", desc: "Stylish brown loafers", price: "R1100.00", category: "shoes", PID: "14234597891234567", Code: "lf2349", Amount: "60" },
    { name: "Winter Gloves", image: "images/hero-pic.jpg", desc: "Warm woolen gloves", price: "R250.00", category: "accessories", PID: "15234597891234567", Code: "wg6789", Amount: "120" },
    { name: "Slim-fit Jeans", image: "images/hero-pic.jpg", desc: "Modern slim-fit jeans", price: "R999.00", category: "men", PID: "16234597891234567", Code: "sf8765", Amount: "100" },
    { name: "Gold Earrings", image: "images/hero-pic.jpg", desc: "Elegant gold earrings", price: "R1450.00", category: "accessories", PID: "17234597891234567", Code: "ge5632", Amount: "40" },
    { name: "Sport Shoes", image: "images/hero-pic.jpg", desc: "Lightweight sport shoes", price: "R890.00", category: "shoes", PID: "18234597891234567", Code: "ss9874", Amount: "130" },
    { name: "Summer Hat", image: "images/hero-pic.jpg", desc: "Breathable summer hat", price: "R320.00", category: "hats", PID: "19234597891234567", Code: "sh6754", Amount: "220" },
    { name: "Tote Bag", image: "images/hero-pic.jpg", desc: "Spacious tote bag", price: "R590.00", category: "accessories", PID: "20234597891234567", Code: "tb2367", Amount: "90" },
    { name: "Polo T-shirt", image: "images/hero-pic.jpg", desc: "Classic polo t-shirt", price: "R450.00", category: "men", PID: "21234597891234567", Code: "pt5623", Amount: "200" },
    { name: "Stylish Sandals", image: "images/hero-pic.jpg", desc: "Comfortable stylish sandals", price: "R780.00", category: "shoes", PID: "22234597891234567", Code: "ss7684", Amount: "100" },
    { name: "Knitted Scarf", image: "images/hero-pic.jpg", desc: "Warm knitted scarf", price: "R300.00", category: "accessories", PID: "23234597891234567", Code: "ks8945", Amount: "150" },
    { name: "Flip Flops", image: "images/hero-pic.jpg", desc: "Casual flip flops for everyday wear", price: "R150.00", category: "shoes", PID: "24234597891234567", Code: "ff1234", Amount: "200" },
    { name: "Gladiator Sandals", image: "images/hero-pic.jpg", desc: "Stylish gladiator sandals for a bold look", price: "R950.00", category: "shoes", PID: "25234597891234567", Code: "gs5678", Amount: "80" },
    { name: "Wedge Sandals", image: "images/hero-pic.jpg", desc: "Elegant wedge sandals for a chic appearance", price: "R1100.00", category: "shoes", PID: "26234597891234567", Code: "ws9101", Amount: "60" },
    { name: "Slide Sandals", image: "images/hero-pic.jpg", desc: "Comfortable slide sandals for casual outings", price: "R450.00", category: "shoes", PID: "27234597891234567", Code: "ss1121", Amount: "150" },
    { name: "Platform Sandals", image: "images/hero-pic.jpg", desc: "Trendy platform sandals for a fashionable look", price: "R1300.00", category: "shoes", PID: "28234597891234567", Code: "ps3141", Amount: "70" },
    { name: "Espadrille Sandals", image: "images/hero-pic.jpg", desc: "Classic espadrille sandals for summer", price: "R850.00", category: "shoes", PID: "29234597891234567", Code: "es5161", Amount: "90" },
    { name: "Hiking Sandals", image: "images/hero-pic.jpg", desc: "Durable hiking sandals for outdoor adventures", price: "R1200.00", category: "shoes", PID: "30234597891234567", Code: "hs7181", Amount: "50" },
    { name: "Boho Sandals", image: "images/hero-pic.jpg", desc: "Bohemian-style sandals for a free-spirited vibe", price: "R700.00", category: "shoes", PID: "31234597891234567", Code: "bs9202", Amount: "110" },
    { name: "Strappy Sandals", image: "images/hero-pic.jpg", desc: "Feminine strappy sandals for a delicate look", price: "R900.00", category: "shoes", PID: "32234597891234567", Code: "st3242", Amount: "85" },
    { name: "Orthopedic Sandals", image: "images/hero-pic.jpg", desc: "Comfortable orthopedic sandals for foot support", price: "R950.00", category: "shoes", PID: "33234597891234567", Code: "os5262", Amount: "65" }
];

const itemList = document.querySelector('.item_list');
const searchInput = document.querySelector('#search-bar'); // Reference to search input

// Function to calculate Levenshtein distance
function levenshteinDistance(s1, s2) {
    const len1 = s1.length, len2 = s2.length;
    const dp = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(0));

    for (let i = 0; i <= len1; i++) dp[i][0] = i;
    for (let j = 0; j <= len2; j++) dp[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,   // Deletion
                dp[i][j - 1] + 1,   // Insertion
                dp[i - 1][j - 1] + cost // Substitution
            );
        }
    }
    return dp[len1][len2];
}

// Function to display products
function displayProducts(filteredProducts) {
    itemList.innerHTML = ""; // Clear previous items
    filteredProducts.forEach(product => {
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p><strong>PID:</strong> ${product.PID}</p>
            <p><strong>Code:</strong> ${product.Code}</p>
            <button class="add-to-cart">${product.price}</button>
        `;
        itemList.appendChild(item);
    });
}

// Display all products initially
displayProducts(products);

// Search functionality
searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase();

    if (searchText === "") {
        displayProducts(products); // Show all products if search is empty
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchText) || 
        product.PID.includes(searchText) || 
        product.Code.toLowerCase().includes(searchText)
    );

    // Apply fuzzy search only if no exact match is found in PID or Code
    if (filteredProducts.length === 0) {
        let fuzzyResults = products.map(product => ({
            ...product,
            similarity: levenshteinDistance(searchText, product.name.toLowerCase())
        })).sort((a, b) => a.similarity - b.similarity)
          .filter(product => product.similarity <= 3); // Allow max 3 edits

        displayProducts(fuzzyResults);
    } else {
        displayProducts(filteredProducts);
    }
});

// Function to filter products by category
function filterSelection(category) {
    let filteredProducts;
    if (category === "all") {
        filteredProducts = products; // Show all products
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    displayProducts(filteredProducts);
}

// Add event listeners to category buttons
document.querySelectorAll('.categories button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelector('.categories .active')?.classList.remove('active'); // Remove active class
        this.classList.add('active'); // Add active class to clicked button
        const category = this.textContent.toLowerCase(); // Get the category text
        filterSelection(category === "all" ? "all" : category); // Pass category text as filter
    });
});