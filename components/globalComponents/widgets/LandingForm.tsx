import React, { useState, useEffect } from "react";
import apiKey from "@/emailkey";
import emailjs from "@emailjs/browser";
import cities from "@/data/hu.json";
import LandingFormAutocomplete from "./LandingFormAutocomplete";
import landingFormStyles from "@/styles/globalStyles/LandingForm.module.css";
import { LandingFormValue } from "@/types/Global.types";

const LandingForm = () => {
  const [formValue, setFormValue] = useState<LandingFormValue>({
    name: "",
    phone: "",
    service: "",
    location: "",
    district: "",
    privacyPolicy: false,
  });

  const [locationFocus, setLocationFocus] = useState(false);
  const [serviceFocus, setServiceFocus] = useState(false);

  const [locationClicked, setLocationClicked] = useState(false);
  const [serviceClicked, setServiceClicked] = useState(false);

  const cityNames = cities.map((city) => city.city);
  const services = ["Kártevőirtás", "Fertőtlenítés", "Egyéb"];
  /* const [districtClicked, setDistrictClicked] = useState(false);
    const districts = ["I.","II.","III.","IV.","V.","VI.","VII.","VIII.","IX.","X.","XI.","XII.","XIII.","XIV.","XV.","XVI.","XVII.","XVIII.","XIX.","XX.","XXI.","XXII.","XXIII."]; */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormValue({
      ...formValue,
      [name]: type === "checkbox" ? checked : value,
    });
    name === "location" && setLocationClicked(false);
    name === "service" && setServiceClicked(false);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const { name } = e.target;
    if (name === "service") {
      setServiceFocus(true);
      setLocationFocus(false);
    } else if (name === "location") {
      setServiceFocus(false);
      setLocationFocus(true);
    } else {
      setServiceFocus(false);
      setLocationFocus(false);
    }
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      setAnimationStarted(true);
      console.log(formValue.district);
      emailjs
        .send(
          apiKey.SERVICE_ID,
          apiKey.CALLBACK_TEMPLATE_ID,
          {
            from_name: formValue.name,
            from_phone: formValue.phone,
            from_service: formValue.service,
            from_location: formValue.location,
            from_district: formValue.district,
          },
          apiKey.PUBLIC_KEY
        )
        .then(() => {
          console.log("Email sent");
          setMailSent(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [formSubmitted, formValue.district, formValue.location, formValue.name, formValue.phone, formValue.service]);

  return !mailSent && !animationStarted ? (
    <form
      className={landingFormStyles.landingForm}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        setFormSubmitted(true);
      }}
    >
      <h2>Kérjen visszahívást:</h2>
      <input type="text" name="name" id="name" placeholder="Név" value={formValue.name} onChange={handleChange} onFocus={handleFocus} required />
      <input type="text" name="phone" id="phone" placeholder="Telefonszám" value={formValue.phone} onChange={handleChange} onFocus={handleFocus} required />
      <div className={landingFormStyles.serviceDiv}>
        <input
          type="text"
          name="service"
          id="service"
          placeholder="Melyik szolgáltatás érdekli?"
          value={formValue.service}
          onChange={handleChange}
          onFocus={handleFocus}
          required
        />
        <LandingFormAutocomplete
          formValue={formValue}
          formInput="service"
          setFormValue={setFormValue}
          autoCompleteValues={services}
          clicked={serviceClicked}
          setClicked={setServiceClicked}
          minLength={0}
          focus={serviceFocus}
        />
      </div>
      <div className={landingFormStyles.locationDiv}>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Melyik város / kerület?"
          value={formValue.location}
          onChange={handleChange}
          onFocus={handleFocus}
          required
        />
        {formValue.location.toLowerCase() === "budapest" && (
          <input type="text" name="district" id="district" placeholder="Kerület" value={formValue.district} onChange={handleChange} onFocus={handleFocus} />
        )}
        {locationFocus && (
          <LandingFormAutocomplete
            formValue={formValue}
            formInput="location"
            setFormValue={setFormValue}
            autoCompleteValues={cityNames}
            clicked={locationClicked}
            setClicked={setLocationClicked}
            minLength={3}
            focus={locationFocus}
          />
        )}
      </div>
      <div className={landingFormStyles.landingFormCheckbox}>
        <input type="checkbox" name="privacyPolicy" id="privacyPolicy" checked={formValue.privacyPolicy} onChange={handleChange} required />
        <label htmlFor="privacyPolicy">
          Elfogadom az{" "}
          <a href="/adatvedelmi" target="_blank" className={landingFormStyles.linkToPrivacyPolicy}>
            adatvédelmi nyilatkozatot
          </a>
          .
        </label>
      </div>
      <div className={landingFormStyles.landingFormButtons}>
        <button className={landingFormStyles.callMe}>Visszahívást kérek!</button>
        <a href="tel:+3670-338-4734" className={landingFormStyles.makeCall}>
          Felhívom!
        </a>
      </div>
    </form>
  ) : !mailSent && animationStarted ? (
    <form className={landingFormStyles.landingForm}>
      <svg className={landingFormStyles.loader} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <circle className="internal-circle" cx="60" cy="60" r="30"></circle>
        <circle className="external-circle" cx="60" cy="60" r="50"></circle>
      </svg>
    </form>
  ) : (
    <form className={landingFormStyles.landingForm}>
      <h2>
        Köszönjük! <br />
        <br /> Munkatársunk 24 órán belül jelentkezni fog Önnél!
      </h2>
    </form>
  );
};

export default LandingForm;
