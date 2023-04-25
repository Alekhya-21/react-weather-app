import React, { useState } from "react";
import ReactLogo from "./boy_image.png";

const App = () => {
  const [city, setCity] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const kelvin = data.main.temp;
        const celcius = kelvin - 273.15;
        setResult1(Math.round(celcius) + " ° Celsius");
        setResult2(city);
        setCity("");
      });
  };
  return (
    <header>
      <div className="container">
        <div className="header-container-1">
          <div className="header-container-inner-1">
            <div className="main-title">
              <center>
                <h3 className="weatherheading">The Weather App</h3>
                {!city ? (
                  <>
                    <h1>{result1}</h1>
                    <p>{result2}</p>
                  </>
                ) : (
                  <p className="error">Enter valid city</p>
                )}
              </center>
            </div>
          </div>
        </div>
        <img
          class="weatherimage"
          src={ReactLogo}
          height={500}
          width={600}
          alt="weather forecasting image"
        />
        <div className="header-container-2">
          <div className="header-container-inner-2">
            <form onSubmit={submitHandler}>
              <input
                className="enter"
                type="text"
                size="43"
                placeholder="Enter city"
                naem="city"
                onChange={changeHandler}
                value={city}
              />
              <input type="submit" className="getweather" value="Get Weather" />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default App;
