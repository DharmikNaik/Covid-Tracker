import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";

const CountryPicker = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    console.log(countries);

    fetchAPI();
  }, [setCountries]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value="global" key="global">
          Global
        </option>
        {countries.map(({ name }, i) => (
          <option value={name} key={i}>
            {name}
          </option>
        ))}
        ;
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
