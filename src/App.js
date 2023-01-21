import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import AdminUser from "./components/Admin/AdminUser";
import ChangePass from "./components/Admin/ChangePass";
import Settings from "./components/Admin/Settings";
import SMTP from "./components/Admin/SMTP";
import Mailchimp from "./components/Admin/Mailchimp";
import BannerListing from "./components/Banner/BannerListing/BannerListing";
import AddFilter from "./components/Filter/AddFilter";
import FilterList from "./components/Filter/FilterList";
import AddBanner from "./components/Banner/AddBanner/AddBanner";
import UpdateBanner from "./components/Banner/BannerListing/UpdateBanner";
import AddSubPage from "./components/Pages/AddSubPage";
import PagesListing from "./components/Pages/PagesListing";
import Payment from "./components/PaymentGateway/Payment";
import EditGateway from "./components/PaymentGateway/EditGateway";
import PriceRangeList from "./components/PriceRange/PriceRangeList";
import AddPriceRange from "./components/PriceRange/AddPriceRange";
import SiteMap from "./components/Admin/SiteMap";
import OrderSetting from "./components/Admin/OrderSetting";
import Selling_productList from "./components/Product/Selling_productList";
import Affliated_productList from "./components/Product/Affliated_productList";
import Add_offer from "./components/Offer/Add_offer";
import Offer_list from "./components/Offer/Offer_list";

import AddAttribute from "./components/Attribute/AddAttribute";
import Attribute_list from "./components/Attribute/Attribute_list";

import AddLocation from "./components/AddLocation/AddLocation";
import AddStateTax from "./components/AddLocation/AddStateTax";
import AddCity from "./components/AddLocation/AddCity";
import SubscriptionList from "./components/NewsLetter/SubscriptionList";
import Home from "./components/Dashboard/Home";
import EmailTemplateList from "./components/NewsLetter/EmailTemplateList";
import AddEmailTemplate from "./components/NewsLetter/AddEmailTemplate";
import OrderStatusNotification from "./components/NewsLetter/OrderStatusNotification";
import AddServiceRequest from "./components/NewsLetter/AddServiceRequest";
import AddOrderNotification from "./components/NewsLetter/AddOrderNotification";
import ServiceNotification from "./components/NewsLetter/ServiceNotification";
import SubAdminList from "./components/Subadmin/SubadminList";
import Prod_Quan from "./components/Product_Quantity/Prod_Quan";
import Prod_Buffer from "./components/Product_Quantity/Prod_Buffer";
import Prod_Thres from "./components/Product_Quantity/Prod_Thres";
import Out_Notification from "./components/Product_Quantity/Out_Notification";
import Out_Stock from "./components/Product_Quantity/Out_Stock";
import BulkNotification from "./components/ManageApp/BulkNotification";
import PromotionalNotification from "./components/ManageApp/PromotionalNotification";
import AddNewSubadmin from "./components/Subadmin/AddNewSubadmin";

// import AddNewUser from "./components/Admin/User/AddNewUser";

