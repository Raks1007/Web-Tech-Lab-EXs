document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    const fetchDataButton = document.getElementById('fetchData');
  
    fetchDataButton.addEventListener('click', () => {
      fetch('/api/hello')
        .then((response) => response.json())
        .then((data) => {
          messageElement.textContent = data.message;
        });
    });
  });
  