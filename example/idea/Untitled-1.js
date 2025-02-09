function filterSelection(category) {
    let products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        }
    });

    let buttons = document.querySelectorAll('.categories button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
