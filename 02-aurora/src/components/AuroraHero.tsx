import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13ffaa", "#1e67c6", "#ceb4cf", "#dd335c"];
export const AuroraHero = () => {
    const color = useMotionValue(COLORS[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
 

    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10, 
            repeat: Infinity,
            repeatType: "mirror"
        });
    }, []);

  return (
    <motion.section 
    style={{backgroundImage}}
    className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 text-gray-200">
        <div className="relative z-10 flex flex-col items-center">
            <span className="mb-1.5 flex justify-center items-center rounded-full bg-gray-600/50 px-3 pb-1.5 pt-1 text-sm">Hey there</span>
            <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-3xl font-medium leading-tight text-center text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Write an eyecatching Header here
            </h1>
            <p className="my-6 max-w-xl text-center text-sm text-base leading-relaxed md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis excepturi quasi consequuntur molestias eaque, accusantium dolore</p>
            <motion.button 
            whileHover={{scale: 1.015}}
            whileTap={{scale: 0.985}}
            style={{border, boxShadow}}
            className="text-sm rounded-full px-4 py-2 text-gray-50 flex w-fit items-center border-collapse shadow transition-colors hover:bg-gray-950/50">
                Start free trial
            </motion.button>
        </div>
    </motion.section>
  )
}
