import { routerType } from "../types/router.types";
import About from "./About/About";
import { Home } from "./Home/Home";
import { Contact } from "./Contact/Contact";
import { MyWork } from "./MyWork/MyWork";
import { Fun } from "./Fun/Fun";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "about",
    element: <About />,
    title: "about",
  },
  {
    path: "contact",
    element: <Contact />,
    title: "contact",
  },
  {
    path: "mywork",
    element: <MyWork />,
    title: "mywork",
  },
  {
    path: "fun",
    element: <Fun />,
    title: "fun",
  },
];

export default pagesData;
