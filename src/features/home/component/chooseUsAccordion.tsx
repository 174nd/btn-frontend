import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function ChooseUsAccordion({ data }: { data: { title: string; content: string; image: string }[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="px-4 pt-8">
      <div className="divide-primary-200 flex flex-col divide-y-3 overflow-hidden rounded-xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-full items-start justify-between bg-gray-100 p-4"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="flex w-full flex-col">
              <span className="text-primary-950 text-2xl font-bold">{item.title}</span>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.img
                    initial={{ height: 0, marginTop: 0, opacity: 0 }}
                    animate={{ height: "auto", marginTop: 8, opacity: 1 }}
                    exit={{ height: 0, marginTop: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-4 block w-full rounded-lg md:hidden"
                    src={item.image}
                  />
                )}
              </AnimatePresence>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0, opacity: 0 }}
                    animate={{ height: "auto", marginTop: 8, opacity: 1 }}
                    exit={{ height: 0, marginTop: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-gray-700 md:px-4"
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.img
                  initial={{ height: 0, width: 150, opacity: 0 }}
                  animate={{ height: "auto", width: 150, opacity: 1 }}
                  exit={{ height: 0, width: 150, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="hidden w-[150px] rounded-lg md:block"
                  src={item.image}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
