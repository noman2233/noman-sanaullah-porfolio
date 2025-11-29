"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Preloader = () => {
  useEffect(() => {
    noxfolioUtilits.preloader();
  }, []);

  // return <div className="preloader" />;
  return (
    <DotLottieReact
      src="https://lottie.host/84e94bc3-3ef2-4e94-8e2d-9cb4cebe91ce/305RcUKk5z.lottie"
      loop
      className="preloader"
      autoplay
    />
  );
  
};
export default Preloader;
