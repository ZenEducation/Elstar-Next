import { lazy } from "react";
import dynamic from "next/dynamic";
const utilsDocRoutes = [
  {
    groupName: "Hooks",
    nav: [
      {
        path: "use-auth",
        label: "useAuth",
        component: dynamic(async () => await import("./components/UseAuthDoc")),
      },
      {
        path: "use-authority",
        label: "useAuthority",
        component: dynamic(
          async () => await import("./components/UseAuthorityDoc")
        ),
      },
      {
        path: "use-dark-mode",
        label: "useDarkMode",
        component: dynamic(
          async () => await import("./components/UseDarkModeDoc")
        ),
      },
      {
        path: "use-direction",
        label: "useDirection",
        component: dynamic(
          async () => await import("./components/UseDirectionDoc")
        ),
      },
      {
        path: "use-locale",
        label: "useLocale",
        component: dynamic(
          async () => await import("./components/UseLocaleDoc")
        ),
      },
      {
        path: "use-menu-active",
        label: "useMenuActive",
        component: dynamic(
          async () => await import("./components/UseMenuActiveDoc")
        ),
      },
      {
        path: "use-query",
        label: "useQuery",
        component: dynamic(
          async () => await import("./components/UseQueryDoc")
        ),
      },
      {
        path: "use-responsive",
        label: "useResponsive",
        component: dynamic(
          async () => await import("./components/UseResponsiveDoc")
        ),
      },
      {
        path: "use-theme-class",
        label: "useThemeClass",
        component: dynamic(
          async () => await import("./components/UseThemeClassDoc")
        ),
      },
      {
        path: "use-time-out-message",
        label: "useTimeOutMessage",
        component: dynamic(
          async () => await import("./components/UseTimeOutMessageDoc")
        ),
      },
      {
        path: "use-tw-color-by-name",
        label: "useTwColorByName",
        component: dynamic(
          async () => await import("./components/UseTwColorByNameDoc")
        ),
      },
    ],
  },
  {
    groupName: "Functions",
    nav: [
      {
        path: "acronym",
        label: "acronym",
        component: dynamic(async () => await import("./components/AcronymDoc")),
      },
      {
        path: "deep-parse-json",
        label: "deepParseJson",
        component: dynamic(
          async () => await import("./components/DeepParseJsonDoc")
        ),
      },
      {
        path: "grow-shrink-color",
        label: "growShrinkColor",
        component: dynamic(
          async () => await import("./components/GrowShrinkColorDoc")
        ),
      },
      {
        path: "is-last-child",
        label: "isLastChild",
        component: dynamic(
          async () => await import("./components/IsLastChildDoc")
        ),
      },
      {
        path: "paginate",
        label: "paginate",
        component: dynamic(
          async () => await import("./components/PaginateDoc")
        ),
      },
      {
        path: "required-field-validation",
        label: "requiredFieldValidation",
        component: dynamic(
          async () => await import("./components/RequiredFieldValidationDoc")
        ),
      },
      {
        path: "shade-color",
        label: "shadeColor",
        component: dynamic(
          async () => await import("./components/ShadeColorDoc")
        ),
      },
      {
        path: "sort-by",
        label: "sortBy",
        component: dynamic(async () => await import("./components/SortByDoc")),
      },
      {
        path: "wild-card-search",
        label: "wildCardSearch",
        component: dynamic(
          async () => await import("./components/WildCardSearchDoc")
        ),
      },
    ],
  },
  {
    groupName: "HOC",
    nav: [
      {
        path: "with-header-item",
        label: "withHeaderItem",
        component: dynamic(
          async () => await import("./components/WithHeaderItemDoc")
        ),
      },
    ],
  },
];

export default utilsDocRoutes;
