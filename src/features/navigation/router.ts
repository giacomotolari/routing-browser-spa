import { routes } from "./routes";

async function updateAppContent(appEl: HTMLDivElement) {
  const currentPath = window.location.pathname;
  let content = "";
  const route =
    routes.find((route) => route.path === currentPath) ||
    routes.find((route) => route.path === "*");
  content = await route!.page();
  //   if (currentPath === "/") {
  //     content = await homePage();
  //   } else if (currentPath === "/contact") {
  //     content = await contactPage();
  //   } else if (currentPath === "/about") {
  //     content = await aboutPage();
  //   } else {
  //     content = await notFoundPage();
  //   }

  appEl!.innerHTML = content;
}

/**
 * Initializes the router by setting up an event listener for the window's load event.
 * When the window loads, it updates the application content.
 *
 * @param appEl - The HTMLDivElement that represents the main application element.
 */
function initRouter(appEl: HTMLDivElement) {
  window.addEventListener("load", () => {
    updateAppContent(appEl!);
  });
}

export { updateAppContent, initRouter };
