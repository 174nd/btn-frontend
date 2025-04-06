import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function Accordion({ data }: { data: { title: string; content: string; image: string }[] }) {
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
            <div className="w-full">
              <span className="text-primary-950 text-2xl font-bold">{item.title}</span>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 text-gray-700">{item.content}</div>
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
                  className="w-[150px] rounded-lg"
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
