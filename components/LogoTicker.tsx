import React from 'react';
import Image from 'next/image';

function LogoTicker() {
  return (
    <div className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right, transparent, black, transparent)]">
          <div className="absolute inset-0 flex items-center">
            <div className="flex gap-14 flex-none animate-marquee">
              <Image
                src="/assets/logo-acme.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-apex.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-pulse.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-quantum.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-pulse.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              <Image
                src="/assets/logo-pulse.png"
                width={60}
                height={60}
                alt="brand image"
                className="h-9 w-auto"
              />
              {/* Repeat as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
