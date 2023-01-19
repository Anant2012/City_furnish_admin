import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import Header from "./components/Dashboard/Header";
import Table from "./components/Dashboard/Table";
import AdminUser from "./components/Admin/AdminUser";
import ChangePass from "./components/Admin/ChangePass";
import Settings from "./components/Admin/Settings";
import SMTP from "./components/Admin/SMTP";
import Mailchimp from "./components/Admin/Mailchimp";
import BannerListing from "./components/Banner/BannerListing/BannerListing";
// import SubadminList from "./components/Admin/Subadmin/SubadminList";
import AddFilter from "./components/Filter/AddFilter/AddFilter";
import FilterList from "./components/Filter/FilterList/FilterList";
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
import SubscriptionList from "./components/NewsLetter/SubscriptionList";
import Home from "./components/Dashboard/Home";
import EmailTemplateList from "./components/NewsLetter/EmailTemplateList";
import AddEmailTemplate from "./components/NewsLetter/AddEmailTemplate";
// import AddNewUser from "./components/Admin/User/AddNewUser";

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <Header /> */}
      {/* <Table /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/admin_user" element={<AdminUser />} />
        <Route path="/admin/admin_change_password" element={<ChangePass />} />

        <Route path="/admin/admin_user" element={<AdminUser />} />
        <Route path="/admin/admin_change_password" element={<ChangePass />} />

        <Route path="/admin/setting" element={<Settings />} />
        <Route path="/admin/smtp_setting" element={<SMTP />} />
        <Route path="/admin/mailchimp_setting" element={<Mailchimp />} />
        <Route path="/admin/sitemap_creation" element={<SiteMap />} />
        <Route path="/admin/order_setting" element={<OrderSetting />} />
        <Route path="/subadmin/subadmin_list" />
        <Route path="/subadmin/add_new_subadmin" />
        <Route path="/user/dashboard" />
        <Route path="/user/user_list" />
        <Route path="/manageapp/bulk_notification" />
        <Route path="/manageapp/promotional_notification" />
        <Route path="/category/category_list" />
        <Route path="/category/banner_list" />
        <Route path="/filter/filter_list" element={<FilterList />} />
        <Route path="/filter/add_filter" element={<AddFilter />} />
        <Route path="/product/selling_product_list" />
        <Route path="/product/caffilated_product_list" />
        <Route path="/product/product_component_list" />
        <Route path="/product/customization_request" />
        <Route path="/product/add_new_product" />
        <Route path="/product_quantity/product_quantity" />
        <Route path="/product_quantity/product_thresold" />
        <Route path="/product_quantity/product_buffer" />
        <Route path="/product_quantity/out_of_stock" />
        <Route path="/product_quantity/product_out_of_stock" />
        <Route path="/orders/paid_payment" />
        <Route path="/orders/failed_payment" />
        <Route path="/orders/offline_orders" />
        <Route path="/orders/upfront_payment_link" />
        <Route path="/orders/tenure_extension_link" />
        <Route path="/orders/tenure_extension_history" />
        <Route path="/orders/defaluters_list" />
        <Route path="/orders/office_furniture_order" />
        <Route path="/orders/bulk_order" />
        <Route path="/orders/recurring_paymen" />
        <Route path="/orders/customer_payment" />
        <Route path="/orders/payou" />
        <Route path="/orders/orders_e-mandate" />
        <Route path="/orders/zoho_log" />
        <Route path="/orders/zoho_desk_logs" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
        <Route path="" />
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
          path="/admin/pricing/display_pricing"
          element={<PriceRangeList />}
        />
        <Route
          path="/admin/pricing/display_pricing/editViewPricing"
          element={<AddPriceRange isEditingPage={true} />}
        />
        <Route path="/admin/pricing/add_pricing" element={<AddPriceRange />} />
        <Route path="/payment_gateway/edit_gateway" element={<EditGateway />} />
        <Route path="/payment_gateway" element={<Payment />} />
        <Route path="/banner_listing/edit_banner" element={<UpdateBanner />} />
        <Route path="/banner_listing" element={<BannerListing />} />
        <Route path="/add_banner" element={<AddBanner />} />
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
