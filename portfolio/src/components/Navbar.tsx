import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"


  export default function Navbar(){
    return(
        <div className="min-h-auto border-transparent rounded-lg bg-white/60">
            <NavigationMenu className="m-4 p-4">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="bg-zinc-900 text-white">Home</NavigationMenuTrigger>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        </div>
    )
  }