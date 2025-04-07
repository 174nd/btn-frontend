import { SiGooglemaps } from "react-icons/si";
import { HomeLayout } from "./layout";
import { Accordion } from "@/components/ui/accordion";
import { PiArrowLeftBold, PiArrowRightBold, PiArrowUpRightBold } from "react-icons/pi";
import { FaRegDotCircle } from "react-icons/fa";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { AccordionFaQ } from "@/components/ui/accordionFaQ";

export const HomeNoResp = () => {
  const items = [
    {
      title: "Lorem Ipsum",
      content:
        "Pariatur ipsum magna in fugiat consequat nulla anim amet et commodo deserunt. Dolore sint incididunt ut officia labore elit cupidatat laborum fugiat ex amet commodo. Cillum id adipisicing ad id nulla consequat do commodo irure ullamco incididunt anim ex aute. Aute irure duis laborum anim mollit ullamco nostrud amet aute qui pariatur.",
      image: "/bg/bg1.jpg",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Dolor nostrud mollit minim reprehenderit laboris qui velit non nulla eiusmod sint sunt in. Ex deserunt ipsum esse ea velit elit Lorem. Reprehenderit esse id Lorem veniam. Aliqua dolor dolor voluptate proident pariatur dolore aliquip ad in aliqua ipsum ullamco. Ad elit consequat ad cillum. Laborum nisi mollit excepteur ea ad velit elit et.",
      image: "/bg/bg1.jpg",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Sunt minim culpa enim nisi eu. Ad pariatur sint velit elit aliquip enim excepteur in dolor commodo aliqua. Amet ut consectetur duis dolore voluptate.",
      image: "/bg/bg1.jpg",
    },
  ];

  const faq = [
    {
      title: "Lorem Ipsum",
      content:
        "Pariatur ipsum magna in fugiat consequat nulla anim amet et commodo deserunt. Dolore sint incididunt ut officia labore elit cupidatat laborum fugiat ex amet commodo. Cillum id adipisicing ad id nulla consequat do commodo irure ullamco incididunt anim ex aute. Aute irure duis laborum anim mollit ullamco nostrud amet aute qui pariatur.",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Dolor nostrud mollit minim reprehenderit laboris qui velit non nulla eiusmod sint sunt in. Ex deserunt ipsum esse ea velit elit Lorem. Reprehenderit esse id Lorem veniam. Aliqua dolor dolor voluptate proident pariatur dolore aliquip ad in aliqua ipsum ullamco. Ad elit consequat ad cillum. Laborum nisi mollit excepteur ea ad velit elit et.",
    },
    {
      title: "Lorem Ipsum",
      content:
        "Sunt minim culpa enim nisi eu. Ad pariatur sint velit elit aliquip enim excepteur in dolor commodo aliqua. Amet ut consectetur duis dolore voluptate.",
    },
  ];

  const city = ["Jambi", "Medan", "Kalimantan", "Batam", "Jayapura"];

  return (
    <HomeLayout>
      <div className="relative h-[650px]">
        <div className="absolute h-full w-full bg-[url('/bg/bg1.jpg')] bg-cover" />
        <div className="from-primary-700 to-primary-700/0 absolute h-full w-full bg-gradient-to-b" />
        <div className="absolute inset-0 flex h-[650px] w-full items-center">
          <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between">
            <div className="w-[270px] rounded-md bg-white/50 p-3 pt-2 backdrop-blur-lg">
              <div className="flex items-center gap-1">
                <SiGooglemaps className="w-3" />
                <span>Batam, Indonesia</span>
              </div>
              <div className="h-[100px] w-full rounded-md bg-white"></div>
            </div>

            <div className="w-[417px] text-white">
              <h1 className="text-right text-[64px]/[64px] font-bold">BAKTI TANI NUSANTARA</h1>
              <div className="text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra enim ac egestas porttitor. Quisque scelerisque diam lorem, vel
                tristique dolor mollis malesuada
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-800 h-[160px] py-6">
        <h2 className="mx-auto text-center text-3xl font-bold text-white">Our Client</h2>
        <div className="relative h-16 w-full overflow-hidden bg-gray-200">
          <div className="animate-marquee-right absolute border border-red-500 whitespace-nowrap">
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
            <img src="/logo.png" alt="Logo" className="mx-4 inline-block h-16" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1080px] items-center justify-between">
        <div className="h-fit">
          <h2 className="text-primary-800 text-4xl font-bold">About Us</h2>
          <p className="w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vehicula eros, consectetur efficitur elit. Aenean diam lacus,
            dignissim at ultrices at, dapibus et justo
          </p>
        </div>

        <div className="h-[210px] w-[157px] -rotate-12 rounded-md bg-[url(/au.jpg)] bg-cover" />
      </div>

      <div className="mx-auto mt-10 grid max-w-[1080px] grid-cols-3 gap-6">
        <div className="group relative h-[200px] w-full overflow-hidden rounded-xl">
          <div className="absolute h-[200px] w-full bg-[url(/au.jpg)] bg-cover" />
          <div className="bg-primary-700/100 group-hover:bg-primary-700/40 absolute flex h-[200px] w-full flex-col justify-between p-4 transition-colors duration-300">
            <div className="bg-primary-950 group-hover:bg-primary-100 group-hover:text-primary-950 w-fit rounded-lg px-3 py-[2px] text-sm text-white transition-colors">
              GROW
            </div>

            <p className="text-primary-950 transition-colors group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="group relative h-[200px] w-full overflow-hidden rounded-xl">
          <div className="absolute h-[200px] w-full bg-[url(/au.jpg)] bg-cover" />
          <div className="bg-primary-700/100 group-hover:bg-primary-700/40 absolute flex h-[200px] w-full flex-col justify-between p-4 transition-colors duration-300">
            <div className="bg-primary-950 group-hover:bg-primary-100 group-hover:text-primary-950 w-fit rounded-lg px-3 py-[2px] text-sm text-white transition-colors">
              MOVE
            </div>

            <p className="text-primary-950 transition-colors group-hover:text-white">
              consectetur adipiscing elit. Donec vitae vehicula eros, consectetur efficitur elit.
            </p>
          </div>
        </div>

        <div className="group relative h-[200px] w-full overflow-hidden rounded-xl">
          <div className="absolute h-[200px] w-full bg-[url(/au.jpg)] bg-cover" />
          <div className="bg-primary-700/100 group-hover:bg-primary-700/40 absolute flex h-[200px] w-full flex-col justify-between p-4 transition-colors duration-300">
            <div className="bg-primary-950 group-hover:bg-primary-100 group-hover:text-primary-950 w-fit rounded-lg px-3 py-[2px] text-sm text-white transition-colors">
              NOWRIES
            </div>

            <p className="text-primary-950 transition-colors group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 relative mx-auto mt-10 w-full max-w-[1080px] rounded-xl">
        <h2 className="text-primary-950 absolute -mt-6 w-full text-center text-4xl font-bold">Why Choose Us?</h2>

        <Accordion data={items} />

        <div className="mt-6 w-full px-4 pb-6">
          <div className="flex h-[430px] w-full items-end rounded-2xl bg-[url(/bg/bg1.jpg)] bg-cover p-4">
            <div className="flex h-[127px] w-[266px] flex-col justify-between bg-[url(/r1.svg)]">
              <div className="flex w-full justify-between">
                <p className="mt-2 ml-4 w-[200px] font-bold">Vestibulum facilisis consectetur leo, non porta odio mollis at.</p>
                <div className="bg-primary-600 flex h-[31px] w-[46px] items-center justify-center rounded-xl">
                  <PiArrowRightBold className="text-primary-950 h-5 w-5" />
                </div>
              </div>

              <div className="text-primary-200 bg-primary-950 mr-2 mb-2 flex w-fit items-center gap-1 self-end rounded-full px-3 py-1">
                <p>Read More</p>
                <PiArrowUpRightBold className="h-4 w-4" />
              </div>
            </div>

            {/* <img src={`/Rectangle 28.svg`} alt="detail" className="h-[127px] w-[266px]" /> */}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1080px] grid-cols-12 gap-6 py-6">
        <div className="col-span-10 col-start-2 flex items-center justify-between">
          <h2 className="text-primary-950 text-4xl font-bold">Peta Penyebaran</h2>
          <p className="w-[325px] text-right text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vehicula eros, consectetur efficitur elit. Aenean diam lacus,
            dignissim at ultrices at, dapibus et justo. Cras mattis ante eu libero ullamcorper rhoncus.
          </p>
        </div>

        <img src="/indonesia.svg" alt="maps" className="text-primary-950 col-span-8 col-start-2" />
        <div className="col-span-2 flex flex-col justify-center gap-2">
          {city.map((d, i) => (
            <div className="bg-primary-950 w-full rounded-lg py-1 text-center text-white" key={i}>
              {d}
            </div>
          ))}
        </div>
        {/* <div className="bg-text-primary-950 mask-[url('/indonesia.svg')] mask-no-repeat mask-center mask-size-contain col-span-10 col-start-2 h-fit w-full" /> */}

        {/* <div className="col-span-10 col-start-2 flex items-center justify-between"> */}
      </div>

      <div className="bg-primary-950">
        <div className="mx-auto grid max-w-[1080px] grid-cols-12 items-center gap-6 py-16">
          <div className="col-span-5 col-start-2 flex flex-col gap-2">
            <h2 className="border-primary-200 text-primary-200 w-fit rounded-full border px-4 py-1 text-base">Testomonial</h2>
            <p className="text-4xl text-white">What Say Our Customers</p>
            <p className="text-sm text-white">
              Cras nisi nulla, ornare nec metus ut, iaculis dapibus ante. Nulla euismod lacus nulla, vitae hendrerit justo bibendum ac. Aenean ac nunc
              a lorem dictum gravida. Vestibulum et hendrerit mi, et pretium massa.
            </p>
            <div className="flex flex-row gap-2">
              <span className="text-primary-200 font-bold">Andi Lewis</span>
              <span className="text-primary-200 font-bold">|</span>
              <span className="text-primary-700">Top Customer</span>
            </div>
          </div>
          <div className="relative col-span-5">
            <div
              className="aspect-[407/261] w-full"
              style={{
                backgroundImage: "url('/bg/bg1.jpg')",
                WebkitMaskImage: "url('/svg/r2.svg')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
              }}
            />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2">
              <div className="border-primary-200 flex aspect-square w-fit rounded-full border p-2">
                <PiArrowLeftBold className="text-primary-200 w-4" />
              </div>
              <div className="border-primary-200 flex aspect-square w-fit rounded-full border p-2">
                <PiArrowRightBold className="text-primary-200 w-4" />
              </div>
              <div className="flex gap-1">
                <span className="text-primary-200 text-sm">1</span>
                <span className="text-primary-200 text-sm">/</span>
                <span className="text-sm text-white">10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1080px]">
        <div className="flex justify-between">
          <div className="relative">
            <div
              className="bg-primary-950 absolute -top-10 aspect-[392.5/243.5] w-[392.5px] pt-12 pl-8"
              style={{
                WebkitMaskImage: "url('/svg/Rectangle 34.svg')",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                WebkitMaskPosition: "center",
              }}
            >
              <p className="w-[315px] text-3xl font-bold text-white">Got Questions?We've got Answers</p>
              <div className="mt-4 flex flex-col gap-2 text-white">
                <div className="flex gap-2">
                  <FaRegDotCircle className="w-4" />
                  <p className="text-bold">Agribusiness Company</p>
                </div>

                <div className="flex gap-2">
                  <FaRegDotCircle className="w-4" />
                  <p className="text-bold">Cultivation Actors</p>
                </div>

                <div className="flex gap-2">
                  <FaRegDotCircle className="w-4" />
                  <p className="text-bold">Field Assistant</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[504px]">
            <AccordionFaQ data={faq} />
          </div>
        </div>
      </div>

      <div className="relative top-0 mx-auto w-full">
        <div className="aspect-[1440/201] w-full" />
        <div className="absolute left-1/2 aspect-[1032/288] w-full max-w-[1080px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-4xl">
          <div className="absolute h-full w-full bg-[url('/bg/bg1.jpg')] bg-cover" />
          <div className="bg-primary-700/40 absolute flex h-full w-full items-center justify-center">
            <div className="flex w-fit flex-col items-center gap-4">
              <h2 className="text-4xl font-bold text-white">Contact Us</h2>
              <p className="max-w-[651px] text-center text-white">
                Cras nisi nulla, ornare nec metus ut, iaculis dapibus ante. Nulla euismod lacus nulla, vitae hendrerit justo bibendum ac. Aenean ac
                nunc a lorem dictum gravida. Vestibulum et hendrerit mi, et pretium massa.
              </p>
              <div className="flex gap-4">
                <div className="bg-primary-700 border-primary-700 hover:text-primary-700 flex cursor-pointer items-center gap-1 rounded-full border px-3 py-1 text-sm text-white transition-colors duration-300 hover:bg-white">
                  <AiOutlineWhatsApp className="text-lg" />
                  <p className="text-center">+62 852-6470-0399</p>
                </div>
                <div className="bg-primary-700 border-primary-700 hover:text-primary-700 flex cursor-pointer items-center gap-1 rounded-full border px-3 py-1 text-sm text-white transition-colors duration-300 hover:bg-white">
                  <AiOutlineWhatsApp className="text-lg" />
                  <p className="text-center">+62 852-6470-0399</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-950 aspect-[1440/201] w-full" />
      </div>
      <div className="bg-primary-950 flex w-full flex-col items-center pb-10">
        <div className="mx-auto flex w-full max-w-[1080px] gap-4">
          <div className="bg-primary-700 flex min-w-[328px] flex-col items-center gap-4 rounded-2xl py-8">
            <img src="/logo.png" alt="Logo" className="w-[150px] rounded-full" />
            <p className="text-center text-4xl font-bold text-white">BAKTI TANI NUSANTARA</p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-row items-start gap-8 rounded-2xl bg-white px-4 py-3">
              <div className="">
                <h3 className="text-xl font-bold">Quick Link</h3>
                <ul className="ml-2 space-y-1 text-xs">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Why Choose Us</li>
                  <li>Testimony</li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-xl font-bold">Contact</h3>
                <ul className="ml-2 space-y-1 text-xs">
                  <li>
                    <div className="flex items-center gap-1">
                      <BiSolidPhoneCall className="text-base" />
                      <span>+62 852-6470-0399</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-1">
                      <MdEmail className="text-base" />
                      <span>marketing.ptbtn@gmail.com</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-1">
                      <SiGooglemaps className="mt-1 text-base" />
                      <span>
                        JL. Engku Putri, Tunas Industrial Park Type 6 G,
                        <br /> Tlk. Tering, Kec. Batam Kota, <br />
                        Kota Batam, Kepulauan Riau 29444
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className="text-xl font-bold">Resource</h3>
                <ul className="ml-2 space-y-1 text-xs">
                  <li>Privacy & Policy</li>
                  <li>Terms & Condition</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-4 rounded-2xl bg-white px-4 py-3">
              <div className="flex w-full items-center justify-center gap-3">
                <img src="/svg/Group.svg" alt="Logo" className="w-[188px] rounded-full" />
                <div className="border-primary-950 text-primary hover:bg-primary-950 flex items-center rounded-2xl border-2 p-4 transition-colors hover:text-white">
                  <AiFillFacebook className="text-2xl" />
                </div>
                <div className="border-primary-950 text-primary hover:bg-primary-950 flex items-center rounded-2xl border-2 p-4 transition-colors hover:text-white">
                  <AiOutlineInstagram className="text-2xl" />
                </div>
                <div className="border-primary-950 text-primary hover:bg-primary-950 flex items-center rounded-2xl border-2 p-4 transition-colors hover:text-white">
                  <AiOutlineWhatsApp className="text-2xl" />
                </div>
                <div className="border-primary-950 text-primary hover:bg-primary-950 flex items-center rounded-2xl border-2 p-4 transition-colors hover:text-white">
                  <BsTwitterX className="text-xl" />
                </div>

                <img src="/svg/Group.svg" alt="Logo" className="flip w-[188px] scale-x-[-1] rounded-full" />
              </div>
              <div className="bg-primary-950 h-1 w-full" />
              <p className="w-full text-center">@Copyright baktitaninusantara.com. All Right reserved. 2025</p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};
