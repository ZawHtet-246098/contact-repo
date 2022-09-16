import { NavigationContainer } from "@react-navigation/native";
import { react, useContext } from "react";
import { GlobalContext } from "../context/Provider";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContainer = () => {
  const isLoggedIn = true;
  // const {
  //   authState: { isLoggedIn },
  // } = useContext(GlobalContext);

  // console.log("====================================");
  // console.log(isLoggedIn);
  // console.log("====================================");

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
