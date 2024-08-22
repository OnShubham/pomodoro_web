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

function Navigation() {
  return (
    <div className="flex items-center justify-center p-6">
      <NavigationMenu className="bg-neutral-800 shadow-md rounded-lg p-4">
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/pomodoro"
              className={navigationMenuTriggerStyle()}
            >
              Pomodoro
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/login"
              className={navigationMenuTriggerStyle()}
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/signup"
              className={navigationMenuTriggerStyle()}
            >
              Signup
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navigation;
