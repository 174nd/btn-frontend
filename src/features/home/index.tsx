import { SiGooglemaps } from "react-icons/si";
import { HomeLayout } from "./layout";
import { FaRegDotCircle } from "react-icons/fa";
import { ChooseUsAccordion } from "./components/chooseUsAccordion";
import { ChooseUsNews } from "./components/chooseUsNews";
import { FaQAccordion } from "./components/faqAccordion";
import { ContactUs } from "./components/contactUs";
import Footer from "./components/footer";
import { Testimonial } from "./components/testimonial";
import { OurClient } from "./components/ourClientLogo";

export const Home = () => {
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

  const news = [
    { title: "Laboris laborum qui qui excepteur irure cillum elit culpa.", url: "#", image: "/bg/bg1.jpg" },
    { title: "Ipsum qui consequat labore incididunt dolor irure esse eiusmod.", url: "#", image: "/bg/bg2.jpg" },
    { title: "Deserunt amet culpa nulla eu.", url: "#", image: "/bg/bg3.jpg" },
  ];
  const testimonial = [
    { testimonial: "Laboris laborum qui qui excepteur irure cillum elit culpa.", title: "Top Customer", name: "Andi", image: "/bg/bg1.jpg" },
    { testimonial: "Ipsum qui consequat labore incididunt dolor irure esse eiusmod.", title: "Top Customer", name: "Lewis", image: "/bg/bg2.jpg" },
    { testimonial: "Deserunt amet culpa nulla eu.", title: "Top Customer", name: "Pratama", image: "/bg/bg3.jpg" },
  ];

  const city = ["Jambi", "Medan", "Kalimantan", "Batam", "Jayapura"];

  const ourClients = [
    { name: "Instagram", url: "#", icon: "/vite.svg" },
    { name: "Twitter", url: "#", icon: "/vite.svg" },
    { name: "Google Play", url: "#", icon: "/vite.svg" },
    { name: "Facebook", url: "#", icon: "/vite.svg" },
    { name: "Google Drive", url: "#", icon: "/vite.svg" },
  ];

  return (
    <HomeLayout>
      <div className="relative h-screen md:h-[650px]">
        <div className="absolute h-full w-full bg-[url('/bg/bg1.jpg')] bg-cover" />
        <div className="from-primary-700 to-primary-700/0 absolute h-full w-full bg-gradient-to-b" />
        <div className="absolute inset-0 flex h-screen items-center md:h-[650px] md:w-full">
          <div className="mx-auto flex w-full max-w-[1080px] flex-col items-center justify-between gap-14 md:flex-row">
            <div className="order-2 w-[270px] rounded-md bg-white/50 p-3 pt-2 backdrop-blur-lg md:order-1">
              <div className="flex items-center gap-1">
                <SiGooglemaps className="w-3" />
                <span>Batam, Indonesia</span>
              </div>
              <div className="h-[100px] w-full rounded-md bg-white"></div>
            </div>

            <div className="order-1 w-full px-4 text-white md:order-2 md:w-[417px] md:px-0">
              <h1 className="text-center text-5xl font-bold md:text-right md:text-[64px]/[64px]">BAKTI TANI NUSANTARA</h1>
              <div className="w-full text-center text-xs md:text-right md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra enim ac egestas porttitor. Quisque scelerisque diam lorem, vel
                tristique dolor mollis malesuada
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurClient data={ourClients} />

      <div className="mx-auto mt-10 flex w-full max-w-[1080px] flex-col items-center justify-between gap-10 md:mt-10 md:flex-row md:gap-0">
        <div className="flex h-fit flex-col gap-4 px-4 md:gap-2 md:px-0">
          <h2 className="text-primary-800 text-4xl font-bold">About Us</h2>
          <p className="w-full md:w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vehicula eros, consectetur efficitur elit. Aenean diam lacus,
            dignissim at ultrices at, dapibus et justo
          </p>
        </div>

        <div className="h-[210px] w-[157px] -rotate-12 rounded-md bg-[url(/au.jpg)] bg-cover" />
      </div>

      <div className="mx-auto mt-10 grid max-w-[1080px] grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-0">
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

        <ChooseUsAccordion data={items} />

        <ChooseUsNews data={news} />
      </div>

      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 px-4 py-6 md:grid-cols-12 md:px-0">
        <div className="flex flex-col items-center justify-between md:col-span-10 md:col-start-2 md:flex-row">
          <h2 className="text-primary-950 text-4xl font-bold">Peta Penyebaran</h2>
          <p className="w-[325px] text-right text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae vehicula eros, consectetur efficitur elit. Aenean diam lacus,
            dignissim at ultrices at, dapibus et justo. Cras mattis ante eu libero ullamcorper rhoncus.
          </p>
        </div>

        <img src="/indonesia.svg" alt="maps" className="text-primary-950 md:col-span-8 md:col-start-2" />
        <div className="flex flex-col justify-center gap-2 md:col-span-2">
          {city.map((d, i) => (
            <div
              className="bg-primary-950 border-primary-950 hover:text-primary-950 w-full rounded-lg border py-1 text-center text-white transition-colors hover:bg-white"
              key={i}
            >
              {d}
            </div>
          ))}
        </div>
        {/* <div className="bg-text-primary-950 mask-[url('/indonesia.svg')] mask-no-repeat mask-center mask-size-contain col-span-10 col-start-2 h-fit w-full" /> */}

        {/* <div className="col-span-10 col-start-2 flex items-center justify-between"> */}
      </div>

      <Testimonial data={testimonial} />

      <div className="w-full max-w-[1080px] md:mx-auto">
        <div className="flex justify-between">
          <div className="relative h-[243.5px]">
            <div
              className="bg-primary-950 absolute -top-10 aspect-[392.5/243.5] w-screen overflow-hidden pt-12 pl-8 md:w-[392.5px]"
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
          <div className="mt-[243.5px] w-full md:mt-0 md:w-[504px]">
            <FaQAccordion data={faq} />
          </div>
        </div>
      </div>

      <ContactUs />
      <Footer />
    </HomeLayout>
  );
};
