import React from "react";
import { makeStyles } from "@material-ui/core";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { MobileNavigation } from "../navigation";

function Layout({ children }) {
  const classes = useStyles();
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        <div className={classes.upToSM}>
          screen mobile only, resize your navigator
        </div>
        <div className={classes.layout}>
          {children}
          <MobileNavigation className={classes.mobileNavigation} />
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

const useStyles = makeStyles((theme) => ({
  upToSM: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  layout: {
    minHeight: "inherit",
    minWidth: "inherit",
    paddingBottom: 55,
    color: theme.palette.getContrastText(theme.palette.background.default),
    background: theme.palette.background.default,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileNavigation: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default Layout;
