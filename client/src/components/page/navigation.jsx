import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import DarkMode from "../button/dark";

function Navigation() {
  return (
    <div className="flex items-center justify-center p-6">
      <NavigationMenu className="bg-neutral-900 shadow-md rounded-lg p-4">
        <NavigationMenuList className="flex space-x-6">
          {/* icon */}
          <NavigationMenuItem></NavigationMenuItem>

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
