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
          <p>
            Mobile screen only, resize your navigator or navigate on your mobile
            phone.
          </p>
          <img
            className="one"
            src="/assets/screenshots/1.png"
            alt="screenshot 1"
          />
          <img
            className="two"
            src="/assets/screenshots/2.png"
            alt="screenshot 2"
          />
          <img
            className="three"
            src="/assets/screenshots/3.png"
            alt="screenshot 3"
          />
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
    display: "flex",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    "& p": {
      zIndex: 1,
      color: "var(--primary)",
      marginLeft: "12px",
      width: 350,
      fontSize: "18px",
      fontWeight: 600,
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
