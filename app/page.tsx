import Link from "next/link";
import Banner from "@/components/banner";
import Hero from "@/components/hero";
import LogoTicker from "@/components/LogoTicker";
import { SiteFooter } from "@/components/site-footer"

export default function IndexPage() {
  return (
   <div >
    
    <Banner />
    <LogoTicker />
    <Hero />
    <SiteFooter />

  </div>
  )
}
