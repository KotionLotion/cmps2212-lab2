// Select title by ID
const title = document.getElementById("title");

    if (!title) {
        console.error("Title element not found");
    } else {
        console.log("Title:", title);
    }


// Select first paragraph class "info"
const firstInfo = document.querySelector(".info");

    if (!firstInfo) {
        console.error("No paragraph with class 'info' found");
    } else {
        console.log("First info paragraph:", firstInfo);
    }


// Select all "action-btn"
const actionButtons = document.querySelectorAll(".action-btn");

    if (actionButtons.length === 0) {
        console.error("No buttons with class 'action-btn' found");
    } else {
        console.log("Action buttons:");
        actionButtons.forEach((btn, index) => {
            console.log(`Button ${index + 1}:`, btn);
        });
    }

    