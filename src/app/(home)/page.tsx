import Image from 'next/image';
import Link from 'next/link';
import CompanyLogos from '../components/company-logos';
import { getCityFilter } from './lib/data';
import Navbar from '../components/navbar';
import { FooterLinks } from '../components/FooterLinks';
import { SELECTIVE_ITEMS, SERVICES, TESTIMONIALS } from './lib/constants';
import { TestimonialCard } from '../components/TestimonialCard';
import { SelectiveCard } from '../components/SelectiveCard';
import { ServiceCard } from '../components/ServiceCard';
import { SearchForm } from '../components/SearchForm';
import { v4 as uuidv4 } from 'uuid';

export default async function HomePage() {
  const filter = await getCityFilter();

  const departureCities = [...new Set(filter?.map((val) => val.departureCity))];
  const arrivalCities = [...new Set(filter?.map((val) => val.destinationCity))];

  return (
    <>
      <section
        id="Header"
        className="bg-[url('/assets/images/background/airplane.png')] bg-no-repeat bg-cover bg-left-top -z-10"
      >
        <div className="Header-content bg-gradient-to-r from-[#080318] to-[rgba(8,3,24,0)] z=0">
          <Navbar />
          <div className="hero-section container max-w-[1130px] w-full mx-auto flex flex-col gap-[90px] mt-[103px]">
            <div className="title flex flex-col gap-[30px]">
              <h1 className="font-extrabold text-[80px] leading-[90px]">
                Best Flights. <br />
                Cheaper Budget.
              </h1>
              <p className="font-medium text-lg leading-[36px]">
                No more long queue, get more delicious heavy meals. <br />
                Crafted by best talented people around the world.
              </p>
            </div>
            <SearchForm
              departureCities={departureCities}
              arrivalCities={arrivalCities}
            />
          </div>
          <CompanyLogos />
        </div>
      </section>

      <section
        id="Services"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <h2 className="font-bold text-[32px] leading-[48px] text-center">
          We Ensure You <br />
          Fly With Us Forever
        </h2>
        <div className="flex justify-between">
          {SERVICES.map((service) => (
            <ServiceCard key={uuidv4()} {...service} />
          ))}
        </div>
      </section>

      <section
        id="Selected"
        className="container max-w-[1130px] mx-auto flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <div className="flex gap-[10px]">
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                width={25}
                height={25}
                src="/assets/images/icons/arrow-right.svg"
                className="rotate-180"
                alt="icon"
              />
            </button>
            <button className="flex shrink-0 w-10 h-10 items-center justify-center bg-white rounded-full">
              <Image
                width={25}
                height={25}
                src="/assets/images/icons/arrow-right.svg"
                alt="icon"
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          {SELECTIVE_ITEMS.map((item) => (
            <SelectiveCard key={uuidv4()} {...item} />
          ))}
        </div>
      </section>

      <section
        id="Testimonials"
        className="w-full flex flex-col pt-[100px] gap-[30px]"
      >
        <div className="flex flex-col gap-[6px] items-center">
          <h2 className="font-bold text-[32px] leading-[48px] text-center">
            Best Selective
          </h2>
          <p className="font-medium text-flysha-off-purple">
            We gave them all the best experiences ever
          </p>
        </div>
        <div className="testimonial-slider w-full overflow-hidden">
          <div className="slider flex shrink-0 w-max">
            {Array.from({ length: 3 }, (_, groupIndex) => (
              <div
                key={groupIndex}
                className="animate-[slide_15s_linear_infinite] flex gap-[30px] pl-[30px] items-center h-[228px]"
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <TestimonialCard key={`${groupIndex}-${index}`} {...testimonial} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex flex-col justify-between mt-[150px] border-t-[6px] border-flysha-light-purple p-[100px_10px_30px]">
        <div className="container max-w-[1130px] mx-auto flex justify-between relative">
          <Image
            width={300}
            height={300}
            src="/assets/images/icons/Ellipse 4.png"
            className="absolute h-[300px] -top-[45px] -left-[20px] z-0"
            alt="icon"
          />
          <div className="flex shrink-0 h-fit z-10">
            <Image
              width={150}
              height={70}
              src="/assets/images/logos/logo.svg"
              alt="logo"
            />
          </div>
          <div className="flex gap-[100px] z-10">
            <FooterLinks
              title="Explore"
              links={['Services', 'Testimonials', 'Pricing', 'About']}
            />
            <FooterLinks
              title="Services"
              links={['Pickup at Home', 'First Lounge Plus', 'Business Room', 'Bentley Power']}
            />
            <FooterLinks
              title="About"
              links={['Company Profile', 'Our Investors', 'Media Press', 'Careers']}
            />
            <div className="flex flex-col gap-5">
              <p className="font-bold text-lg">Connect</p>
              <Link
                href="#"
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  src="/assets/images/icons/call.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                +1 2208 1996
              </Link>
              <Link
                href="#"
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  src="/assets/images/icons/dribbble.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                FlySha
              </Link>
              <Link
                href="#"
                className="font-medium hover:font-semibold hover:text-flysha-light-purple transition-all duration-300 flex items-center gap-[6px]"
              >
                <Image
                  src="/assets/images/icons/sms.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                flysha@mail.com
              </Link>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-[60px] text-[#A0A0AC] text-sm z-10">
          All Rights Reserved. Copyright FlySha 2024.
        </p>
      </footer>
    </>
  );
}