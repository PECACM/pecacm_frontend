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
          href="https://github.com/PECACM"
          target="_blank"
          rel="noopener noreferrer"
        >
          PECACM
        </a>
      </div>

      <a
        href="https://github.com/PECACM/pecacm_frontend"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.GitHub />
        <span>Open Sourced on GitHub</span>
      </a>

      <a
        href="https://www.facebook.com/pecacm/"
        target="_blank"
        rel="noopener noreferrer"
        className="button facebook"
        style={{ justifyContent: "center" }}
      >
        <Icon.Facebook />
        <span>View updates on Facebook</span>
      </a>

      <a
        href="https://www.instagram.com/pecacm/"
        target="_blank"
        rel="noopener noreferrer"
        className="button instagram"
        style={{ justifyContent: "center" }}
      >
        <Icon.Instagram />
        <span>View updates on Instagram</span>
      </a>

      <a
        href="https://twitter.com/ACM_CSS_PEC"
        target="_blank"
        rel="noopener noreferrer"
        className="button twitter"
        style={{ justifyContent: "center" }}
      >
        <Icon.Twitter />
        <span>View updates on Twitter</span>
      </a>

      <a
        href="https://www.linkedin.com/in/pecacm/"
        target="_blank"
        rel="noopener noreferrer"
        className="button linkedin"
        style={{ justifyContent: "center" }}
      >
        <Icon.Linkedin />
        <span>View updates on LinkedIn</span>
      </a>

      <a
        href="mailto:acmcss@pec.edu.in?Subject=Contact%20PEC%20ACM%20Student%20Chapter"
        target="_blank"
        rel="noopener noreferrer"
        className="button mail"
        style={{ justifyContent: "center" }}
      >
        <Icon.Mail />
        <span>Contact us</span>
      </a>
    </footer>
  );
}

export default React.memo(Footer);
