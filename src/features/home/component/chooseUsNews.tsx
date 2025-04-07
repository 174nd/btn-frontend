import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { PiArrowRightBold, PiArrowUpRightBold } from "react-icons/pi";

export function ChooseUsNews({ data }: { data: { title: string; url: string; image: string }[] }) {
  const [current, setCurrent] = useState(0);

  // Ganti otomatis tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 w-full px-4 pb-6">
      <div className="relative flex h-[430px] w-full items-end p-4">
        {data.map((item, index) => (
          <AnimatePresence initial={false}>
            {current === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 top-0 left-0 z-0 h-full w-full rounded-2xl bg-cover"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            )}
          </AnimatePresence>
        ))}
        <div className="z-[1] flex h-[127px] w-[266px] flex-col justify-between bg-[url(/r1.svg)]">
          <div className="flex w-full justify-between">
            <p className="mt-2 ml-4 w-[200px] font-bold">{data[current].title}</p>
            <div
              className="bg-primary-600 text-primary-950 hover:text-primary-600 hover:bg-primary-950 flex h-[31px] w-[46px] cursor-pointer items-center justify-center rounded-xl transition-colors"
              onClick={() => setCurrent((current + 1) % data.length)}
            >
              <PiArrowRightBold className="h-5 w-5" />
            </div>
          </div>

          <a
            href={data[current].url}
            className="text-primary-200 hover:text-primary-950 border-primary-950 bg-primary-950 mr-2 mb-2 flex w-fit items-center gap-1 self-end rounded-full border px-3 py-1 transition-colors hover:bg-transparent"
          >
            <p>Read More</p>
            <PiArrowUpRightBold className="h-4 w-4" />
          </a>
        </div>

        {/* <img src={`/Rectangle 28.svg`} alt="detail" className="h-[127px] w-[266px]" /> */}
      </div>
    </div>
  );
}
