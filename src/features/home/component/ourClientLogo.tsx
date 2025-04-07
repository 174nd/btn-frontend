import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function OurClient({ data }: { data: { name: string; url: string; icon: string }[] }) {
  const controls = useAnimation();

  useEffect(() => {
    startInfiniteScroll();
  }, []);

  const startInfiniteScroll = () => {
    controls.start({
      x: -1000, // arbitrary large number
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
      },
    });
  };

  return (
    <div className="bg-primary-800 flex flex-col items-center justify-center gap-4 py-10">
      <h2 className="mx-auto text-center text-3xl font-bold text-white">Our Client</h2>
      <div className="relative w-full overflow-hidden">
        <motion.div className="flex w-max gap-12" animate={controls} onMouseEnter={() => controls.stop()} onMouseLeave={startInfiniteScroll}>
          {[...data, ...data, ...data, ...data].map((logo, i) => (
            <a key={i} className="text-primary-300 flex cursor-pointer items-center gap-2 whitespace-nowrap transition-colors hover:text-white">
              <img src={logo.icon} alt={logo.name} className="h-6 w-6" />
              <span className="text-base">{logo.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
