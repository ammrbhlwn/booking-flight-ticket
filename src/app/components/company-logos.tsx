import Image from 'next/image';
import React from 'react';

const logos = [
  '/assets/images/logos/logoipsum1.png',
  '/assets/images/logos/logoipsum2.png',
  '/assets/images/logos/logoipsum3.png',
  '/assets/images/logos/logoipsum4.png',
];

const REPEAT_COUNT = 3;

export default function CompanyLogos() {
  return (
    <div className="company-logos w-full flex items-center py-[50px] bottom-0 overflow-hidden">
      <div className="slider flex shrink-0 w-max">
        {Array.from({ length: REPEAT_COUNT }).map((_, sliderRepeat) => (
          <div
            key={`slider-${sliderRepeat}-${logos.join('-')}`}
            className="animate-[slide_10s_linear_infinite] flex gap-[50px] pl-[50px] items-center"
          >
            {logos.map((logo) => (
              <div key={logo} className="flex w-fit h-[30px] shrink-0">
                <Image
                  width={120}
                  height={60}
                  src={logo}
                  className="w-full h-full object-contain"
                  alt="logo"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
