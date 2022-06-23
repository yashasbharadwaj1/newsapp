import { View } from "react-native";
import General from "./screens/General";
import Home from "./screens/Home";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Business from "./screens/Business";
import Entertainment from "./screens/entertainment";
import Health from "./screens/Health";
import Science from "./screens/Science";
import Sports from "./screens/Sports";
import Technology from "./screens/Technology"



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="General News"
        component={General}
        options={{ drawerLabel: "General " }}
      />
      <Drawer.Screen
        name="Business News"
        component={Business}
        options={{ drawerLabel: "Business " }}
      />
      <Drawer.Screen
        name="Entertainment News"
        component={Entertainment}
        options={{ drawerLabel: "Entertainment " }}
      />
      <Drawer.Screen
        name="Health News"
        component={Health}
        options={{ drawerLabel: "Health " }}
      />
      <Drawer.Screen
        name="Science News"
        component={Science}
        options={{ drawerLabel: "Science " }}
      />
      <Drawer.Screen
        name="Sports News"
        component={Sports}
        options={{ drawerLabel: "Sports " }}
      />
      <Drawer.Screen
        name="Technology News"
        component={Technology}
        options={{ drawerLabel: "Technology " }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
