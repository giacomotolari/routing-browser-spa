import contactPage from "./pages/contant";
import homePage from "./pages/home";
import notFoundPage from "./pages/notFound";

const appEl = document.querySelector<HTMLDivElement>("#app");

const navLinksElements = document.querySelectorAll("a");

navLinksElements.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // wir brauchen es um zu verhindern, dass der Browser die Seite neu lädt
    const targetPath = (event.target as HTMLAnchorElement).getAttribute("href");
    history.pushState({}, "", targetPath);
    updateAppContent();
  });
});

async function updateAppContent() {
  const currentPath = window.location.pathname;
  let content = "";
  console.log("🚀 ~ currentPath:", currentPath);
  if (currentPath === "/") {
    content = await homePage();
  } else if (currentPath === "/contact") {
    content = await contactPage();
  } else {
    content = await notFoundPage();
  }

  appEl!.innerHTML = content;
}

window.addEventListener("load", updateAppContent);
