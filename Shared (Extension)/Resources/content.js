// content.js

// Function to inject the dark mode CSS
function injectDarkModeCSS() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = browser.runtime.getURL("darkmode.css");
    document.head.appendChild(link);
}

//console.log("Content script running...", browser.runtime.getURL("darkmode.css"));
//console.log("Hostname: ", window.location.hostname);
//console.log("URL: ", window.location.href);

// Inject the dark mode CSS when the page loads
if (window.location.hostname === "news.ycombinator.com") {
    injectDarkModeCSS();
}