import Add_New_Color from "./components/Color/Add_New_Color";
import Color_list from "./components/Color/Color_list";
import Adddocument from "./components/ManageDocuments/Adddocument";
import Documents from "./components/ManageDocuments/Documents";
import NewSlot from "./components/ManageDocuments/NewSlot";
import Cibil_score from "./components/ManageDocuments/Cibil_score";
import UsersList from "./components/Users/UsersList";
import UserDashboard from "./components/Users/UserDashboard";
import BannerList from "./components/Category/BannerList";
import Prod_Components from "./components/Product/Product_Components";
import Customization_Request from "./components/Product/Customization_Request";
import Add_New_Product from "./components/Product/Add_New_Product";
// import AddNewUser from "./components/Mana";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Header />
      <Table /> */}
      {/* <AddLocation />
      <AddCity />
      <AddStateTax />
      <AddAttribute /> */}
      {/* <AddOffer /> */}
      <Routes>
        <Route path="/admin/admin" element={<Home />} />
        <Route path="/admin/admin/admin_user" element={<AdminUser />} />
        <Route
          path="/admin/admin/admin_change_password"
          element={<ChangePass />}
        />

        <Route path="/admin/admin/admin_user" element={<AdminUser />} />
        <Route
          path="/admin/admin/admin_change_password"
          element={<ChangePass />}
        />

        <Route path="/admin/admin/setting" element={<Settings />} />
        <Route path="/admin/admin/smtp_setting" element={<SMTP />} />
        <Route path="/admin/admin/mailchimp_setting" element={<Mailchimp />} />
        <Route path="/admin/admin/sitemap_creation" element={<SiteMap />} />
        <Route path="/admin/admin/order_setting" element={<OrderSetting />} />
        <Route
          path="/admin/subadmin/subadmin_list"
          element={<SubAdminList />}
        />
        <Route
          path="/admin/subadmin/add_new_subadmin"
          element={<AddNewSubadmin />}
        />
        <Route path="/admin/user/dashboard" element={<UserDashboard />} />
        <Route path="/admin/user/user_list" element={<UsersList />} />
        <Route
          path="/admin/manageapp/bulk_notification"
          element={<BulkNotification />}
        />
        <Route
          path="/admin/manageapp/promotional_notification"
          element={<PromotionalNotification />}
        />

        <Route path="/admin/category/category_list" />

        <Route path="/admin/category/banner_list" element={<BannerList />} />
        <Route path="/admin/filter/filter_list" element={<FilterList/>} />

        <Route path="/admin/filter/add_filter" element={<AddFilter />} />
        <Route
          path="/admin/product/selling_product_list"
          element={<Selling_productList />}
        />
        <Route
          path="/admin/product/affiliate_product_list"
          element={<Affliated_productList />}
        />
        <Route path="/admin/product/product_component_list" element={<Prod_Components/>} />
        <Route path="/admin/product/customization_request" element={<Customization_Request/>} />
        <Route path="/admin/product/add_new_product" element={<Add_New_Product/>} />
        <Route path="/admin/product_quantity/product_quantity" element={<Prod_Quan/>} />
        <Route path="/admin/product_quantity/product_thresold" element={<Prod_Thres />} />
        <Route path="/admin/product_quantity/product_buffer" element={<Prod_Buffer />} />
        <Route path="/admin/product_quantity/out_of_stock" element={<Out_Stock />} />
        <Route path="/admin/product_quantity/product_out_of_stock" element={<Out_Notification />} />
        <Route path="/admin/orders/paid_payment" />
        <Route path="/admin/orders/failed_payment" />
        <Route path="/admin/orders/offline_orders" />
        <Route path="/admin/orders/upfront_payment_link" />
        <Route path="/admin/orders/tenure_extension_link" />
        <Route path="/admin/orders/tenure_extension_history" />
        <Route path="/admin/orders/defaluters_list" />
        <Route path="/admin/orders/office_furniture_order" />
        <Route path="/admin/orders/bulk_order" />
        <Route path="/admin/orders/recurring_paymen" />
        <Route path="/admin/orders/customer_payment" />
        <Route path="/admin/orders/payou" />
        <Route path="/admin/orders/orders_e-mandate" />
        <Route path="/admin/orders/zoho_log" />
        <Route path="/admin/orders/zoho_desk_logs" />
        <Route
          path="/admin/attribute/add_attribute"
          element={<AddAttribute />}
        />
        <Route
          path="/admin/attribute/attribute_list"
          element={<Attribute_list />}
        />
        <Route path="/admin/color/add_new_color" element={<Add_New_Color />} />
        <Route path="/admin/color/color_list" element={<Color_list />} />
        <Route
          path="/admin/manage_documnets/add_document"
          element={<Adddocument />}
        />
        <Route
          path="/admin/manage_documnets/document"
          element={<Documents />}
        />
        <Route path="/admin/manage_documnets/NewSlot" element={<NewSlot />} />
        <Route
          path="/admin/manage_documnets/cibil_score"
          element={<Cibil_score />}
        />
        <Route path="/admin/manage_documnets/shou_user_document" />
        <Route path="/admin/offer/Add_offer" element={<Add_offer />} />
        <Route path="/admin/offer/Offer_list" element={<Offer_list />} />
        <Route
          path="/admin/location&tax/add_location"
          element={<AddLocation />}
        />
        <Route
          path="/admin/location&tax/add_state_tax"
          element={<AddStateTax />}
        />
        <Route path="/admin/location&tax/add_city" element={<AddCity />} />

        <Route
          path="/admin/newsletter/display_subscribers_list"
          element={<SubscriptionList />}
        />
        <Route
          path="/admin/newsletter/display_newsletter"
          element={<EmailTemplateList />}
        />
        <Route
          path="/admin/newsletter/add_newsletter"
          element={<AddEmailTemplate />}
        />
        <Route
          path="/admin/newsletter/order_status_notification"
          element={<OrderStatusNotification />}
        />
        <Route
          path="/admin/newsletter/add_new_order_notification"
          element={<AddOrderNotification />}
        />
        <Route
          path="/admin/newsletter/service_request_status_notification"
          element={<ServiceNotification />}
        />
        <Route
          path="/admin/newsletter/add_new_service_request_notification"
          element={<AddServiceRequest />}
        />
        <Route
          path="/admin/pricing/display_pricing"
          element={<PriceRangeList />}
        />
        <Route
          path="/admin/pricing/display_pricing/editViewPricing"
          element={<AddPriceRange isEditingPage={true} />}
        />
        <Route path="/admin/pricing/add_pricing" element={<AddPriceRange />} />
        <Route
          path="/admin/payment_gateway/edit_gateway"
          element={<EditGateway />}
        />
        <Route path="/admin/payment_gateway" element={<Payment />} />
        <Route
          path="/admin/banner_listing/edit_banner"
          element={<UpdateBanner />}
        />
        <Route path="/admin/banner_listing" element={<BannerListing />} />
        <Route path="/admin/add_banner" element={<AddBanner />} />
        <Route path="/admin/cms/add_subpage_form" element={<AddSubPage />} />
        <Route
          path="/admin/cms/add_cms_form"
          element={<AddSubPage isMainPage={true} />}
        />
        <Route path="/admin/cms/display_cms" element={<PagesListing />} />
      </Routes>
    </div>
  );
}

export default App;
