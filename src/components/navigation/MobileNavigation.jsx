import React, { useEffect, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Tooltip,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import listItems from "./NavigationList";

function MobileNavigation({ className }) {
  const [value, setValue] = useState(0);
  const history = useHistory();
  const location = useLocation();

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        history.push("/");
        break;

      case 1:
        history.push("/pickup");
        break;

      case 2:
        history.push("/search");
        break;

      case 3:
        history.push("/order");
        break;

      case 4:
        history.push("/account");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname === "/pickup") {
      setValue(1);
    } else if (location.pathname === "/search") {
      setValue(2);
    } else if (location.pathname === "/order") {
      setValue(3);
    } else if (location.pathname === "/account") {
      setValue(4);
    } else {
      setValue(null);
    }
  }, [location]);

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={className}
    >
      {listItems.map((navigation) => (
        <Tooltip title={navigation.label}>
          <BottomNavigationAction
            icon={navigation.icon}
            label={navigation.label}
            showLabel={true}
          />
        </Tooltip>
      ))}
    </BottomNavigation>
  );
}

export default MobileNavigation;
