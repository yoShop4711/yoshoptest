import { useContext, useState } from "react";
import axios from "axios";
import Menu from "./menu.svg";
import Close from "./close.svg";
import Cart from "./cart.svg";
import "./header.css";
import { Link } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import { itemTotal } from "../../api/CartApi";


function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userApi.isLogged;
  const [isSeller] = state.userApi.isSeller;
  const [owner] = state.userApi.owner;
  const [isAdmin] = state.userApi.isAdmin;
  const [isBuyer] = state.userApi.isBuyer;


  const tok = state.token[0];

  const [menu, setMenu] = useState(false);

  

  const logoutUser = async () => {
    await axios.get("/auth/logout", {
      headers: {
        Authorization: `Bearer ${tok}`,
      },
    });

    localStorage.removeItem("firstLogin");
    localStorage.removeItem("cart")

    window.location.href = "/";
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </li>
      </>
    );
  };

  const sellerRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/my_products">My Products</Link>
        </li>
        <li>
          <Link to="/customer_orders">Orders</Link>
        </li>
      </>
    );
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/show_users">Show Users</Link>
        </li>
        <li>
          <Link to="/show_sellers">Show Sellers</Link>
        </li>
        <li>
          <Link to="/filter_users">Filter Users</Link>
        </li>
        <li>
          <Link to="/create_category">Create Category</Link>
        </li>
        <li>
          <Link to="/orders">Orders Cats</Link>
        </li>
        <li>
          <Link to="/customer_wishlists">wishlists</Link>
        </li>
      </>
    );
  };

  const buyerRouter = () => {
    return (
      <>
        <li>
          <Link to="/buyer_orders">my orders</Link>
        </li>
        <li>
          <Link to="/create_wishlist">create wishlist</Link>

        </li>
        <li>
          <Link to="/my_wishlist">my wishlist</Link>
        </li>
      
      </>
    );
  };

  const figureOut = () => {
    if (isSeller) {
      return sellerRouter();
    } else if (isAdmin) {
      return adminRouter();
    } else if (isBuyer) {
      return buyerRouter();
    }
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="menu" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">{figureOut() ? owner : "yoShop"}</Link>
        </h1>
      </div>

      <ul style={styleMenu}>
        <li>
          {" "}
          <Link to="/">{figureOut() ? "Products" : "Shop"}</Link>{" "}
        </li>
        {figureOut()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            {" "}
            <Link to="/login">Login ✥ Register </Link>{" "}
          </li>
        )}
        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="close" width="30" className="menu" />
        </li>
      </ul>

      <div className="cart-icon">
        <span>{itemTotal()}</span>
        <Link  to="/cart">
          {" "}
          <img src={Cart} alt="cart" width="30" />{" "}
        </Link>
        ...Cart{" "}
      </div>
    </header>
  );
}

export default Header;
