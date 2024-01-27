// 
document.addEventListener('DOMContentLoaded', function () {
    var darkBtn = document.getElementById("dark-btn");

    // Check for user's preference in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Set initial mode based on user's preference
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkBtn.classList.toggle('dark-btn-on', isDarkMode);

    // Toggle dark mode on button click
    darkBtn.onclick = function () {
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-mode");

        // Save user's preference in localStorage
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode').toString());
    };
});

// COPY BTN'S 

var code1 = document.getElementById("copy1")?.firstElementChild?.firstElementChild;
var code2 = document.getElementById("copy2")?.firstElementChild?.firstElementChild;
var code3 = document.getElementById("copy3")?.firstElementChild?.firstElementChild;
var code4 = document.getElementById("copy4")?.firstElementChild?.firstElementChild;
var button1 = document.querySelector(".copy-btn1");
var button2 = document.querySelector(".copy-btn2");
var button3 = document.querySelector(".copy-btn3");
var button4 = document.querySelector(".copy-btn4");

if (button1) {
    button1.addEventListener("click", function() {
        // Copy the text from the first code block to the clipboard
        copyText(code1);
        //Alert
        alert("Text copied to clipboard");
    });
}

if (button2) {
    button2.addEventListener("click", function() {
        copyText(code2);
        alert("Text copied to clipboard");
    });
}

if (button3) {
    button3.addEventListener("click", function() {
        copyText(code3);
        alert("Text copied to clipboard");
    });
}

if (button4) {
    button4.addEventListener("click", function() {
        copyText(code4);
        alert("Text copied to clipboard");
    });
}

// A function that copies the text from a code block to the clipboard
function copyText(code) {
    // Select the code block
    var range = document.createRange();
    range.selectNode(code);
    window.getSelection().addRange(range);
    // Try to copy the selected text
    try {
        document.execCommand("copy");
    } catch(err) {
        // Alert
        alert("Could not copy text");
    }
    // Remove the selection
    window.getSelection().removeAllRanges();
};


//
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".meun");
    navBar.classList.toggle("active")
};