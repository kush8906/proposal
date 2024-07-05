function showResponse(answer) {
    const responseDiv = document.getElementById('response');
    if (answer === 'yes') {
        responseDiv.innerHTML = '<p>Yes! I can\'t wait to spend the rest of my life with you aaditya !</p>';
        responseDiv.style.color = '#4CAF50';
    } else {
        responseDiv.innerHTML = '<p>No. But I still love you.</p>';
        responseDiv.style.color = '#f44336';
    }
}

function moveButton() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * 300) - 150; // Random value between -150 and 150
    const randomY = Math.floor(Math.random() * 300) - 150; // Random value between -150 and 150
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
