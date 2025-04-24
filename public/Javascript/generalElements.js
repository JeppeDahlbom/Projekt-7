// Indlæs header
fetch("/public/HTML/Elements/header.html")
  .then(response => response.text())
  .then(data => {
    const header = document.querySelector("header");
    header.innerHTML = `<h1>${document.title}</h1>`;
    if (header) header.innerHTML += data;
  });

// Indlæs footer
fetch("/public/HTML/Elements/footer.html")
  .then(response => response.text())
  .then(data => {
    const footer = document.querySelector("footer");
    if (footer) footer.innerHTML = data;
  });
