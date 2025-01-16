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

export { updateAppContent };
