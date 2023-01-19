export const SideBarData = [
  {
    heading: "Admin",
    items: [
      { name: "Admin Users", route: "admin/admin_user" },
      { name: "Change Password", route: "admin/admin_change_password" },
      { name: "Settings", route: "admin/setting" },
      { name: "SMTP Settings", route: "admin/smtp_setting" },
      { name: "Mailchimp Settings", route: "admin/mailchimp_setting" },
      { name: "Sitemap Creation-New", route: "admin/sitemap_creation" },
      { name: "Order Settings", route: "admin/order_setting" },
    ],
  },
  {
    heading: "Subadmin",
    items: [
      { name: "Subadmin list", route: "subadmin/subadmin_list" },
      { name: "Add New Subadmin", route: "subadmin/add_new_subadmin" },
    ],
  },
  {
    heading: "User",
    items: [
      { name: "Dashboard", route: "user/dashboard" },
      { name: "User List", route: "user/user_list" },
    ],
  },
  {
    heading: "Manage App",
    items: [
      { name: "Bulk Notification", route: "manageapp/bulk_notification" },
      {
        name: "Promotional Notification",
        route: "manageapp/promotional_notification",
      },
    ],
  },
  {
    heading: "Category",
    items: [
      { name: "Category List", route: "category/category_list" },
      { name: "Banner List", route: "category/banner_list" },
    ],
  },
  {
    heading: "Filters",
    items: [
      { name: "Filter List", route: "filter/filter_list" },
      { name: "Add Filter", route: "filter/add_filter" },
    ],
  },
  {
    heading: "Product",
    items: [
      { name: "Selling Product List", route: "product/selling_product_list" },
      {
        name: "Caffilated Product List",
        route: "product/caffilated_product_list",
      },
      {
        name: "Product Components List",
        route: "product/product_component_list",
      },
      { name: "Customization Request", route: "product/customization_request" },
      { name: "Add New Product", route: "product/add_new_product" },
    ],
  },
  {
    heading: "Product Quantity",
    items: [
      {
        name: "Product Quantity Details",
        route: "product_quantity/product_quantity",
      },
      {
        name: "Product Thresold Quantity",
        route: "product_quantity/product_thresold",
      },
      {
        name: "Product Buffer Quantity",
        route: "product_quantity/product_buffer",
      },
      {
        name: "Out of stock Notification",
        route: "product_quantity/out_of_stock",
      },
      {
        name: "Product Out of Stock",
        route: "product_quantity/product_out_of_stock",
      },
    ],
  },
  {
    heading: "Orders",
    items: [
      { name: "Paid Payment", route: "orders/paid_payment" },
      { name: "Failed Payment", route: "orders/failed_payment" },
      { name: "Offline Orders", route: "orders/offline_orders" },
      { name: "Upfront Payment Links", route: "orders/upfront_payment_link" },
      { name: "Tenure Extension Link", route: "orders/tenure_extension_link" },
      {
        name: "Tenure Extension History",
        route: "orders/tenure_extension_history",
      },
      { name: "Defaluters List", route: "orders/defaluters_list" },
      {
        name: "Office Furniture Orders",
        route: "orders/office_furniture_order",
      },
      { name: "Bulk Orderss", route: "orders/bulk_order" },
      { name: "Recurring Payment", route: "orders/recurring_payment" },
      { name: "Customer Payment", route: "orders/customer_payment" },
      { name: "Payout", route: "orders/payout" },
      { name: "Orders E-mandate", route: "orders/orders_e-mandate" },
      { name: "Zoho Logs", route: "orders/zoho_logs" },
      { name: "Zoho Desk Logs", route: "orders/zoho_desk_logs" },
    ],
  },
  {
    heading: "Manage Documents",
    items: [
      { name: "Document" },
      { name: "Add Document" },
      { name: "Cibil Score Slots" },
      { name: "Add new Slot" },
      { name: "Show User Documnet" },
    ],
  },
  {
    heading: "Coins",
    items: [{ name: "Coin Details" }, { name: "Coin Transaction List" }],
  },
  {
    heading: "Color",
    items: [{ name: "Color List" }, { name: "Add Color" }],
  },
  {
    heading: "Offer",
    items: [{ name: "Offer Listing" }, { name: "Add Offer" }],
  },
  {
    heading: "Attribute",
    items: [{ name: "Attribute List" }, { name: "Add Attribute" }],
  },
  {
    heading: " Coupon Codes",
    items: [
      { name: "Coupon Code List" },
      { name: "Add Coupon Code" },
      { name: "Voucher Setting" },
      { name: "Referral Settings" },
      { name: "Referral Code List" },
      { name: "SI CC Discount Setting" },
    ],
  },
  {
    heading: "Price Range",
    items: [
      { name: "Price Range List", route: "admin/pricing/display_pricing" },
      { name: "Add Price Range", route: "admin/pricing/add_pricing" },
    ],
  },
  {
    heading: "Newsletter",
    items: [
      {
        name: "Subscription List",
        route: "admin/newsletter/display_subscribers_list",
      },
      { name: "Change Password" },
      {
        name: "Email Template List",
        route: "admin/newsletter/display_newsletter",
      },
      {
        name: "Add Email Template",
        route: "admin/newsletter/add_newsletter",
      },
      {
        name: "Order Status Notification",
        route: "admin/newsletter/order_status_notification",
      },
      { name: "Add Order Notification" },
      { name: "Service Notification" },
      { name: "Add Service Notification" },
    ],
  },
  {
    heading: "Location",
    items: [
      { name: "Location List" },
      { name: "Add Location" },
      { name: "Add State Tax" },
      { name: "City Warehouse Code" },
      { name: "City List" },
      { name: "Add City" },
    ],
  },
  {
    heading: "Pages",
    items: [
      { name: "List of pages", route: "admin/cms/display_cms" },
      { name: "Add Main Page", route: "admin/cms/add_cms_form" },
      { name: "Add Sub Page", route: "admin/cms/add_subpage_form" },
    ],
  },
  {
    heading: "Payment Gateway",
    items: [{ name: "Payment", route: "payment_gateway" }],
  },
  {
    heading: "Banner",
    items: [
      { name: "Banner Listing", route: "banner_listing" },
      { name: "Add Banner", route: "add_banner" },
    ],
  },
];
