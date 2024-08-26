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

            {/* <NavigationMenuLink
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
            </NavigationMenuLink> */}
          </NavigationMenuItem>

          {/* toggle dark and light */}
          <NavigationMenuItem>
            <a
              href="https://github.com/OnShubham"
              target="_blank"
              aria-label="GitHub"
            >
              <svg
                height="34"
                width="34"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.86 8.15 6.84 9.47.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.61-3.37-1.35-3.37-1.35-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.54 1.03 1.54 1.03.89 1.52 2.32 1.08 2.89.83.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.73 1.02A9.53 9.53 0 0 1 12 7.5c.84.004 1.68.113 2.47.33 1.9-1.29 2.73-1.02 2.73-1.02.55 1.38.2 2.4.1 2.65.63.7 1.03 1.59 1.03 2.68 0 3.82-2.33 4.68-4.56 4.93.36.31.68.92.68 1.85 0 1.33-.01 2.41-.01 2.73 0 .27.18.58.68.49C21.14 20.15 24 16.41 24 12 24 6.48 19.52 2 12 2z"></path>
              </svg>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navigation;
