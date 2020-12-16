import * as S from "./styles";

function Footer() {
  return (
    <S.FooterWrapper>
      <img
        src="https://user-images.githubusercontent.com/45580434/86594186-f53cd800-bf6c-11ea-9868-bdb10d9083f6.png"
        alt="logo"
        id="rosana-logo"
      />

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
