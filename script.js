document.getElementById('changeColorBtn').addEventListener('click', function() {
    // Generate random RGB values for background color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    // Set the background color to the generated RGB values
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
// Get the button element
 transaction = document.getElementById('transaction').addEventListener('click', function() {
    // Redirect to the specified link when the button is clicked
    window.location.href = 'https://www.hotstar.com/in/home?ref=%2Fin'; // Replace 'https://example.com' with your desired link
});
