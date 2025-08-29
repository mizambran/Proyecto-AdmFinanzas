document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const status = document.getElementById('status');
  
  // URL Google Apps Script
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyNHXIOKADyhbOaH-6kPhWSeqQ68sz7i9k3H0Wwk63m8-X9TFgEBx_uhI5eA-6sR5At1g/exec';
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    status.textContent = 'Enviando...';
    status.style.color = 'black';
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => response.json())
      .then(data => {
        if (data.result === 'success') {
          status.textContent = data.message;
          status.style.color = 'green';
          form.reset();
        } else {
          status.textContent = 'Ocurrió un error. Por favor, intenta de nuevo.';
          status.style.color = 'red';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        status.textContent = 'Ocurrió un error en la conexión. Por favor, intenta de nuevo.';
        status.style.color = 'red';
      });
  });
});
