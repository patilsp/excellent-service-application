import { Facebook, Instagram, Twitter, Github, Dribbble } from 'lucide-react';
import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (     
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 md:px-8 md:py-0">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" /> */}
            <p className="mt-4 max-w-xs text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
            </p>
            <div className="mt-8 flex space-x-6 text-gray-600">
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> Facebook </span>
                <Facebook className="h-6 w-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> Instagram </span>
                <Instagram className="h-6 w-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> Twitter </span>
                <Twitter className="h-6 w-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only"> GitHub </span>
                <Github className="h-6 w-6" />
              </a>
            
            </div>
            <p className="mt-8 text-xs text-gray-800">
              © 2024 Excellent Service. All Rights Reserved
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">
                Company
              </p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#"> About </a>
                <a className="hover:opacity-75" href="#"> Meet the Team </a>
                <a className="hover:opacity-75" href="#"> History </a>
                <a className="hover:opacity-75" href="#"> Careers </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Services
              </p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#"> 1on1 Coaching </a>
                <a className="hover:opacity-75" href="#"> Company Review </a>
                <a className="hover:opacity-75" href="#"> Accounts Review </a>
                <a className="hover:opacity-75" href="#"> HR Consulting </a>
                <a className="hover:opacity-75" href="#"> SEO Optimisation </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Helpful Links
              </p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#"> Contact </a>
                <a className="hover:opacity-75" href="#"> FAQs </a>
                <a className="hover:opacity-75" href="#"> Live Chat </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Legal
              </p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href="#"> Privacy Policy </a>
                <a className="hover:opacity-75" href="#"> Terms &amp; Conditions </a>
                <a className="hover:opacity-75" href="#"> Disclaimers </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
