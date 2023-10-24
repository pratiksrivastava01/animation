"use client";
import Preloader from "@/components/preloader/Preloader";
import { useState, useEffect } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return <div>{loading ? <Preloader /> : <div> hello world</div>}</div>;
};

export default page;
