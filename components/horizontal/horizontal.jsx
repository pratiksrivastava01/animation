"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import card from "@/constants/card";

const Horizontal = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 cursor-pointer">
          {card.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden border border-red-600 rounded-lg bg-black cursor-pointer"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 cursor-pointer"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center cursor-pointer">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase cursor-pointer text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Horizontal;
