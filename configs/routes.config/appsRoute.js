import React from "react";
import { APP_PREFIX_PATH } from "constants/route.constant";
import { ADMIN, USER } from "constants/roles.constant";
import dynamic from "next/dynamic";
const appsRoute = [
  {
    key: "appsProject.dashboard",
    path: `${APP_PREFIX_PATH}/project/dashboard`,
    component: dynamic(() => import("components/Apps/project/ProjectDashboard")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsProject.projectList",
    path: `${APP_PREFIX_PATH}/project/project-list`,
    component: dynamic(() => import("components/Apps/project/ProjectList")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsProject.scrumBoard",
    path: `${APP_PREFIX_PATH}/project/scrum-board`,
    component: dynamic(() => import("components/Apps/project/ScrumBoard")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
    },
  },
  {
    key: "appsProject.issue",
    path: `${APP_PREFIX_PATH}/project/issue`,
    component: dynamic(() => import("components/Apps/project/Issue")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrm.dashboard",
    path: `${APP_PREFIX_PATH}/crm/dashboard`,
    component: dynamic(() => import("components/Apps/crm/CrmDashboard")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrm.calendar",
    path: `${APP_PREFIX_PATH}/crm/calendar`,
    component: dynamic(() => import("components/Apps/crm/Calendar")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrm.customers",
    path: `${APP_PREFIX_PATH}/crm/customers`,
    component: dynamic(() => import("components/Apps/crm/Customers")),
    authority: [ADMIN, USER],
    meta: {
      header: "Customers",
    },
  },
  {
    key: "appsCrm.customerDetails",
    path: `${APP_PREFIX_PATH}/crm/customer-details`,
    component: dynamic(() => import("components/Apps/crm/CustomerDetail")),
    authority: [ADMIN, USER],
    meta: {
      header: "Customer Details",
      headerContainer: true,
    },
  },
  {
    key: "appsCrm.mail",
    path: `${APP_PREFIX_PATH}/crm/mail`,
    component: dynamic(() => import("components/Apps/crm/Mail")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "appsCrm.mail",
    path: `${APP_PREFIX_PATH}/crm/mail/:category`,
    component: dynamic(() => import("components/Apps/crm/Mail")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
      footer: false,
    },
  },
  {
    key: "appsSales.dashboard",
    path: `${APP_PREFIX_PATH}/sales/dashboard`,
    component: dynamic(() => import("components/Apps/sales/SalesDashboard")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsSales.productList",
    path: `${APP_PREFIX_PATH}/sales/product-list`,
    component: dynamic(() => import("components/Apps/sales/ProductList")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsSales.productEdit",
    path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
    component: dynamic(() => import("components/Apps/sales/ProductEdit")),
    authority: [ADMIN, USER],
    meta: {
      header: "Edit Product",
    },
  },
  {
    key: "appsSales.productNew",
    path: `${APP_PREFIX_PATH}/sales/product-new`,
    component: dynamic(() => import("components/Apps/sales/ProductNew")),
    authority: [ADMIN, USER],
    meta: {
      header: "Add New Product",
    },
  },
  {
    key: "appsSales.orderList",
    path: `${APP_PREFIX_PATH}/sales/order-list`,
    component: dynamic(() => import("components/Apps/sales/OrderList")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsSales.orderDetails",
    path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
    component: dynamic(() => import("components/Apps/sales/OrderDetails")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrypto.dashboard",
    path: `${APP_PREFIX_PATH}/crypto/dashboard`,
    component: dynamic(() => import("components/Apps/crypto/CryptoDashboard")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsCrypto.portfolio",
    path: `${APP_PREFIX_PATH}/crypto/portfolio`,
    component: dynamic(() => import("components/Apps/crypto/Portfolio")),
    authority: [ADMIN, USER],
    meta: {
      header: "Portfolio",
    },
  },
  {
    key: "appsCrypto.market",
    path: `${APP_PREFIX_PATH}/crypto/market`,
    component: dynamic(() => import("components/Apps/crypto/Market")),
    authority: [ADMIN, USER],
    meta: {
      header: "Market",
    },
  },
  {
    key: "appsCrypto.wallets",
    path: `${APP_PREFIX_PATH}/crypto/wallets`,
    component: dynamic(() => import("components/Apps/crypto/Wallets")),
    authority: [ADMIN, USER],
    meta: {
      header: "Wallets",
    },
  },
  {
    key: "appsknowledgeBase.helpCenter",
    path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
    component: dynamic(() => import("components/Apps/knowledge-base/HelpCenter/index")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "gutterless",
    },
  },
  {
    key: "appsknowledgeBase.article",
    path: `${APP_PREFIX_PATH}/knowledge-base/article`,
    component: dynamic(() => import("components/Apps/knowledge-base/Article/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsknowledgeBase.manageArticles",
    path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
    component: dynamic(() => import("components/Apps/knowledge-base/ManageArticles/index")),
    authority: [ADMIN, USER],
    // meta: {
    //   header: "Manage Articles",
    //   extraHeader: dynamic(() =>
    //     import("components/Apps/knowledge-base/manage-articles")
    //   ),
    //   headerContainer: true,
    // },
  },
  {
    key: "appsknowledgeBase.editArticle",
    path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
    component: dynamic(() => import("components/Apps/knowledge-base/EditArticle/index")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsAccount.settings",
    path: `${APP_PREFIX_PATH}/account/settings/:tab`,
    component: dynamic(() => import("components/Apps/Accounts/Settings")),
    authority: [ADMIN, USER],
    meta: {
      header: "Settings",
      headerContainer: true,
    },
  },
  {
    key: "appsAccount.invoice",
    path: `${APP_PREFIX_PATH}/account/invoice/:id`,
    component: dynamic(() => import("components/Apps/Accounts/Invoice")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsAccount.activityLog",
    path: `${APP_PREFIX_PATH}/account/activity-log`,
    component: dynamic(() => import("components/Apps/Accounts/ActivityLog")),
    authority: [ADMIN, USER],
  },
  {
    key: "appsAccount.kycForm",
    path: `${APP_PREFIX_PATH}/account/kyc-form`,
    component: dynamic(() => import("components/Apps/Accounts/KycForm")),
    authority: [ADMIN, USER],
  },
];

export default appsRoute;
