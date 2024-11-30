import FooterCredits from "../../components/FooterCredits";
import FooterInfo from "../../components/FooterInfo";
import FooterLogo from "../../components/FooterLogo";
import FooterNav from "../../components/FooterNav";
import ItalianSideLabel from "../../components/ItalianSideLabel";
import scss from "./Footer.module.scss";

interface FooterProps {
  sideLabel?: boolean;
}

export default function Footer({ sideLabel = true }: FooterProps) {
  return (
    <footer className={`uk-position-relative ${scss.footer}`}>
      {sideLabel && (
        <ItalianSideLabel
          labelColor="#7a7a7a"
          middleChildColor="#d3d3d3"
          style={{ position: "absolute", top: 30, left: 26 }}
        />
      )}
      <div className={scss.bg}>
        <div className={`uk-container uk-container-large ${scss.wrapper}`}>
          <FooterLogo />
          <FooterNav />
          <FooterInfo />
          <FooterCredits />
        </div>
      </div>
    </footer>
  );
}
