import scss from "./FooterCredits.module.scss";

export default function FooterCredits() {
  return (
    <div>
      <p className={scss.credits}>design by Love by Artneo</p>
      <p className={scss.copyright}>
        Copyright © La Mia Casa All rights reserved
      </p>
    </div>
  );
}
