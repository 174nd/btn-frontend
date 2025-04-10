import { AiOutlineWhatsApp } from "react-icons/ai";

export function ContactUs() {
  return (
    <div className="relative top-0 mx-auto w-full">
      <div className="aspect-[2/1] w-full md:aspect-[1440/201]" />
      <div className="absolute left-1/2 aspect-[3/2] w-full max-w-[1080px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-4xl md:aspect-[1032/288]">
        <div className="absolute h-full w-full bg-[url('/bg/bg1.jpg')] bg-cover" />
        <div className="bg-primary-700/40 absolute flex h-full w-full items-center justify-center">
          <div className="flex w-fit flex-col items-center gap-4 px-4">
            <h2 className="text-4xl font-bold text-white">Contact Us</h2>
            <p className="w-full max-w-[651px] text-center text-sm text-white md:text-base">
              Cras nisi nulla, ornare nec metus ut, iaculis dapibus ante. Nulla euismod lacus nulla, vitae hendrerit justo bibendum ac. Aenean ac nunc
              a lorem dictum gravida. Vestibulum et hendrerit mi, et pretium massa.
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
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
      <div className="bg-primary-950 aspect-[7/3] w-full md:aspect-[1440/201]" />
    </div>
  );
}
