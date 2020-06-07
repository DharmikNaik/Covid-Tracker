import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchCountryDetails } from "./api";
import imgCovidTracker from "./images/covid_tracker.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={imgCovidTracker} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker onSelect={this.handleCountryChange} />
        <Chart country={country} data={data} />
      </div>
    );
  }
}

export default App;
