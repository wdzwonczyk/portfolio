"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollRef,
    offset: ["start start", "end start"],
  });

  const translateA = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const translateB = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const translateC = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const translateD = useTransform(scrollYProgress, [0, 1], [0, 220]);

  const n = images.length;
  const base = Math.floor(n / 4);
  const rem = n % 4;
  const sizes = [0, 1, 2, 3].map((i) => base + (i < rem ? 1 : 0));
  let offset = 0;
  const parts = sizes.map((size) => {
    const slice = images.slice(offset, offset + size);
    offset += size;
    return slice;
  });
  const [firstPart, secondPart, thirdPart, fourthPart] = parts;

  const columns: { items: string[]; y: typeof translateA }[] = [
    { items: firstPart, y: translateA },
    { items: secondPart, y: translateB },
    { items: thirdPart, y: translateC },
    { items: fourthPart, y: translateD },
  ];

  return (
    <div
      ref={scrollRef}
      className={cn(
        "h-full min-h-0 w-full overflow-y-auto overflow-x-hidden overscroll-y-contain",
        className,
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-16 sm:grid-cols-2 sm:gap-8 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-20">
        {columns.map(({ items, y }, colIdx) => (
          <div key={`parallax-col-${colIdx}`} className="grid gap-6 sm:gap-8">
            {items.map((src, idx) => (
              <motion.div style={{ y }} key={`parallax-${colIdx}-${idx}`}>
                <img
                  src={src}
                  alt=""
                  className="!m-0 !p-0 h-64 w-full rounded-2xl object-cover object-left-top sm:h-72 lg:h-80"
                  height={400}
                  width={400}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
