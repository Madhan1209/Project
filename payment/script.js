document.addEventListener('DOMContentLoaded', () => {
    // Set initial time (in seconds)
    let timeRemaining = 900; // 15 minutes (900 seconds)

    // Function to update the timer display
    function updateTimer() {
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;

        // Format the time in HH : MM : SS format
        document.getElementById('timer').textContent = 
            `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    }

    // Start the countdown
    const timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            alert('Time is up! Please complete your payment.');
        }
    }, 1000); // Update every second

    // Verify UPI ID
    document.getElementById('verify-upi').addEventListener('click', () => {
        const upiId = document.getElementById('upi-id').value.trim();
        if (!upiId) {
            alert('Please enter a valid UPI ID!');
        } else {
            alert('UPI ID Verified!');
        }
    });

    // Verify Card Details
    document.getElementById('verify-card').addEventListener('click', () => {
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiryDate = document.getElementById('expiry-date').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (!cardNumber || !expiryDate || !cvv) {
            alert('Please fill in all card details!');
        } else if (!/^\d{16}$/.test(cardNumber)) {
            alert('Card number must be 16 digits!');
        } else if (!/^\d{3}$/.test(cvv)) {
            alert('CVV must be 3 digits!');
        } else {
            alert('Card Verified!');
        }
    });

    // COD Payment
    document.getElementById('pay-cod').addEventListener('click', () => {
        const address = document.getElementById('address').value.trim();
        if (!address) {
            alert('Please enter your address for Cash on Delivery!');
        } else {
            alert('Cash on Delivery selected. Additional ₹50 charge will be applied.');
        }
    });
});
