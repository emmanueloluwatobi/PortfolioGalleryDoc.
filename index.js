// javascript for my Light and Dark Mode
document.addEventListener('DOMContentLoaded', function () {
    var darkBtn = document.getElementById("dark-btn");
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    document.body.classList.toggle('dark-mode', isDarkMode);
    darkBtn.classList.toggle('dark-btn-on', isDarkMode);
    // Toggle BTN
    darkBtn.onclick = function () {
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-mode");

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
        copyText(code1);
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
// Function that copies the text to the clipboard 
function copyText(code) {
    
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
    
    window.getSelection().removeAllRanges();
};


// Hamburger for small devices
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".meun");
    navBar.classList.toggle("active")
};

// Skeleton Js
window.addEventListener('load', function () {
    
    document.getElementById('image1').style.display = 'block';
    document.getElementById('skeleton1').style.display = 'none';
    document.getElementById('image2').style.display = 'block';
    document.getElementById('skeleton2').style.display = 'none';
    document.getElementById('image3').style.display = 'block';
    document.getElementById('skeleton3').style.display = 'none';
    document.getElementById('image4').style.display = 'block';
    document.getElementById('skeleton4').style.display = 'none';
    document.getElementById('image5').style.display = 'block';
    document.getElementById('skeleton5').style.display = 'none';
    document.getElementById('image6').style.display = 'block';
    document.getElementById('skeleton6').style.display = 'none';
    document.getElementById('image7').style.display = 'block';
    document.getElementById('skeleton7').style.display = 'none';
    document.getElementById('image8').style.display = 'block';
    document.getElementById('skeleton8').style.display = 'none';
    document.getElementById('image9').style.display = 'block';
    document.getElementById('skeleton9').style.display = 'none';
    document.getElementById('image10').style.display = 'block';
    document.getElementById('skeleton10').style.display = 'none';
    document.getElementById('image11').style.display = 'block';
    document.getElementById('skeleton11').style.display = 'none';
    document.getElementById('image12').style.display = 'block';
    document.getElementById('skeleton12').style.display = 'none';
    
});
