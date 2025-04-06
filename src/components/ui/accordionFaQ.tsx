import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";

export function AccordionFaQ({ data }: { data: { title: string; content: string }[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="px-4 pt-8">
      <div className="divide-primary-200 flex flex-col divide-y-3 overflow-hidden rounded-xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-primary-950 flex w-full flex-col justify-between p-4"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="flex w-full items-center justify-between">
              <span className="text-xl font-bold text-white">{item.title}</span>

              <BiSolidChevronDown
                className={cn(
                  "text-primary-300 text-sm transition-transform duration-300 ease-in-out",
                  index === activeIndex ? "rotate-180" : "rotate-0",
                )}
              />
            </div>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="text-primary-300 text-s px-4 pt-2">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
