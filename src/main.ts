import { navigation } from "./features/navigation";
import { updateAppContent } from "./features/router";

const appEl = document.querySelector<HTMLDivElement>("#app");

navigation(appEl!);

window.addEventListener("load", async () => {
  await updateAppContent(appEl!);
});
