const appEl = document.querySelector<HTMLDivElement>("#app");

const navLinksElements = document.querySelectorAll("a");

navLinksElements.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetPath = (event.target as HTMLAnchorElement).getAttribute("href");
    console.log("🚀 ~ link.addEventListener ~ targetPath:", targetPath);
    history.pushState({}, "", targetPath);
    updateAppContent();
  });
});

function updateAppContent() {
  const currentPath = window.location.pathname;
  console.log("🚀 ~ currentPath:", currentPath);
  if (currentPath === "/") {
    appEl!.innerHTML = `
  <h1>Home</h1>
  <div><p>Das ist die home page, welcome"</p></div>
  `;
  } else if (currentPath === "/contact") {
    appEl!.innerHTML = `
  <h1>Contact</h1>
  <div><p>Das ist die contact page, welcome"</p></div>
  `;
  } else {
    appEl!.innerHTML = `
  <h1>Not found!</h1>
  `;
  }
}
