// import { dynamic } from "react";
import React from "react";
import dynamic from "next/dynamic";
const Introduction = dynamic(() => import("./components/Introduction"), {
  ssr: false,
});

const Installation = dynamic(() => import("./components/Installation"), {
  ssr: false,
});
const documentationRoutes = [
  {
    groupName: "Getting Started",
    nav: [
      {
        path: "introduction",
        label: "Introduction",
        component: <Introduction />,
      },
      {
        path: "installation",
        label: "Installation",
        component: <Installation />,
      },
      {
        path: "tailwindcss",
        label: "TailwindCSS",
        component: dynamic(
          async () => await import("./components/TailwindCss")
        ),
      },
      {
        path: "css",
        label: "CSS",
        component: dynamic(async () => await import("./components/Css")),
      },
      {
        path: "starter",
        label: "Starter",
        component: dynamic(async () => await import("./components/Starter")),
      },
      {
        path: "updating",
        label: "Updating",
        component: dynamic(async () => await import("./components/Updating")),
      },
    ],
  },
  {
    groupName: "Development",
    nav: [
      {
        path: "development-server",
        label: "Development Server",
        component: dynamic(
          async () => await import("./components/DevelopmentServer")
        ),
      },
      {
        path: "folder-structure",
        label: "Folder Structure",
        component: dynamic(
          async () => await import("./components/FolderStructure")
        ),
      },
      {
        path: "routing",
        label: "Routing",
        component: dynamic(async () => await import("./components/Routing")),
      },
      {
        path: "redux",
        label: "Redux",
        component: dynamic(async () => await import("./components/Redux")),
      },
      {
        path: "api-integration",
        label: "API Integration",
        component: dynamic(
          async () => await import("./components/ApiIntegration")
        ),
      },
      {
        path: "authentication",
        label: "Authentication",
        component: dynamic(
          async () => await import("./components/Authentication")
        ),
      },
      {
        path: "mock-api",
        label: "Mock Api",
        component: dynamic(async () => await import("./components/MockApi")),
      },
    ],
  },
  {
    groupName: "Configuration",
    nav: [
      {
        path: "app",
        label: "App Config",
        component: dynamic(
          async () => await import("./components/Application")
        ),
      },
      {
        path: "layouts",
        label: "Layouts",
        component: dynamic(async () => await import("./components/Layouts")),
      },
      {
        path: "navigation-config",
        label: "Navigation Config",
        component: dynamic(
          async () => await import("./components/NavigationConfig")
        ),
      },
      {
        path: "theme-color",
        label: "Theme Color",
        component: dynamic(async () => await import("./components/ThemeColor")),
      },
      {
        path: "internationalization",
        label: "Internationalization",
        component: dynamic(
          async () => await import("./components/Internationalization")
        ),
      },
      {
        path: "dark-light-mode",
        label: "Dark/Light Mode",
        component: dynamic(
          async () => await import("./components/DarkLightMode")
        ),
      },
      {
        path: "direction",
        label: "Direction",
        component: dynamic(async () => await import("./components/Direction")),
      },
      {
        path: "overall=theme-config",
        label: "Overall Theme Config",
        component: dynamic(
          async () => await import("./components/OverallThemeConfig")
        ),
      },
    ],
  },
  {
    groupName: "Deployment",
    nav: [
      {
        path: "build-production",
        label: "Build production",
        component: dynamic(
          async () => await import("./components/BuildProduction")
        ),
      },
    ],
  },
  {
    groupName: "Other",
    nav: [
      {
        path: "credit",
        label: "Sources & Credits",
        component: dynamic(async () => await import("./components/Credit")),
      },
    ],
  },
];

export default documentationRoutes;
