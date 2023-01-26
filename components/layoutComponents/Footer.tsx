import { BsInstagram, BsFacebook } from "react-icons/bs";
import footerStyles from "@/styles/LayoutStyles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a href="https://www.facebook.com/FrugiOzone" target="_blank" rel="noopener noreferrer nofollow">
        <BsFacebook className={footerStyles.footerIcon} />
      </a>
      <a href="https://www.instagram.com/frugiozone/" target="_blank" rel="noopener noreferrer nofollow">
        <BsInstagram className={footerStyles.footerIcon} />
      </a>
      <h4>|</h4>
      <div className={footerStyles.footerLinks}>
        <Link href="/dokumentumok">Ikon gyűjtemény</Link>
        {/* <a href='/dokumentumok#biztonsagi'>Biztonsági adatlapok</a> */}
        <a href="/adatvedelmi">Adatvédelmi nyilatkozat</a> {/* TODO link? */}
      </div>
    </footer>
  );
};

export default Footer;
