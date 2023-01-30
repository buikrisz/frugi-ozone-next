import { useCallback, useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import servicesStyles from "@/styles/allServicesStyles/Services.module.css";

const Szolgaltatasok = () => {
  const [open, setOpen] = useState<boolean>();

  const menuOnClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const contentOnClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={servicesStyles.root}>
      <nav className={`${servicesStyles.nav}${open ? ` ${servicesStyles.open}` : ""}`}>
        <Link href="/" className={`${servicesStyles.backArrow}${open ? ` ${servicesStyles.open}` : ""}`}>
          <FaHome />
        </Link>
        <button className={`${servicesStyles.menuIcon}${open ? ` ${servicesStyles.open}` : ""}`}>
          <FiMenu onClick={menuOnClick} />
        </button>
        <div className={`${servicesStyles.menuItems}${open ? ` ${servicesStyles.open}` : ""}`}>
          <section className={servicesStyles.insect_section}>
            <h4>Kártevőirtás</h4>
            <a href="#agyi_poloska">Ágyi poloska</a>
            <a href="#csotany">Csótány</a>
            <a href="#ragcsalok">Rágcsálók</a>
            <a href="#darazs">Darázs</a>
            <a href="#hangya">Hangya</a>
            <a href="#moly">Moly</a>
          </section>
          <section className={servicesStyles.cleaning_section}>
            <h4>Fertőtlenítés</h4>
            <a href="#ozon">Ózonos</a>
            <a href="#vegyszer">Vegyszeres</a>
          </section>
        </div>
      </nav>
      <div className={servicesStyles.content} onClick={contentOnClick}>
        <section id="agyi_poloska">
          <h2 className={servicesStyles.content_title}>Ágyi poloska irtás</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              Az ágyi poloska kizárólag vérrel táplálkozik, ezért téves az a közhiedelem, hogy takarítatlan helyen jelenik meg. Rozsdabarna színű 4-8 mm hosszú,
              szipókás rovar. Az ivarérett nőstény ágyi poloska naponta 2-3 petét rak, melyből 10-14 nap alatt kelnek ki a lárvák. Az ágyi poloska rejtőzködő
              életmódjának köszönhetően nappal (világosban) nehezen hozzáférhető helyeken ablak-, ajtókeretek, konnektorok, kapcsolók, karnisok, csillárok
              alatt, ülő-, fekvőbútorok környékén (résekben, repedésekben, drapéria-, ágybetét varrásaiban) húzzák meg magukat. Az ágyi poloskák előfordulhatnak
              könyvek és ruhák között is.
            </h4>
            <h4>
              Amikor a tápcsatornájuk kiürült, éjjel sötétben kelnek útra a kártevők, az embereket az általuk kibocsátott hő és párakülönbségről találják meg.
              Kisebb fertőzöttségnél lehet házilagos megoldásokkal próbálkozni, azonban ez nem szokott tartós eredményt hozni. A lakossági felhasználásra
              árusított szereknél a kártevőirtó szakemberek által használt professzionális irtószerek nagyobb hatóanyag tartalommal bírnak és különböző
              technológiával juttathatók ki. Így a permetezésen kívül hidegköd képzéssel vagy ULV eljárással is hatékonyabban elvégezhetik az ágyi poloska
              irtását. A hidegköd képzés és ULV eljárás nagyon finom porlasztással permetezi be a légteret, így a résekbe repedésekbe is bejut az irtószer vagy
              a kiűzőszer. Ez utóbbinak köszönhetően még nappal is elhagyják búvóhelyeiket az ágyi poloskák és így biztosabban találkoznak az irtószerrel.
            </h4>
            <h4>
              A csótányokhoz hasonlóan az ágyi poloskák ellen pete állapotban hatékonyan nem lehet fellépni, ezért célszerű az első kezelés után 10-14 nappal -
              az újabb ágyi poloska nemzedék kikelése után – kártevőirtást végrehajtani.
            </h4>
          </div>
        </section>
        <section id="csotany">
          <h2 className={servicesStyles.content_title}>Csótányirtás</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              A csótányok az ágyi poloskákhoz hasonlóan rejtőzködő életmódot folytatnak, azonban jobban szeretik a párásabb környezetet. Erősen lapított testű,
              ovális körvonalú rovarok a csótányok. Rágó szájszerveik vannak, mindenevők. A csótány petéiből a lárvák 2-4 hónap alatt kelnek ki, ez függ a
              hőmérséklettől és a páratartalomtól. A német csótány a helységekben bárhol, elsősorban magasabb helyeken fordulhat elő. A konyhai csótány és az
              amerikai csótány inkább padlószinthez közel (csatornákban, bútorok, berendezések alatt) tartózkodnak.
            </h4>
            <h4>
              Irtásukra kártevőirtó szakemberek permetezésen, hidegköd képzésen, illetve ULV eljáráson kívül még csótányirtó gélt (mérgezett csalétek) is
              alkalmazhatnak. Olyan helyen, ahol nem lehet irtószert használni, illetve felmérésre irtószermentes állomást (ragacsoslapot) is használhatunk.
              Ahogy az ágyi poloskáknál is a csótányok esetében is célszerű egy második kezelést is egyeztetni a kártevőirtó szakemberrel a fertőzöttség
              függvényében.
            </h4>
          </div>
        </section>
        <section id="ragcsalok">
          <h2 className={servicesStyles.content_title}>Rágcsáló irtás</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              Hazánkban két patkányfaj fordul elő, a vándorpatkány és a házi patkány. Térségünkben először a házi patkány jelent meg, de mára a vándorpatkány
              kiszorította és csak néha találkozunk vele. A patkányok megtalálhatóak föld alatti járatokban, csatornákban, fa- és téglarakásokban készített
              fészkeikben, talajszinten de házak, épületek padlásain is. Ahol megjelennek ott gyorsan elszaporodhatnak, ugyanis szaporák és három hónapos
              korukra ivaréretté válnak. Különböző betegségek terjesztésén kívül rágásukkal is jelentős kárt okoznak. Megrágják az épület tartószerkezeteit,
              villany-, vízvezetékeit. Alkalmanként nem kis kárt okozva ezzel.
            </h4>
          </div>
        </section>
        <section id="darazs">
          <h2 className={servicesStyles.content_title}>Darázs irtás</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              A darazsak általában az embert nem bántják, kivéve ha veszélyeztetve érzik magukat, kolóniájukat. A darazsak fullánkjukat a méhektől eltérően
              többször is tudják használni, a befecskendezett méreg a kellemetlen csípő érzésen kívül allergiás reakciót is kiválthat. Jellemzően tavasszal
              kezdik meg a fészek építést, de más évszakban is szükség lehet az irtásukra.
            </h4>
          </div>
        </section>
        <section id="hangya">
          <h2 className={servicesStyles.content_title}>Hangyairtás</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              A hangyák is kozmopolita élőlények. Hazánkban is megtalálhatók udvarokon és zárt helyeken, lakásokban, irodákban is. A szapora rovarok bolyokban
              élnek. Bármilyen épületben megtalálják a bejutás lehetőségét és ha kell maguk is képesek bejáratott útvonalat készíteni. Irtásukra a mérgezett
              csalétek gél kihelyezése és a permetezés szokott a leg célravezetőbb lenni.
            </h4>
          </div>
        </section>
        <section id="moly">
          <h2 className={servicesStyles.content_title}>Molyirtás</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              Hazánkban jellemzően az élelmiszer és ruhamoly okoz kellemetlenséget. Az élelmiszer moly a konyhák és éléskamrák ellensége, a ruhamoly pedig
              nevéhez méltóan elsősorban a ruhásszekrényekben garázdálkodik. Irtásuk fontos, mert hamar elszaporodnak és az esti nyugalom megzavarásán kívül
              tönkre tehetik az élelmiszer alapanyagokat (liszt, fűszerek…) vagy éppen szeretett ruhadarabjainkat.
            </h4>
            <h4>
              Ha a szekrénybe teszünk szárított levendulát, dohányt vagy narancshéjat az elriaszthatja a molyokat. A molyokat jellemzően feromonos csapdákkal
              tudjuk megfékezni. Ez azonban egy hosszabb folyamat. Nagyobb fertőzés esetén kellő odafigyeléssel irtószeres irtás is szóba jöhet.
            </h4>
          </div>
        </section>
        <section id="ozon">
          <h2 className={servicesStyles.content_title}>Ózonos fertőtlenítés</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              Az ózon az egyik legerősebb oxidálószer a világon, kb. 3000-szer hatékonyabb a hatása a klórénál. Gáz halmazállapota miatt gyakorlatilag bárhova
              eljut a kezelt területen.
            </h4>
            <h4>
              <b>
                <i>Ez ugyanaz az ózon, mint amiből az ózonpajzs áll a Föld körül?</i>
              </b>
            </h4>
            <h4>
              Pontosan. Az ózon egy rendkívül instabil molekula, míg a sztratoszféra ózonrétegében a beeső ultraibolya sugárzás hatására folyamatosan keletkezik
              és bomlik -így elnyelve a számunkra káros sugárzást- addig alacsonyabb légköri rétegekben már nem található meg. Bizonyos folyamatok, például
              villámlás során is keletkezik ózon. Az ózongenerátorok ózon termelési elve gyakorlatilag azonos a villámlás során keletkezett ózon folyamatával,
              az úgynevezett koronakisülés (más néven csendes kisülés) segítségével hozzák létre a gázt.
            </h4>
          </div>
        </section>
        <section id="vegyszer">
          <h2 className={servicesStyles.content_title}>Vegyszeres fertőtlenítés</h2>
          <div className={servicesStyles.content_details}>
            <h4>
              Vegyszeres fertőtlenítés esetén professzionális virucid, baktericid szereket használunk a környezeti terhelés minimálisra szorításával. A
              fertőtlenítésre kérhet permetezéses vagy/és légtérkezeléses eljárást. A pandémiás helyzetben kiemelt figyelmet fordítunk ügyfeleink egészségére.
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Szolgaltatasok;
