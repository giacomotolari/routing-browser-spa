import { navigation } from "./features/navigation/navigation";
import { initRouter } from "./features/navigation/router";

const appEl = document.querySelector<HTMLDivElement>("#app");

initRouter(appEl!);
navigation(appEl!);
