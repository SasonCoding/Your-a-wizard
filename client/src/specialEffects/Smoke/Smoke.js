import React from "react";
import "./Smoke.css";

const Smoke = () => {
  return (
      <section
        className="hero"
        style={{ maxHeight: "calc(100vh - 144.125px)"}}
      >
        <video
        style={{ objectFit: "cover" }}
        data-low-res="https://uk.harrypottertheplay.com/content/themes/harry-potter-parent-theme/library/videos/hpatcc_hero_9x16_1.mp4"
        data-hi-res="https://uk.harrypottertheplay.com/content/themes/harry-potter-parent-theme/library/videos/hpatcc_hero_16x9.mp4"
          loop
          autoPlay="autoplay"
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://uk.harrypottertheplay.com/content/themes/harry-potter-parent-theme/library/videos/hpatcc_hero_16x9.mp4"
            type="video/mp4"
          />
          <source
            src="https://uk.harrypottertheplay.com/content/themes/harry-potter-parent-theme/library/videos/hpatcc_hero_16x9.webm"
            type="video/webm"
          />
          <source
            src="https://uk.harrypottertheplay.com/content/themes/harry-potter-parent-theme/library/videos/hpatcc_hero_16x9.ogv"
            type="video/ogv"
          />
        </video>
      </section>
  );
};

export default Smoke;