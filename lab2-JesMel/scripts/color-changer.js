// Select all boxes
const boxes = document.querySelectorAll('.box');

// Select buttons
const redBtn = document.getElementById('btn-red');
const blueBtn = document.getElementById('btn-blue');
const greenBtn = document.getElementById('btn-green');
const resetBtn = document.getElementById('reset-btn');


// Error checking
if (boxes.length === 0) {
    console.error("No boxes found");
}

if (!redBtn || !blueBtn || !greenBtn || !resetBtn) {
    console.error("One or more buttons not found");
}


// Make Red
if (redBtn) {
    redBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = '#f110007e';
        });
    });
}


// Make Blue
if (blueBtn) {
    blueBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = '#1f5ce071';
        });
    });
}


// Make Green
if (greenBtn) {
    greenBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = '#1fe02f71';
        });
    });
}


// Reset
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        boxes.forEach(box => {
            box.style.backgroundColor = 'lightgray';
        });
    });
}
