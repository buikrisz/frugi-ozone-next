import { useCallback } from "react";
import { LandingFormAutocomplete } from "@/types/Global.types";
import landingFormStyles from "@/styles/globalStyles/LandingForm.module.css";

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
  const onClick = useCallback(
    (autoCompleteValue: string) => {
      setFormValue({
        ...formValue,
        [formInput]: autoCompleteValue,
      });
      setClicked(true);
    },
    [formInput, formValue, setClicked, setFormValue]
  );

  return (
    <div className={landingFormStyles.landingFormAutocomplete}>
      {formInput !== "privacyPolicy" &&
        formValue[formInput].length >= minLength &&
        !clicked &&
        focus &&
        autoCompleteValues?.map((autoCompleteValue, index) => {
          if (autoCompleteValue.toLowerCase().includes(formValue[formInput].toLowerCase())) {
            return (
              <h6 key={index} className={landingFormStyles.autocompleteListItem} onClick={() => onClick(autoCompleteValue)}>
                {autoCompleteValue}
              </h6>
            );
          }
        })}
    </div>
  );
};

export default LandingFormAutocomplete;
