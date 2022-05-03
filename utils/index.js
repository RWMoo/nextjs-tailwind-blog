// joins the conditional result's style with the rest

export const classNamesHelper = (...classes) =>
  classes.filter(Boolean).join(" ");

export const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme");
  }
};
