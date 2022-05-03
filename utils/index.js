// joins the conditional result's style with the rest

import { format, parseISO } from "date-fns";

export const classNamesHelper = (...classes) =>
  classes.filter(Boolean).join(" ");

export const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme");
  }
};

export const formatGraphCMSDate = (date) =>
  format(parseISO(date, "yyyy/MM/dd"), "dd/MM/yyyy");
