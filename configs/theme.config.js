import { THEME_ENUM } from "constants/theme.constant";

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */

// export const themeConfig = {
//     themeColor: 'indigo',
//     direction: THEME_ENUM.DIR_LTR,
//     mode: THEME_ENUM.MODE_LIGHT,
//     primaryColorLevel: 600,
//     cardBordered: true,
//     panelExpand: false,
//     controlSize: 'md',
//     navMode: THEME_ENUM.NAV_MODE_LIGHT,
//     layout: {
//         type: THEME_ENUM.LAYOUT_TYPE_MODERN,
//         sideNavCollapse: false,
//     },
// }

// export const themeConfig = {
//   themeColor: "indigo",
//   direction: "ltr",
//   mode: "dark",
//   primaryColorLevel: 600,
//   cardBordered: true,
//   panelExpand: false,
//   controlSize: "md",
//   navMode: "transparent",
//   layout: {
//     type: "modern",
//     sideNavCollapse: false,
//   },
// };

export const themeConfig = {
  themeColor: "indigo",
  direction: "ltr",
  mode: "dark",
  primaryColorLevel: 600,
  cardBordered: false,
  panelExpand: false,
  controlSize: "md",
  navMode: "dark",
  layout: {
    type: "decked",
    sideNavCollapse: false,
  },
};
