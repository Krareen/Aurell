const products = document.querySelectorAll('.product');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// Function to show a specific product
function showProduct(index) {
  products.forEach((product, idx) => {
    if (idx === index) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
  updateCounter(index + 1);
}

// Function to update the counter displaying current product number
function updateCounter(index) {
  const counter = document.getElementById('counter');
  counter.textContent = `${index}/${products.length}`;
}

// Show the initial product and update the counter
showProduct(currentIndex);

// Function to go to the next product
function nextProduct() {
  currentIndex = (currentIndex + 1) % products.length;
  showProduct(currentIndex);
}

// Function to go to the previous product
function prevProduct() {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  showProduct(currentIndex);
}

// Event listeners for next and previous buttons
nextBtn.addEventListener('click', nextProduct);
prevBtn.addEventListener('click', prevProduct);
