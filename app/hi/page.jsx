import MusicPlayer from "@/components/MusicPlayer";
import Opacity from "@/components/opacity/opacity";
import Textopacity from "@/components/textopacity/textopacity";
import React from "react";

const page = () => {
  return (
    <div>
      <MusicPlayer />
      <Textopacity />
      <Opacity />
    </div>
  );
};

export default page;
