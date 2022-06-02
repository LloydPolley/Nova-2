import type { ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import style from "./Hero.module.scss";
import hero from "./nova-2-tale.png";

type Props = {
  children: ReactNode;
  className?: string;
};

const cx = classNames.bind(style);

const Hero = () => {
  return (
    <div className={cx("hero")}>
      <div className={cx("hero__main")}>
        <Image alt="Mountains" src={hero} objectFit="cover" />
      </div>
      <div className={cx("hero__grid")}></div>
    </div>
  );
};

export default Hero;
