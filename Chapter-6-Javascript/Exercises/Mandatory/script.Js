document.getElementById('calculateBtn').addEventListener('click', function() {
    // Get input values
    var petrolCost = parseFloat(document.getElementById('petrolCost').value);
    var litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
    
    // Calculate total cost
    var totalCost = petrolCost * litersPurchased;
    
    // Display total cost
    document.getElementById('totalCost').textContent = 'Total Cost: $' + totalCost.toFixed(2);
});