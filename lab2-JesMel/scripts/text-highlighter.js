// all paragraphs
const paragraphs = document.querySelectorAll('.paragraph');

// first paragraph
const firstParagraph = document.querySelector('.paragraph');

// Select buttons
const highlightBtn = document.getElementById('highlight-btn');
const clearBtn = document.getElementById('clear-btn');
const toggleBtn = document.getElementById('toggle-btn');

// error check
if (!paragraphs || paragraphs.length === 0) {
    console.error("No paragraphs found with class 'paragraph'");
}

if (!firstParagraph) {
    console.error("First paragraph not found");
}

if (!highlightBtn) {
    console.error("Highlight button not found");
}

if (!clearBtn) {
    console.error("Clear button not found");
}

if (!toggleBtn) {
    console.error("Toggle button not found");
}

// Highlight All
if (highlightBtn && paragraphs.length > 0) {
    highlightBtn.addEventListener('click', () => {
        paragraphs.forEach(p => {
            p.classList.add('highlight');
        });
    });
}

// Clear Highlights
if (clearBtn && paragraphs.length > 0) {
    clearBtn.addEventListener('click', () => {
        paragraphs.forEach(p => {
            p.classList.remove('highlight');
        });
    });
}

// Toggle First Paragraph
if (toggleBtn && firstParagraph) {
    toggleBtn.addEventListener('click', () => {
        firstParagraph.classList.toggle('highlight');
    });
}
