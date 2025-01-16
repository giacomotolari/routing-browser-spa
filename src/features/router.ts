import homePage from "../pages/home";
import contactPage from "../pages/contant";
import notFoundPage from "../pages/notFound";

async function updateAppContent(appEl: HTMLDivElement) {
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

/**
 * Initializes the router by setting up an event listener for the window's load event.
 * When the window loads, it updates the application content.
 *
 * @param appEl - The HTMLDivElement that represents the main application element.
 */
function initRouter(appEl: HTMLDivElement) {
  window.addEventListener("load", async () => {
    await updateAppContent(appEl!);
  });
}

export { updateAppContent, initRouter };
