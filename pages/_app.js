import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({});
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  const [subTotal, setsubTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        savecart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear;
    }
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
    }
    setKey(Math.random);
  }, [router.query]);

  const savecart = (mycart) => {
    localStorage.setItem("cart", JSON.stringify(mycart));
    let subt = 0;
    let keys = Object.keys(mycart);
    for (let i = 0; i < keys.length; i++) {
      subt += mycart[keys[i]]["price"] * mycart[keys[i]]["qty"];
    }
    setsubTotal(subt);
  };

  const addtocart = (itemCode, qty, price, name, size, variant) => {
    let newcart = JSON.parse(JSON.stringify(cart));

    if (itemCode in cart) {
      newcart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newcart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setcart(newcart);
    savecart(newcart);
  };

  const removefromcart = (itemCode, qty, price, name, size, variant) => {
    let newcart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newcart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newcart[itemCode].qty <= 0) {
      delete newcart[itemCode];
    }
    setcart(newcart);
    savecart(newcart);
  };

  const clearcart = () => {
    setcart({});
    savecart({});
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/");
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    savecart({});
    let newcart = { itemCode: { qty: 1, price, name, size, variant } };
    setcart(newcart);
    savecart(newcart);
    router.push("/checkout");
  };

  return (
    <>
      {key && (
        <Navbar
          key={key}
          user={user}
          logout={logout}
          cart={cart}
          addtocart={addtocart}
          subTotal={subTotal}
          removefromcart={removefromcart}
          clearcart={clearcart}
        />
      )}
      <Component
        cart={cart}
        buyNow={buyNow}
        addtocart={addtocart}
        subTotal={subTotal}
        removefromcart={removefromcart}
        clearcart={clearcart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
