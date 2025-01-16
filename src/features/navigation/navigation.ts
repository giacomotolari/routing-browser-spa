import { updateAppContent } from "./router";

const navLinksElements = document.querySelectorAll("a");

function navigation(appEl: HTMLDivElement) {
  navLinksElements.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // wir brauchen es um zu verhindern, dass der Browser die Seite neu lädt
      const targetPath = (event.target as HTMLAnchorElement).getAttribute(
        "href"
      );
      history.pushState({}, "", targetPath);
      updateAppContent(appEl);
    });
  });
}

export { navigation };
