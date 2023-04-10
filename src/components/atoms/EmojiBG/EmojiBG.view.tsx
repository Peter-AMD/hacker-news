import { useAnimationFrame, motion, useAnimation } from "framer-motion";
import { FC, useMemo, useRef, useState } from "react";
import style from "./EmojiBG.module.scss";

type EmojiBGProps = {
  children: JSX.Element | string;
};

const randomNumbers = () => {
  return Math.floor(Math.random() * 600);
};
export const EmojiBG: FC<EmojiBGProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const yRand = useMemo(randomNumbers, []);
  const xRand = useMemo(randomNumbers, []);

  useAnimationFrame((t) => {
    if (ref.current && window) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const y = (3 + Math.sin(t / 3000)) * yRand;
      const x = (3 + Math.sin(t / 3000)) * xRand;

      const rand = 0;
      let nx = x > screenWidth ? x - (screenWidth / x) * screenWidth - 600 : x;
      let ny =
        y > screenHeight ? y - (screenHeight / y) * screenHeight - 600 : y;

      ref.current.style.transform = `translateX(${nx + rand}px) translateY(${
        ny + rand
      }px)`;
    }
  });

  return (
    <div className={style.emoji} ref={ref}>
      {children}
    </div>
  );
};
