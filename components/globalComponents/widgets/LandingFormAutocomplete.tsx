import React from "react";
import landingFormStyles from "@/styles/globalStyles/LandingForm.module.css";
import { LandingFormAutocomplete } from "@/types/Global.types";

const LandingFormAutocomplete = ({
  formValue,
  formInput,
  setFormValue,
  autoCompleteValues,
  clicked,
  setClicked,
  minLength,
  focus,
}: LandingFormAutocomplete) => {
  return (
    <div className={landingFormStyles.landingFormAutocomplete}>
      {formInput !== "privacyPolicy" &&
        formValue[formInput].length >= minLength &&
        !clicked &&
        focus &&
        autoCompleteValues.map((autoCompleteValue, index) => {
          if (
            autoCompleteValue
              .toLowerCase()
              .includes(formValue[formInput].toLowerCase())
          ) {
            return (
              <h6
                key={index}
                className={landingFormStyles.autocompleteListItem}
                onClick={() => {
                  setFormValue({
                    ...formValue,
                    [formInput]: autoCompleteValue,
                  });
                  setClicked(true);
                }}
              >
                {autoCompleteValue}
              </h6>
            );
          }
        })}
    </div>
  );
};

export default LandingFormAutocomplete;
