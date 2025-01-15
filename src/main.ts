const currentPath = window.location.pathname;
console.log("🚀 ~ currentPath:", currentPath);

const appEl = document.querySelector<HTMLDivElement>("#app");

const navLinksElements = document.querySelectorAll("a");

navLinksElements.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetPath = (event.target as HTMLAnchorElement).getAttribute("href");
    console.log("🚀 ~ link.addEventListener ~ targetPath:", targetPath);
    history.pushState({}, "", targetPath);
  });
});

// const h1El = document.createElement("h1");

// if (currentPath === "/") {
//   h1El.textContent = "Home";
// } else if (currentPath === "/contact") {
//   h1El.textContent = "Contact";
// } else {
//   h1El.textContent = "Not found!";
// }

// appEl?.appendChild(h1El);
