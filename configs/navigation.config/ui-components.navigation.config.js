import { UI_COMPONENTS_PREFIX_PATH } from "constants/route.constant";
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "constants/navigation.constant";
import { ADMIN, USER } from "constants/roles.constant";

const uiComponentNavigationConfig = [
  {
    key: "uiComponent",
    path: "",
    title: "Ui Component",
    translateKey: "nav.uiComponents",
    icon: "uiComponents",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    subMenu: [
      {
        key: "uiComponent.common",
        path: "",
        title: "Common",
        translateKey: "nav.uiComponentsCommon.common",
        icon: "common",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "uiComponent.common.button",
            path: `${UI_COMPONENTS_PREFIX_PATH}/common/button`,
            title: "Button",
            translateKey: "nav.uiComponentsCommon.button",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.common.grid",
            path: `${UI_COMPONENTS_PREFIX_PATH}/common/grid`,
            title: "Grid",
            translateKey: "nav.uiComponentsCommon.grid",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.common.typography",
            path: `${UI_COMPONENTS_PREFIX_PATH}/common/typography`,
            title: "Typography",
            translateKey: "nav.uiComponentsCommon.typography",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.common.icons",
            path: `${UI_COMPONENTS_PREFIX_PATH}/common/icons`,
            title: "Icons",
            translateKey: "nav.uiComponentsCommon.icons",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
      {
        key: "uiComponent.feedback",
        path: "",
        title: "Feedback",
        translateKey: "nav.uiComponentsFeeback.feedback",
        icon: "feedback",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "uiComponent.feedback.alert",
            path: `${UI_COMPONENTS_PREFIX_PATH}/feedback/alert`,
            title: "Alert",
            translateKey: "nav.uiComponentsFeeback.alert",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.feedback.dialog",
            path: `${UI_COMPONENTS_PREFIX_PATH}/feedback/dialog`,
            title: "Dialog",
            translateKey: "nav.uiComponentsFeeback.dialog",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.feedback.drawer",
            path: `${UI_COMPONENTS_PREFIX_PATH}/feedback/drawer`,
            title: "Drawer",
            translateKey: "nav.uiComponentsFeeback.drawer",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.feedback.progress",
            path: `${UI_COMPONENTS_PREFIX_PATH}/feedback/progress`,
            title: "Progress",
            translateKey: "nav.uiComponentsFeeback.progress",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.feedback.skeleton",
            path: `${UI_COMPONENTS_PREFIX_PATH}/feedback/skeleton`,
            title: "Skeleton",
            translateKey: "nav.uiComponentsFeeback.skeleton",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.feedback.spinner",
            path: `${UI_COMPONENTS_PREFIX_PATH}/feedback/spinner`,
            title: "Spinner",
            translateKey: "nav.uiComponentsFeeback.spinner",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.feedback.toast",
            path: `${UI_COMPONENTS_PREFIX_PATH}/feedback/toast`,
            title: "Toast",
            translateKey: "nav.uiComponentsFeeback.toast",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
      {
        key: "uiComponent.dataDisplay",
        path: "",
        title: "Data Display",
        translateKey: "nav.uiComponentsDataDisplay.dataDisplay",
        icon: "dataDisplay",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "uiComponent.dataDisplay.avatar",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/avatar`,
            title: "Avatar",
            translateKey: "nav.uiComponentsDataDisplay.avatar",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.dataDisplay.badge",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/badge`,
            title: "Badge",
            translateKey: "nav.uiComponentsDataDisplay.badge",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.dataDisplay.calendar",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/calendar`,
            title: "Calendar",
            translateKey: "nav.uiComponentsDataDisplay.calendar",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.dataDisplay.cards",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/cards`,
            title: "Cards",
            translateKey: "nav.uiComponentsDataDisplay.cards",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.dataDisplay.table",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/table`,
            title: "Table",
            translateKey: "nav.uiComponentsDataDisplay.table",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.dataDisplay.tag",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/tag`,
            title: "Tag",
            translateKey: "nav.uiComponentsDataDisplay.tag",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.dataDisplay.timeline",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/timeline`,
            title: "Timeline",
            translateKey: "nav.uiComponentsDataDisplay.timeline",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.dataDisplay.tooltip",
            path: `${UI_COMPONENTS_PREFIX_PATH}/data-display/tooltip`,
            title: "Tooltip",
            translateKey: "nav.uiComponentsDataDisplay.tooltip",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
      {
        key: "uiComponent.forms",
        path: "",
        title: "Forms",
        translateKey: "nav.uiComponentsForms.forms",
        icon: "forms",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "uiComponent.forms.checkbox",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/checkbox`,
            title: "Checkbox",
            translateKey: "nav.uiComponentsForms.checkbox",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.datePicker",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/date-picker`,
            title: "Date picker",
            translateKey: "nav.uiComponentsForms.datePicker",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.formControl",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/form-control`,
            title: "Form control",
            translateKey: "nav.uiComponentsForms.formControl",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.input",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/input`,
            title: "Input",
            translateKey: "nav.uiComponentsForms.input",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.inputGroup",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/input-group`,
            title: "Input Group",
            translateKey: "nav.uiComponentsForms.inputGroup",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.radio",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/radio`,
            title: "Radio",
            translateKey: "nav.uiComponentsForms.radio",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.segment",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/segment`,
            title: "Segment",
            translateKey: "nav.uiComponentsForms.segment",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.select",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/select`,
            title: "Select",
            translateKey: "nav.uiComponentsForms.select",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.switcher",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/switcher`,
            title: "Switcher",
            translateKey: "nav.uiComponentsForms.switcher",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.timeInput",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/time-input`,
            title: "Time Input",
            translateKey: "nav.uiComponentsForms.timeInput",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.forms.upload",
            path: `${UI_COMPONENTS_PREFIX_PATH}/forms/upload`,
            title: "Upload",
            translateKey: "nav.uiComponentsForms.upload",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
      {
        key: "uiComponent.navigation",
        path: "",
        title: "Navigation",
        translateKey: "nav.uiComponentsNavigation.navigation",
        icon: "navigation",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "uiComponent.navigation.dropdown",
            path: `${UI_COMPONENTS_PREFIX_PATH}/navigation/dropdown`,
            title: "Dropdown",
            translateKey: "nav.uiComponentsNavigation.dropdown",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.navigation.menu",
            path: `${UI_COMPONENTS_PREFIX_PATH}/navigation/menu`,
            title: "Menu",
            translateKey: "nav.uiComponentsNavigation.menu",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.navigation.pagination",
            path: `${UI_COMPONENTS_PREFIX_PATH}/navigation/pagination`,
            title: "Pagination",
            translateKey: "nav.uiComponentsNavigation.pagination",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.navigation.steps",
            path: `${UI_COMPONENTS_PREFIX_PATH}/navigation/steps`,
            title: "Steps",
            translateKey: "nav.uiComponentsNavigation.steps",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.navigation.tabs",
            path: `${UI_COMPONENTS_PREFIX_PATH}/navigation/tabs`,
            title: "Tabs",
            translateKey: "nav.uiComponentsNavigation.tabs",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
      {
        key: "uiComponent.graph",
        path: "",
        title: "Graph",
        translateKey: "nav.uiComponentsGraph.graph",
        icon: "graph",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
          {
            key: "uiComponent.graph.charts",
            path: `${UI_COMPONENTS_PREFIX_PATH}/graph/charts`,
            title: "Charts",
            translateKey: "nav.uiComponentsGraph.charts",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
          {
            key: "uiComponent.graph.maps",
            path: `${UI_COMPONENTS_PREFIX_PATH}/graph/maps`,
            title: "Maps",
            translateKey: "nav.uiComponentsGraph.maps",
            icon: "",
            type: NAV_ITEM_TYPE_ITEM,
            authority: [ADMIN, USER],
            subMenu: [],
          },
        ],
      },
    ],
  },
];

export default uiComponentNavigationConfig;
