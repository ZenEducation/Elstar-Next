import { lazy } from "react";
import dynamic from "next/dynamic";
const documentationRoutes = [
  {
    groupName: "Components",
    nav: [
      {
        path: "action-link",
        label: "ActionLink",
        component: dynamic(
          async () => await import("./components/ActionLinkDoc")
        ),
      },
      {
        path: "adaptable-card",
        label: "AdaptableCard",
        component: dynamic(
          async () => await import("./components/AdaptableCardDoc")
        ),
      },
      {
        path: "affix",
        label: "Affix",
        component: dynamic(async () => await import("./components/AffixDoc")),
      },
      {
        path: "authority-check",
        label: "AuthorityCheck",
        component: dynamic(
          async () => await import("./components/AuthorityCheckDoc")
        ),
      },
      {
        path: "calendar-view",
        label: "CalendarView",
        component: dynamic(
          async () => await import("./components/CalendarViewDoc")
        ),
      },
      {
        path: "chart",
        label: "Chart",
        component: dynamic(async () => await import("./components/ChartDoc")),
      },
      {
        path: "confirm-dialog",
        label: "ConfirmDialog",
        component: dynamic(
          async () => await import("./components/ConfirmDialogDoc")
        ),
      },
      {
        path: "container",
        label: "Container",
        component: dynamic(
          async () => await import("./components/ContainerDoc")
        ),
      },
      {
        path: "data-table",
        label: "DataTable",
        component: dynamic(
          async () => await import("./components/DataTableDoc")
        ),
      },
      {
        path: "double-sided-image",
        label: "DoubleSidedImage",
        component: dynamic(
          async () => await import("./components/DoubleSidedImageDoc")
        ),
      },
      {
        path: "ellipsis-button",
        label: "EllipsisButton",
        component: dynamic(
          async () => await import("./components/EllipsisButtonDoc")
        ),
      },
      {
        path: "form-numeric-input",
        label: "FormNumericIput",
        component: dynamic(
          async () => await import("./components/FormNumericInputDoc")
        ),
      },
      {
        path: "grow-shrink-tag",
        label: "GrowShrinkTag",
        component: dynamic(
          async () => await import("./components/GrowShrinkTagDoc")
        ),
      },
      {
        path: "icon-text",
        label: "IconText",
        component: dynamic(
          async () => await import("./components/IconTextDoc")
        ),
      },
      {
        path: "loading",
        label: "Loading",
        component: dynamic(async () => await import("./components/LoadingDoc")),
      },
      {
        path: "media-skeleton",
        label: "MediaSkeleton",
        component: dynamic(
          async () => await import("./components/MediaSkeletonDoc")
        ),
      },
      {
        path: "nav-toggle",
        label: "NavToggle",
        component: dynamic(
          async () => await import("./components/NavToggleDoc")
        ),
      },
      {
        path: "password-input",
        label: "PasswordInput",
        component: dynamic(
          async () => await import("./components/PasswordInputDoc")
        ),
      },
      {
        path: "region-map",
        label: "RegionMap",
        component: dynamic(
          async () => await import("./components/RegionMapDoc")
        ),
      },
      {
        path: "rich-text-editor",
        label: "RichTextEditor",
        component: dynamic(
          async () => await import("./components/RichTextEditorDoc")
        ),
      },
      {
        path: "segment-item-option",
        label: "SegmentItemOption",
        component: dynamic(
          async () => await import("./components/SegmentItemOptionDoc")
        ),
      },
      {
        path: "sticky-footer",
        label: "StickyFooter",
        component: dynamic(
          async () => await import("./components/StickyFooterDoc")
        ),
      },
      {
        path: "svg-icon",
        label: "SvgIcon",
        component: dynamic(async () => await import("./components/SvgIconDoc")),
      },
      {
        path: "syntax-highlighter",
        label: "SyntaxHighlighter",
        component: dynamic(
          async () => await import("./components/SyntaxHighlighterDoc")
        ),
      },
      {
        path: "table-row-skeleton",
        label: "TableRowSkeleton",
        component: dynamic(
          async () => await import("./components/TableRowSkeletonDoc")
        ),
      },
      {
        path: "text-block-skeleton",
        label: "TextBlockSkeletonDoc",
        component: dynamic(
          async () => await import("./components/TextBlockSkeletonDoc")
        ),
      },
      {
        path: "text-ellipsis",
        label: "TextEllipsisDoc",
        component: dynamic(
          async () => await import("./components/TextEllipsisDoc")
        ),
      },
      {
        path: "users-avatar-group",
        label: "UsersAvatarGroupDoc",
        component: dynamic(
          async () => await import("./components/UsersAvatarGroupDoc")
        ),
      },
    ],
  },
];

export default documentationRoutes;
