import contactPage from "./pages/contant";
import homePage from "./pages/home";
import notFoundPage from "./pages/notFound";

const appEl = document.querySelector<HTMLDivElement>("#app");

const navLinksElements = document.querySelectorAll("a");

navLinksElements.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetPath = (event.target as HTMLAnchorElement).getAttribute("href");
    history.pushState({}, "", targetPath);
    updateAppContent();
  });
});

function updateAppContent() {
  const currentPath = window.location.pathname;
  console.log("🚀 ~ currentPath:", currentPath);
  if (currentPath === "/") {
    appEl!.innerHTML = homePage();
  } else if (currentPath === "/contact") {
    appEl!.innerHTML = contactPage();
  } else {
    appEl!.innerHTML = notFoundPage();
  }
}
