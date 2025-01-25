import { lazy } from "react";

const exclude = ["components", "Login", "Home"];

export function getPages() {
  const allPages = import.meta.glob("../pages/**/*.tsx");

  return Object.entries(allPages)
    .filter(([path]) => {
      for (const excludePath of exclude) {
        if (path.includes(excludePath)) return false;
      }

      return true;
    })
    .map(([path, page]) => {
      let name = path
        .replace("../pages/", "")
        .replace(".tsx", "")
        .replace("/index", "")
        .replace("edit", ":id");

      return { path: name.toLowerCase(), element: lazy(page as any) };
    });
}
