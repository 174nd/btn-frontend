import { AiFillFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-primary-950 flex w-full flex-col items-center pb-10">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-4 px-4 md:flex-row md:px-0">
        <div className="bg-primary-700 flex min-w-[328px] flex-col items-center gap-4 rounded-2xl py-8">
          <img src="/logo.png" alt="Logo" className="w-[150px] rounded-full" />
          <p className="text-center text-4xl font-bold text-white">BAKTI TANI NUSANTARA</p>
        </div>

        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col items-start gap-2 rounded-2xl bg-white px-4 py-3 md:flex-row md:gap-8">
            <div className="">
              <h3 className="text-xl font-bold">Quick Link</h3>
              <ul className="ml-2 space-y-1 md:text-xs">
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Why Choose Us</li>
                <li>Testimony</li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Contact</h3>
              <ul className="ml-2 space-y-1 md:text-xs">
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
              <ul className="ml-2 space-y-1 md:text-xs">
                <li>Privacy & Policy</li>
                <li>Terms & Condition</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-4 rounded-2xl bg-white px-4 py-3">
            <div className="flex w-full items-center justify-center gap-3">
              <img src="/svg/Group.svg" alt="Logo" className="hidden w-[188px] rounded-full md:block" />
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

              <img src="/svg/Group.svg" alt="Logo" className="flip hidden w-[188px] scale-x-[-1] rounded-full md:block" />
            </div>
            <div className="bg-primary-950 h-1 w-full" />
            <p className="w-full text-center">@Copyright baktitaninusantara.com. All Right reserved. 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
