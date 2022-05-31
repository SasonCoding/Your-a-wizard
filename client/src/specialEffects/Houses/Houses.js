import React, { useEffect } from "react";
import { useRegister } from "../../context/RegisterContext";
import "./Houses.css";

const Houses = () => {
  const { userProfile, setUserProfile } = useRegister();

  const handleClick = (currentHouse) => {
    setUserProfile({...userProfile, house: currentHouse});
  }

  useEffect(() => {
    setUserProfile({...userProfile, house: ""});
  }, []);

  return (
    <div className="row justify-content-center">
      <div className="col-lg-3 col-md-6 col-sm-8">
        <span className="house" onClick={() => handleClick("Gryffindor")}>
          <div className="house__background lazy-bg standard loaded"></div>
          <div className="house__background lazy-bg gryffindor loaded"></div>
          <div className="house__gradient" style={userProfile.house === "Gryffindor" ? {opacity: 0} : null}></div>
          <div className="house__border">
            <div className="house__crest">
              <img
                alt="Gryffindor"
                style={{ width: "234", height: "265" }}
                loading="lazy"
                className="lazyload lazy-loading loaded"
                src="//cdn.shopify.com/s/files/1/0514/6332/3817/t/5/assets/gryffindor-crest.svg?v=171111364849555272811610063526"
              />
            </div>
            <h2 className="house__title">Gryffindor</h2>
          </div>
        </span>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-8">
        <span className="house" onClick={() => handleClick("Slytherin")}>
          <div className="house__background lazy-bg standard loaded"></div>
          <div className="house__background lazy-bg slytherin loaded"></div>
          <div className="house__gradient" style={userProfile.house === "Slytherin" ? {opacity: 0} : null}></div>
          <div className="house__border">
            <div className="house__crest">
              <img
                alt="Slytherin"
                style={{ width: "234", height: "265" }}
                loading="lazy"
                className="lazyload lazy-loading loaded"
                src="//cdn.shopify.com/s/files/1/0514/6332/3817/t/5/assets/slytherin-crest.svg?v=164901104523693593731612317316"
              />
            </div>
            <h2 className="house__title">Slytherin</h2>
          </div>
        </span>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-8">
        <span className="house" onClick={() => handleClick("Ravenclaw")}>
          <div className="house__background lazy-bg standard loaded"></div>
          <div className="house__background lazy-bg ravenclaw loaded"></div>
          <div className="house__gradient" style={userProfile.house === "Ravenclaw" ? {opacity: 0} : null}></div>
          <div className="house__border">
            <div className="house__crest">
              <img
                alt="Ravenclaw"
                style={{ width: "234", height: "265" }}
                loading="lazy"
                className="lazyload lazy-loading loaded"
                src="//cdn.shopify.com/s/files/1/0514/6332/3817/t/5/assets/ravenclaw-crest.svg?v=168134606863272937961610063557"
              />
            </div>
            <h2 className="house__title">Ravenclaw</h2>
          </div>
        </span>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-8">
        <span className="house" onClick={() => handleClick("Hufflepuff")}>
          <div className="house__background lazy-bg standard loaded"></div>
          <div className="house__background lazy-bg hufflepuff loaded"></div>
          <div className="house__gradient" style={userProfile.house === "Hufflepuff" ? {opacity: 0} : null}></div>
          <div className="house__border">
            <div className="house__crest">
              <img
                alt="Hufflepuff"
                style={{ width: "234", height: "265" }}
                loading="lazy"
                className="lazyload lazy-loading loaded"
                src="//cdn.shopify.com/s/files/1/0514/6332/3817/t/5/assets/hufflepuff-crest.svg?v=122733404310360764461612317293"
              />
            </div>
            <h2 className="house__title">Hufflepuff</h2>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Houses;
