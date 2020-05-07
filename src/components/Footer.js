import React from "react";
import * as Icon from "react-feather";
import { useTranslation } from "react-i18next";

function Footer(props) {
  const { t } = useTranslation();

  return (
    <footer className="fadeInUp" style={{ animationDelay: "2s" }}>
      <h5>{t("Computer Science Society")}</h5>

      <div className="link">
        <a
          href="https://pec.ac.in/pecacm"
          target="_blank"
          rel="noopener noreferrer"
        >
          PECACM
        </a>
      </div>

      <div>
        <a
          href="https://github.com/PECACM/pecacm_frontend"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
        </a>

        <a
          href="https://www.facebook.com/pecacm/"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
          style={{ justifyContent: "center" }}
        >
          <Icon.Facebook />
        </a>

        <a
          href="https://www.instagram.com/pecacm/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
          style={{ justifyContent: "center" }}
        >
          <Icon.Instagram />
        </a>

        <a
          href="https://twitter.com/ACM_CSS_PEC"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
          style={{ justifyContent: "center" }}
        >
          <Icon.Twitter />
        </a>

        <a
          href="https://www.linkedin.com/in/pecacm/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
          style={{ justifyContent: "center" }}
        >
          <Icon.Linkedin />
        </a>

        <a
          href="mailto:acmcss@pec.edu.in?Subject=Contact%20PEC%20ACM%20Student%20Chapter"
          target="_blank"
          rel="noopener noreferrer"
          className="mail"
          style={{ justifyContent: "center" }}
        >
          <Icon.Mail />
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
