import homePage from "../../pages/home";
import contactPage from "../../pages/contant";
import notFoundPage from "../../pages/notFound";
import aboutPage from "../../pages/about";
import EventsPage from "../../pages/events";
import EventPage from "../../pages/event";

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
    path: "/events/",
    page: EventsPage,
  },
  {
    path: "/events/:id",
    page: EventPage,
  },
  {
    path: "*",
    page: notFoundPage,
  },
];

export { routes };
