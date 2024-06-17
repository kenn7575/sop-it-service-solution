import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { useLocation } from "react-router-dom";

export function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p);
  console.log("🚀 ~ Breadcrumbs ~ paths:", paths);
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {paths.length === 0 ? (
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="#">Hjem</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          paths.map((path, index) => (
            <React.Fragment key={path}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <a href="#">{path}</a>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < paths.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
