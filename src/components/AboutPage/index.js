import React from "react";
import { AboutPageBodyStyled } from "./styles";

const images = [
  {
    path: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    caption: "React",
  },
  {
    path:
      "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/9267873881551942642-512.png",
    caption: "React Router",
  },
  {
    path:
      "https://camo.githubusercontent.com/0cd910e76658429374539a8d72a0608783918aae/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
    caption: "React Icons",
  },
  {
    path: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    caption: "Redux",
  },
  {
    path: "https://cdn.worldvectorlogo.com/logos/redux-saga.svg",
    caption: "Redux-Saga",
  },
  {
    path: "https://miro.medium.com/max/652/0*FxQ-wCE5HCPPLhI9.png",
    caption: "styled-components",
  },
];

function AboutPageBody() {
  return (
    <AboutPageBodyStyled>
      <section>
        <h2>OPEN API:</h2>
        <img
          id="TMDB-logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt="TMDB logo"
        />
      </section>
      <section>
        <h2>라이브러리:</h2>
        <ul className="wrapper">
          {images.map((image) => (
            <li key={image.caption} className="item-with-image">
              <div className="image-wrapper">
                <img src={image.path} alt={image.caption} />
              </div>
              <span>{image.caption}</span>
            </li>
          ))}
          <li className="item">
            <span>axios</span>
          </li>
          <li className="item">
            <span>qs</span>
          </li>
          <li className="item">
            <div>
              <span>React</span>
              <br />
              <span>Player</span>
            </div>
          </li>
        </ul>
      </section>
    </AboutPageBodyStyled>
  );
}

export default AboutPageBody;
