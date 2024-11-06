import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom"; 

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { OrbitingCirclesDemo } from "./OrbitingCirclesDemo";
import { RainbowButton } from "@/Components/ui/rainbow-button";

const Homemid = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="bg-gray-800 p-2 h-[50px] text-white">
        <div className="ml-[35rem] flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
                  Features
                </NavigationMenuTrigger>
                
                <NavigationMenuContent className="bg-black text-white p-2">
                  <NavigationMenuLink>Collaboration</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Additional NavigationMenu if needed */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle}>
                  Item Two
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-black text-white p-2">
                  <NavigationMenuLink className="text-red-500">
                    Link
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
         
        </div>
        
          
            
       
          
      </div>

      <div className="mt-[100px] ml-[170px] flex items-center">
        <Button
          variant="outline"
          className="transition-colors duration-300 border-[1px] border-red hover:bg-red-500 text-white"
        >
          + Create rtc
        </Button>
      </div>

      {/* Include OrbitingCirclesDemo inside the parent div */}
    </div>
  );
};

export default Homemid;



        // Button code
       
       
        // tailwind.config.js code
        