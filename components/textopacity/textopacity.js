"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const phrase =
//   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";

const phrase =
  "From the moment I met you, Puspam, my life took on new meaning. Your smile brightens my darkest days, and your laughter is like music to my soul. With you, I've discovered a love so deep and profound that I can't imagine my life without you in it. Today, as I stand before you, Puspam, I want to share my deepest feelings with you. You are my sunshine, my confidant, and my greatest joy. I promise to cherish and adore you for the rest of my days. Will you make me the happiest person in the world and be with me forever?";

const Textopacity = () => {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.02,
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {splitWords(phrase)}
      </div>
    </main>
  );
};

export default Textopacity;
