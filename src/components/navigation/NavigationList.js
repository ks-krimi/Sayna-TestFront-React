import { PersonOutline, Search } from "@material-ui/icons";
import Home from "../svg/Home";
import DeliveryMan from "../svg/DeliveryMan";
import Document from "../svg/Document";

const listItems = [
  {
    path: "/",
    label: "Home",
    icon: <Home />,
  },
  {
    path: "/pickup",
    label: "Pickup",
    icon: <DeliveryMan />,
  },
  {
    path: "/search",
    label: "Search",
    icon: <Search />,
  },
  {
    path: "/order",
    label: "Order",
    icon: <Document />,
  },
  {
    path: "/account",
    label: "Account",
    icon: <PersonOutline />,
  },
];

export default listItems;
