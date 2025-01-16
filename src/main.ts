import { navigation } from "./features/navigation";
import { initRouter } from "./features/router";

const appEl = document.querySelector<HTMLDivElement>("#app");

initRouter(appEl!);
navigation(appEl!);
