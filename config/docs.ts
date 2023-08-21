import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Customers",
      href: "/customers",
    },
   
    
    
  ],
  sidebarNav: [
    {
      title: "General",
      items: [
        {
          title: "Help",
          href: "/helps",
        },
        {
          title: "Sign In",
          href: "/sign-in",
        },
      
        {
          title: "Settings",
          href: "/settings",
        },
        
      ],
    },
  ],
}
