// src/scripts/copyToClipboard.js
document.querySelectorAll('.copy-code-button').forEach(button => {
    button.addEventListener('click', async () => {
      const code = button.previousElementSibling.innerText;
      await navigator.clipboard.writeText(code);
      button.innerText = 'Copied!';
      setTimeout(() => button.innerText = 'Copy', 2000);
    });
  });
  