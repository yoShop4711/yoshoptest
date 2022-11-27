import Header from "./components/header/Header"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Forgot from "./components/auth/Forgot"
import Products from "./components/products/Products"
import Reset from "./components/auth/Reset"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import User from "./components/admin/User"
import ShowUsers from "./components/admin/ShowUsers"
import ShowSellers from "./components/admin/ShowSellers"
import DeleteUser from "./components/admin/DeleteUser"
import FilterUsers from "./components/admin/FilterUsers"
import UserStatus from "./components/admin/UserStatus"
import CreateProduct from "./components/seller/CreateProduct"
import CreateCategory from "./components/admin/CreateCategory"
import DetailProduct from "./components/products/DetailProduct"
import SellerProducts from "./components/seller/SellerProducts"
import EditProduct from "./components/seller/EditProduct"
import DeleteProduct from "./components/seller/DeleteProduct"
import Cart from "./components/buy/Cart"
import Orders from "./components/admin/Orders"
import Delivered from "./components/admin/Delivered"
import Cancelled from "./components/admin/Cancelled"
import Processing from "./components/admin/Processing"
import NotProcessed from "./components/admin/NotProcessed"
import MyOrders from "./components/admin/MyOrders"
import BuyerOrders from "./components/buyer/BuyerOrders"
import AllMyOrders from "./components/buyer/AllMyOrders"
import NotProcessedOrders from "./components/buyer/NotProcessedOrders"
import ProcessingOrders from "./components/buyer/ProcessingOrders"
import DeliveredOrders from "./components/buyer/DeliveredOrders"
import CancelledOrders from "./components/buyer/CancelledOrders"
import CancelCarts from "./components/buyer/CancelCarts"
import CanncelNotProcessedOrders from "./components/buyer/CancelNotProcessedOrders"
import ChangeOrderStatus from "./components/buyer/ChangeOrderStatus"
import CreateWishlist from "./components/buyer/CreateWishlist"
import MyWishlists from "./components/buyer/MyWishlists"
import AllWishlists from "./components/admin/AllWishlists"
import UpdateWishlists from "./components/buyer/UpdateWishlists"
import DeleteWishlists from "./components/buyer/DeleteWishlists"
import CustomersOrders from "./components/seller/CustomersOrders"
import BuyerProfile from "./components/seller/BuyerProfile"
import MessageBuyer from "./components/seller/MessageBuyer"


function App() {
          

  return(
    
    
  
    <Router>
    <div className='container'>
  <Header />
  <Routes>

<Route path="/" element={ <Products /> } />

    <Route path="/login" element={<Login />
} />
  
  <Route path="/register" element={<Register />} />
  
  <Route path="/forgot" element={<Forgot />} />
  
  <Route path="/reset" element={<Reset />
} />

<Route path="/user/:id" element={<User />} />
<Route path="/show_users" element={<ShowUsers />} />
<Route path="/show_sellers" element={<ShowSellers />} />
<Route path="/delete_user/:id" element={<DeleteUser />} />
<Route path="/user_status/:id" element={<UserStatus />} />
<Route path="/filter_users" element={<FilterUsers />} />
<Route path="/create_product" element={< CreateProduct />} />
<Route path="/create_category" element={ < CreateCategory /> } />
<Route path="/detail/:id" element={ < DetailProduct /> } />
<Route path="/my_products" element={ <SellerProducts /> } />
<Route path="/edit_product/:id" element={<EditProduct />} />
<Route path="/delete_product/:id" element={<DeleteProduct />}  />
<Route path="/cart" element={<Cart />} />
<Route path="/orders" element={<Orders/>} />
<Route path="/delivered" element={<Delivered />} />
<Route path="/cancelled" element={<Cancelled />} />
<Route path="/processing" element={<Processing />} />
<Route path="/not_processed" element={<NotProcessed />} />
<Route path="/all_orders" element={<MyOrders />} />
<Route path="/buyer_orders" element={<BuyerOrders />} />
<Route path="/show_all_my_orders" element={<AllMyOrders />}  />
<Route path="/show_not_processed_carts" element={<NotProcessedOrders />} />
<Route path="/show_my_processing_carts" element={<ProcessingOrders />} />
<Route path="/show_my_delivered_carts" element={<DeliveredOrders />} />
<Route path="/show_my_cancelled_carts" element={<CancelledOrders />} />
<Route path="/cancel_carts" element={<CancelCarts />} />
<Route path="/cancel_not_processed_carts" element={<CanncelNotProcessedOrders />} />
<Route path="/change_order_status/:id" element={<ChangeOrderStatus />} />
<Route path="/create_wishlist"  element={<CreateWishlist />} />
<Route path="/my_wishlist" element={<MyWishlists />} />
<Route path="/customer_wishlists" element={<AllWishlists />} />
<Route path="/update_wishlist/:id" element={<UpdateWishlists />} />
<Route path="/delete_wishlist/:id" element={<DeleteWishlists />} />
<Route path="/customer_orders" element={<CustomersOrders />} />
<Route path="/buyer_profile/:id" element={<BuyerProfile />}  />
<Route path="/message_buyer/:id" element={<MessageBuyer />} />

  
  </Routes>
  
  </div>
  
  </Router>

  )
}

export default App