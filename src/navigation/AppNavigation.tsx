import { useEffect } from "react";
import PublicNavigation from "./PublicNavigation";
import BootSplash from "react-native-bootsplash";

function AppNavigation() {
  useEffect(() => {
    // check auth here
    BootSplash.hide({ fade: true });
  }, []);

  return <PublicNavigation />;
}

export default AppNavigation;