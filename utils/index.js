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

export const parseCategories = (posts) => {
  const categories = posts.map((post) => post.category);
  const filtered = Array.from(new Set(categories.map((a) => a.slug))).map(
    (slug) => {
      return categories.find((a) => a.slug === slug);
    }
  );
  return filtered;
};

export const currentDate = () => format(new Date(), "yyyy");

export const breakpoints = {
  xs: 400,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
