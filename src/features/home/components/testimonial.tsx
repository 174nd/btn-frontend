import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PiArrowLeftBold, PiArrowRightBold } from "react-icons/pi";

export function Testimonial({ data }: { data: { testimonial: string; name: string; title: string; image: string }[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    clearInterval(timerRef.current as unknown as number);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 5000);
  };

  // Ganti otomatis tiap 5 detik
  useEffect(() => {
    startTimer(); // start saat mount

    return () => clearInterval(timerRef.current as unknown as number);
  }, []);

  const handleNext = () => {
    setCurrent((current - 1 + data.length) % data.length);
    startTimer(); // restart timer setelah tombol ditekan
  };

  const handleBefore = () => {
    setCurrent((current + 1) % data.length);
    startTimer(); // restart timer setelah tombol ditekan
  };
  return (
    <div className="bg-primary-950">
      <div className="mx-4 grid max-w-[1080px] grid-cols-1 items-center gap-6 py-16 md:mx-auto md:grid-cols-12">
        <div className="flex flex-col gap-2 md:col-span-5 md:col-start-2">
          <h2 className="border-primary-200 text-primary-200 w-fit rounded-full border px-4 py-1 text-base">Testomonial</h2>
          <p className="text-4xl text-white">What Say Our Customers</p>
          <p className="text-sm text-white">{data[current].testimonial}</p>
          <div className="flex flex-row gap-2">
            <span className="text-primary-200 font-bold">{data[current].name}</span>
            <span className="text-primary-200 font-bold">|</span>
            <span className="text-primary-700">{data[current].title}</span>
          </div>
        </div>
        <div className="relative flex aspect-[407/261] w-full items-end justify-start md:col-span-5">
          {data.map((item, index) => (
            <AnimatePresence initial={false}>
              {current === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0 top-0 left-0 aspect-[407/261] w-full"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    WebkitMaskImage: "url('/svg/r2.svg')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    WebkitMaskPosition: "center",
                  }}
                />
              )}
            </AnimatePresence>
          ))}
          <div className="z-[1] flex w-[38px] flex-col items-center gap-1 md:gap-2">
            <div
              className="border-primary-200 hover:bg-primary-200 hover:text-primary-950 text-primary-200 flex aspect-square w-fit cursor-pointer rounded-full border p-[6px] transition-colors"
              onClick={handleBefore}
            >
              <PiArrowLeftBold className="w-4" />
            </div>
            <div
              className="border-primary-200 hover:bg-primary-200 hover:text-primary-950 text-primary-200 flex aspect-square w-fit cursor-pointer rounded-full border p-[6px] transition-colors"
              onClick={handleNext}
            >
              <PiArrowRightBold className="w-4" />
            </div>
            <div className="mx-auto flex gap-1">
              <span className="text-primary-200 text-sm">{current + 1}</span>
              <span className="text-primary-200 text-sm">/</span>
              <span className="text-sm text-white">{data.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
