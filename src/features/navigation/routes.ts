import homePage from "../../pages/home";
import contactPage from "../../pages/contant";
import notFoundPage from "../../pages/notFound";
import aboutPage from "../../pages/about";
import EventsPage from "../../pages/events";

const routes = [
  {
    path: "/",
    page: homePage,
  },
  {
    path: "/contact",
    page: contactPage,
  },
  {
    path: "/about",
    page: aboutPage,
  },
  {
    path: "/events",
    page: EventsPage,
  },
  {
    path: "*",
    page: notFoundPage,
  },
];

export { routes };
