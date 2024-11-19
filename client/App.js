// App.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home/Home";
import ListElectronicsProduct from "./components/ListElectronicsProduct/ListElectronicsProduct";
import ListFreshFruitsProduct from "./components/ListFreshFruitsProduct/ListFreshFruitsProduct";
import ProductDetails1 from "./components/ProductDetails1/ProductDetails1";
import ProductDetails2 from "./components/ProductDetails2/ProductDetails";
import Cart from "./components/Cart/Cart";
import PaymentMethod from "./components/PaymentMethod/Payment";
import PaymentSuccess from "./components/PaymentSuccess/PaymentSuccess";
import Feedback from "./components/Feedback/ProductFeedbackContainner";
import Filters from './components/Filters/Filter';
import Welcome from './components/Auth/Welcome';
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from './components/Auth/SignUp/SignUp';
import ForgotPassword from "./components/Auth/ForgetPassword/ForgotPassword";
import { getUniqueItemCount } from './services/cartService'; // Modified to count unique items
import Voucher from "./components/Voucher/Voucher";
import Wishlist from "./components/WishList/WishList";
import Profile from "./components/Profile/Profile";
import Orders from "./components/Orders/Orders";

const Stack = createNativeStackNavigator();

const UserContext = createContext();
const CartContext = createContext();

export const useUser = () => useContext(UserContext);
export const useCart = () => useContext(CartContext);

export default function App() {
  const [user, setUser] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const fetchUniqueItemCount = async () => {
      if (user) {
        const count = await getUniqueItemCount(user.userId); // Counts unique items only
        setCartItemCount(count);
      }
    };
    fetchUniqueItemCount();
  }, [user]);

  const incrementCartCount = () => setCartItemCount((prevCount) => prevCount + 1);
  const resetCartCount = async () => {
    if (user) {
      const count = await getUniqueItemCount(user.userId);
      setCartItemCount(count);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cartItemCount, incrementCartCount, resetCartCount }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ListElectronicsProduct" component={ListElectronicsProduct} />
            <Stack.Screen name="ListFreshFruitsProduct" component={ListFreshFruitsProduct} />
            <Stack.Screen name="WishList" component={Wishlist} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="Filters" component={Filters} />
            <Stack.Screen name="ProductDetails1" component={ProductDetails1} />
            <Stack.Screen name="ProductDetails2" component={ProductDetails2} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Voucher" component={Voucher} />
            <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
            <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
            <Stack.Screen name="Feedback" component={Feedback} />
          </Stack.Navigator>
        </NavigationContainer>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}  
