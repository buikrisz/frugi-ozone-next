import { BsInstagram, BsFacebook } from "react-icons/bs";
import footerStyles from "@/styles/LayoutStyles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Link href="https://www.facebook.com/FrugiOzone" target="_blank" rel="noopener noreferrer nofollow">
        <BsFacebook className={footerStyles.footerIcon} />
      </Link>
      <Link href="https://www.instagram.com/frugiozone/" target="_blank" rel="noopener noreferrer nofollow">
        <BsInstagram className={footerStyles.footerIcon} />
      </Link>
      <h4>|</h4>
      <div className={footerStyles.footerLinks}>
        <Link href="/dokumentumok">Ikon gyűjtemény</Link>
        {/* <a href='/dokumentumok#biztonsagi'>Biztonsági adatlapok</a> */}
        <Link href="/adatvedelmi">Adatvédelmi nyilatkozat</Link>
      </div>
    </footer>
  );
};

export default Footer;
