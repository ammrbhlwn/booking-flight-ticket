'use client';

import Image from 'next/image';
import React from 'react';

export default function ListFlights() {
  return (
    <div className="ticket-container flex flex-col w-full gap-6">
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/thumbnail/airplane-taking-off-sunset-scene-generative-ai 1.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">FlySha</p>
            <p className="text-sm text-flysha-off-purple">Business Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">14:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">22:40</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 28.495.220</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/background/airplane.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">FlySha</p>
            <p className="text-sm text-flysha-off-purple">Business Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">14:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">22:40</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 5.392.444</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/thumbnail/airplane-taking-off-sunset-scene-generative-ai 2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">FlySha</p>
            <p className="text-sm text-flysha-off-purple">Business Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">14:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">22:40</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 589.309.392</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/thumbnail/airplane-taking-off-sunset-scene-generative-ai 2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">Super Air Star</p>
            <p className="text-sm text-flysha-off-purple">Economy Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">09:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">13:00</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 5.392.444</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/thumbnail/airplane-taking-off-sunset-scene-generative-ai 2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">Super Air Star</p>
            <p className="text-sm text-flysha-off-purple">Business Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">14:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">22:40</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 5.392.444</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/thumbnail/airplane-taking-off-sunset-scene-generative-ai 2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">FlySha</p>
            <p className="text-sm text-flysha-off-purple">Business Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">14:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">22:40</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 28.495.220</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/thumbnail/airplane-taking-off-sunset-scene-generative-ai 2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">FlySha</p>
            <p className="text-sm text-flysha-off-purple">Business Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">14:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">22:40</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 28.495.220</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
        <div className="flex gap-[16px] items-center">
          <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Image
              src="/assets/images/thumbnail/airplane-taking-off-sunset-scene-generative-ai 2.png"
              className="w-full h-full object-cover"
              alt="thumbnail"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <p className="font-bold text-lg">FlySha</p>
            <p className="text-sm text-flysha-off-purple">Business Class</p>
          </div>
        </div>
        <div className="flex items-center gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">14:00</p>
            <p className="text-sm text-flysha-off-purple">CGK</p>
          </div>
          <Image
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
            width={60}
            height={60}
          />
          <div className="flex flex-col gap-[2px] text-center">
            <p className="font-bold text-lg">22:40</p>
            <p className="text-sm text-flysha-off-purple">PDV</p>
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-lg">Rp 5.392.444</p>
        <a
          href="choose-seat.html"
          className="font-bold text-flysha-black bg-flysha-light-purple rounded-full p-[12px_20px] h-[48px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#B88DFF]"
        >
          Book Flight
        </a>
      </div>
      <p className="text-center text-sm text-[#A0A0AC] h-fit">
        You’ve reached the end of results.
      </p>
    </div>
  );
}
