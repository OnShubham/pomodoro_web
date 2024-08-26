import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import DarkMode from "../button/dark";

import icon from "../../assets/icon.png";

function Navigation() {
  return (
    <div className="flex items-center justify-center p-6">
      <NavigationMenu className="bg-background  p-4">
        <NavigationMenuList className="flex space-x-2 sm:space-x-64">
          {/* icon */}
          <NavigationMenuItem>
            <img src={icon} className="max-w-16" alt="Logo" />
          </NavigationMenuItem>

          {/* item */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/pomodoro"
              className={navigationMenuTriggerStyle()}
            >
              Pomodoro
            </NavigationMenuLink>

            <NavigationMenuLink
              href="/login"
              className={navigationMenuTriggerStyle()}
            >
              Login
            </NavigationMenuLink>

            <NavigationMenuLink
              href="/signup"
              className={navigationMenuTriggerStyle()}
            >
              Signup
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* toggle dark and light */}
          <NavigationMenuItem></NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navigation;
