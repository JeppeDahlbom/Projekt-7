// Indlæs header
fetch("/header.html")
    .then(response => response.text())
    .then(data => {
    const header = document.querySelector("header");
    if (header) header.innerHTML = data;
    });

// Indlæs footer
fetch("/../HTML/Elements/HTML/header.html")
    .then(response => response.text())
    .then(data => {
    const footer = document.querySelector("footer");
    if (footer) footer.innerHTML = data;
    });