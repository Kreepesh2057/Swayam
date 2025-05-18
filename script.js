document.addEventListener('DOMContentLoaded', function() {
  // Initialize Bootstrap Toasts (for Add to Cart feedback)
  const toastElement = document.querySelector('.toast-container .toast');
  const toast = new bootstrap.Toast(toastElement);

  // Function to get query parameters from the URL (for category filtering if used)
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Function to filter products by category (if you have category links)
  function filterProductsByCategory(category) {
    const productCards = document.querySelectorAll('.card[data-category]');
    productCards.forEach(card => {
      const productCategory = card.dataset.category;
      if (category && productCategory !== category) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    });
  }

  // Add to Cart Functionality
  function setupAddToCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.dataset.product;
        const productPrice = this.dataset.price;
        console.log(`Added "${productName}" at Rs.${productPrice} to cart.`);
        toast.show(); // Show the toast notification
        // You would typically add code here to actually update the cart data
      });
    });
  }

  // Product Details Modal Functionality
  function setupProductDetailsModal() {
    const productDetailsModal = new bootstrap.Modal(document.getElementById('productDetailsModal'));
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const modalTitle = document.getElementById('product-name');
    const modalPrice = document.getElementById('product-price');
    const modalDescription = document.getElementById('product-description');
    const modalImage = document.querySelector('#productDetailsModal .product-details-image');

    // Product Data (Make sure this matches your products.html data-product-id and image paths)
    const productData = {
      '1': {
        name: 'Elegant Silk Top',
        price: 'Rs4500',
        description: 'A luxurious silk top perfect for evening wear. Features delicate detailing and a smooth, comfortable fit.',
        image: 'images/elegent silk top.jpg'
      },
      '2': {
        name: 'Summer Floral Dress',
        price: 'Rs.5900',
        description: 'A vibrant floral dress ideal for sunny days. Lightweight fabric and a flattering silhouette make it a summer essential.',
        image: 'images/summer floral dress.jpg'
      },
      '3': {
        name: 'Classic Linen Shirt',
        price: 'Rs.3900',
        description: 'A timeless linen shirt offering breathability and style. Suitable for both casual and semi-formal occasions.',
        image: 'images/classic linen shirt.jpg'
      },
      '4': {
        name: 'Slim Fit Denim Jeans',
        price: 'Rs.6900',
        description: 'Comfortable and stylish slim fit denim jeans. Made from durable denim with a modern look.',
        image: 'images/slim fit denim jeans.jpg'
      },
      '5': {
        name: 'Wool Blend Sweater',
        price: 'Rs.5500',
        description: 'A cozy wool blend sweater perfect for cooler weather. Soft and warm with a classic design.',
        image: 'images/wool blend sweater.jpeg'
      },
      '6': {
        name: 'Genuine Leather Jacket',
        price: 'Rs.4500',
        description: 'A stylish genuine leather jacket that adds a touch of edgy sophistication to any outfit. Durable and timeless.',
        image: 'images/genuine leather jacket.jpeg'
      }
      // Add more product data here for all your products
    };

    viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.dataset.productId;
        const product = productData[productId];
        if (product) {
          modalTitle.textContent = product.name;
          modalPrice.textContent = product.price;
          modalDescription.textContent = product.description;
          modalImage.src = product.image;
          modalImage.alt = product.name;
          productDetailsModal.show();
        } else {
          console.error(`Product data not found for ID: ${productId}`);
        }
      });
    });
  }

  // Initialize functions
  setupAddToCart();
  setupProductDetailsModal();

  // Initialize category filtering if the 'category' query parameter exists
  const categoryParam = getQueryParam('category');
  if (categoryParam) {
    filterProductsByCategory(categoryParam);
  }
});
