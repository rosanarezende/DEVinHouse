import * as S from "./styles";

import rosana50 from "../../assets/rosana-50.png";
import rosana75 from "../../assets/rosana-75.png";
import rosana100 from "../../assets/rosana-100.png";

function Footer() {
  return (
    <S.FooterWrapper>
      <picture>
          <source media="(max-width: 800px)" srcSet={rosana50} />
          <source media="(max-width: 1600px)" srcSet={rosana75} />
          <img
            src={rosana100}
            alt="logo-rosana"
            id="rosana-logo"
          />
        </picture>

      <div id="social">
        <a
          role="button"
          href="https://github.com/rosanarezende"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/45580434/86546052-25528f80-bf09-11ea-8931-7c52658182d6.png"
            alt="github"
            className="social-media"
          />
        </a>
        <a
          role="button"
          href="https://www.linkedin.com/in/rosanarezende/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/45580434/86546047-1ff54500-bf09-11ea-8d5c-cc69243528e4.png"
            alt="linkedin"
            className="social-media"
          />
        </a>
        <a
          role="button"
          href="https://web.whatsapp.com/send?phone=+5527999672118"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://user-images.githubusercontent.com/45580434/86546051-24b9f900-bf09-11ea-8d74-119dbfd88d11.png"
            alt="whatsapp"
            className="social-media"
          />
        </a>
      </div>

      <div id="copyright">© Dez. 2020</div>
    </S.FooterWrapper>
  );
}

export default Footer;
