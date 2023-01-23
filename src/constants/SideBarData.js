export const SideBarData = [
  {
    heading: "Admin",
    items: [
      { name: "Admin Users", route: "admin/admin/admin_user" },
      { name: "Change Password", route: "admin/admin/admin_change_password" },
      { name: "Settings", route: "admin/admin/setting" },
      { name: "SMTP Settings", route: "admin/admin/smtp_setting" },
      { name: "Mailchimp Settings", route: "admin/admin/mailchimp_setting" },
      { name: "Sitemap Creation-New", route: "admin/admin/sitemap_creation" },
      { name: "Order Settings", route: "admin/admin/order_setting" },
    ],
  },
  {
    heading: "Subadmin",
    items: [
      { name: "Subadmin list", route: "admin/subadmin/subadmin_list" },
      { name: "Add New Subadmin", route: "admin/subadmin/add_new_subadmin" },
    ],
  },
  {
    heading: "User",
    items: [
      { name: "Dashboard", route: "admin/user/dashboard" },
      { name: "User List", route: "admin/user/user_list" },
    ],
  },
  {
    heading: "Manage App",
    items: [
      { name: "Bulk Notification", route: "admin/manageapp/bulk_notification" },
      {
        name: "Promotional Notification",
        route: "admin/manageapp/promotional_notification",
      },
    ],
  },
  {
    heading: "Category",
    items: [
      { name: "Category List", route: "admin/category/category_list" },
      { name: "Banner List", route: "admin/category/banner_list" },
    ],
  },
  {
    heading: "Filters",
    items: [
      { name: "Filter List", route: "admin/filter/filter_list" },
      { name: "Add Filter", route: "admin/filter/add_filter" },
    ],
  },
  {
    heading: "Product",
    items: [
      {
        name: "Selling Product List",
        route: "admin/product/selling_product_list",
      },
      {
        name: "Affiliate Product List",
        route: "admin/product/affiliate_product_list",
      },
      {
        name: "Product Components List",
        route: "admin/product/product_component_list",
      },
      {
        name: "Customization Request",
        route: "admin/product/customization_request",
      },
      { name: "Add New Product", route: "admin/product/add_new_product" },
    ],
  },
  {
    heading: "Product Quantity",
    items: [
      {
        name: "Product Quantity Details",
        route: "admin/product_quantity/product_quantity",
      },
      {
        name: "Product Thresold Quantity",
        route: "admin/product_quantity/product_thresold",
      },
      {
        name: "Product Buffer Quantity",
        route: "admin/product_quantity/product_buffer",
      },
      {
        name: "Out of stock Notification",
        route: "admin/product_quantity/out_of_stock",
      },
      {
        name: "Product Out of Stock",
        route: "admin/product_quantity/product_out_of_stock",
      },
    ],
  },
  {
    heading: "Orders",
    items: [
      { name: "Paid Payment", route: "admin/orders/paid_payment" },
      { name: "Failed Payment", route: "admin/orders/failed_payment" },
      { name: "Offline Orders", route: "admin/orders/offline_orders" },
      {
        name: "Upfront Payment Links",
        route: "admin/orders/upfront_payment_link",
      },
      {
        name: "Tenure Extension Link",
        route: "admin/orders/tenure_extension_link",
      },
      {
        name: "Tenure Extension History",
        route: "admin/orders/tenure_extension_history",
      },
      { name: "Defaluters List", route: "admin/orders/defaluters_list" },
      {
        name: "Office Furniture Orders",
        route: "admin/orders/office_furniture_order",
      },
      { name: "Bulk Orderss", route: "admin/orders/bulk_order" },
      { name: "Recurring Payment", route: "admin/orders/recurring_payment" },
      { name: "Customer Payment", route: "admin/orders/customer_payment" },
      { name: "Payout", route: "admin/orders/payout" },
      { name: "Orders E-mandate", route: "admin/orders/orders_e-mandate" },
      { name: "Zoho Logs", route: "admin/orders/zoho_logs" },
      { name: "Zoho Desk Logs", route: "admin/orders/zoho_desk_logs" },
    ],
  },
  {
    heading: "Manage Documents",
    items: [
      { name: "Document", route: "admin/manage_documnets/document" },
      { name: "Add Document", route: "admin/manage_documnets/add_document" },
      {
        name: "Cibil Score Slots",
        route: "admin/manage_documnets/cibil_score",
      },
      { name: "Add new Slot", route: "admin/manage_documnets/NewSlot" },
      {
        name: "Show User Documnet",
        route: "admin/manage_documnets/shou_user_document",
      },
    ],
  },
  {
    heading: "Coins",
    items: [{ name: "Coin Details" , route:"admin/coins/coin_details"}, { name: "Coin Transaction List", route:"admin/coins/coin_list" }],
  },
  {
    heading: "Color",
    items: [
      { name: "Color List", route: "admin/color/color_list" },
      { name: "Add Color", route: "admin/color/add_new_color" },
    ],
  },
  {
    heading: "Offer",

    items: [
      { name: "Offer Listing", route: "admin/offer/Offer_list" },
      { name: "Add Offer", route: "admin/offer/Add_offer" },
    ],
  },
  {
    heading: "Attribute",
    items: [
      { name: "Attribute List", route: "admin/attribute/attribute_list" },
      { name: "Add Attribute", route: "admin/attribute/add_attribute" },
    ],
  },
  {
    heading: " Coupon Codes",
    items: [
      {
        name: "Coupon Code List",
        route: "/admin/couponcards/display_couponcards",
      },
      {
        name: "Add Coupon Code",
        route: "/admin/couponcards/add_couponcard_form",
      },
      {
        name: "Voucher Setting",
        route: "/admin/couponcards/edit_voucher_form",
      },
      {
        name: "Referral Settings",
        route: "/admin/couponcards/edit_referral_setting",
      },
      {
        name: "Referral Code List",
        route: "/admin/couponcards/show_referral_code",
      },
      {
        name: "SI CC Discount Setting",
        route: "/admin/couponcards/edit_si_discount_setting",
      },
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
      // { name: "Change Password" },
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
      {
        name: "Add Order Notification",
        route: "/admin/newsletter/add_new_order_notification",
      },
      {
        name: "Service Notification",
        route: "/admin/newsletter/service_request_status_notification",
      },
      {
        name: "Add Service Notification",
        route: "/admin/newsletter/add_new_service_request_notification",
      },
    ],
  },
  {
    heading: "Location",
    items: [
      { name: "Add Location", route: "admin/location&tax/add_location" },
      { name: "Add State Tax", route: "admin/location&tax/add_state_tax" },
      { name: "City Warehouse Code", route: "admin/location&tax/" },
      { name: "City List", route: "admin/location&tax/" },
      { name: "Add City", route: "admin/location&tax/add_city" },
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
    items: [{ name: "Payment", route: "admin/payment_gateway" }],
  },
  {
    heading: "Banner",
    items: [
      { name: "Banner Listing", route: "admin/banner_listing" },
      { name: "Add Banner", route: "admin/add_banner" },
    ],
  },
];
