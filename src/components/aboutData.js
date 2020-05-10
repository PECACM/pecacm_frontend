import Accordian from "./AccordianComponent";

const data = [
  {
    id: 1,
    name: "Annual Reports",
    to: `about/$annual-report`,
    path: `about/:annual-report`,
    component: { Accordian },
  },
  {
    id: 2,
    name: "Awards",
    to: `about/$awards`,
    path: `about/:awards`,
    component: {},
  },
  {
    id: 3,
    name: "History of Day",
    to: `about/$history-of-day`,
    path: `about/:history-of-day`,
    component: {},
  },
  {
    id: 4,
    name: "Member Services",
    to: `about/$member-services`,
    path: `about/:member-services`,
    component: {},
  },
  {
    id: 5,
    name: "People",
    to: `about/$people`,
    path: `about/:people`,
    component: {},
  },
  {
    id: 6,
    name: "Calender",
    to: `about/$calender`,
    path: `about/:calender`,
    component: {},
  },
  {
    id: 7,
    name: "Contact Us",
    to: `about/$contact-us`,
    path: `about/:calender`,
    component: {},
  },
];

export default data;
