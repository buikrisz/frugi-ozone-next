import { useRouter } from "next/router";
import { BsBug } from "react-icons/bs";
import Link from "next/link";
import headerStyles from "@/styles/LayoutStyles/Header.module.css";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerTitle}>
        <BsBug className={headerStyles.headerBugIcon} />
        <h4>FrugiOzone Kártevőirtás</h4>
      </div>
      <div>
        <Link href="/" className={pathname === "/" ? `${headerStyles.headerLinkSelected} ${headerStyles.headerLinks}` : headerStyles.headerLinks}>
          <h4>Rovarirtás</h4>
        </Link>
        <span>|</span>
        <Link href="/ozone" className={pathname === "/ozone" ? `${headerStyles.headerLinkSelected} ${headerStyles.headerLinks}` : headerStyles.headerLinks}>
          <h4>Ózonos fertőtlenítés</h4>
        </Link>
      </div>
      <nav>
        <ul>
          <a href="#kezdolap">
            <li>Kezdőlap</li>
          </a>
          <a href="#rolunk">
            <li>Rólunk</li>
          </a>
          <a href="#szolgaltatasok">
            <li>Szolgáltatások</li>
          </a>
          <a href="#kapcsolat">
            <li>Kapcsolat</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
