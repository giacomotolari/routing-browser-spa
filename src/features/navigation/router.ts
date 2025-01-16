import { routes } from "./routes";

/**
 * Updates the content of the application based on the current path.
 *
 * This function retrieves the current path from the window location,
 * finds the corresponding route from the `routes` array, and updates
 * the inner HTML of the provided `appEl` element with the content
 * fetched from the route's page function.
 *
 * @param {HTMLDivElement} appEl - The HTML element where the content will be updated.
 */
async function updateAppContent(appEl: HTMLDivElement) {
  const currentPath = window.location.pathname;

  let content = "";

  /**
   * Finds the route that matches the current path or a wildcard route.
   *
   * This function searches through the `routes` array to find a route object
   * whose `path` property matches the `currentPath`. If no such route is found,
   * it falls back to finding a route with a wildcard path ("*").
   *
   * @param routes - An array of route objects, each containing a `path` property.
   * @param currentPath - The current path to match against the routes.
   * @returns The matched route object or the wildcard route object if no match is found.
   */
  const route =
    routes.find((route) => route.path === currentPath) ||
    routes.find((route) => route.path === "*");

  content = await route!.page();

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
