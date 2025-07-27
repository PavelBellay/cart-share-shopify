document.getElementById('cart-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('cart-input').value.trim();
  const encoded = encodeURIComponent(input);
  const link = `https://your-app-url.com/cart?items=${encoded}`;

  document.getElementById('share-link').value = link;
  document.getElementById('result').classList.remove('hidden');
});

document.getElementById('copy-btn').addEventListener('click', function () {
  const link = document.getElementById('share-link');
  link.select();
  link.setSelectionRange(0, 99999);
  document.execCommand('copy');

  this.textContent = '✅ Copied!';
  setTimeout(() => {
    this.textContent = '📋 Copy';
  }, 1500);
});
