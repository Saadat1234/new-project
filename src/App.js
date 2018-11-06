import React from 'react';
import "./css/main.css";


import Header from './components/Header.jsx';
import FormWeather from './components/FormWeather.jsx';
import Weather from './components/Weather.jsx';


const API_KEY = 'f3568fd7f3526cc54273759c29ff5bf1';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
    console.log(data);
    if (data.cod === 200) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        iconId: data.weather[0].id,
        error: null
      });
    } else {
      this.setState({
        error: 'please enter you value'
      });
    }
  }

  render() {
    return (
      <div>
       <div className="wrapper">
        <div className="main">
         <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
                      <Header />
                    </div>

                <div className="col-xs-7 form-container">
                  <FormWeather getWeather={this.getWeather} />

                  {
                    this.state.error ||
                    <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    iconId={this.state.iconId}
               />}

         </div>
       </div>
     </div>
    </div>
   </div>
 </div>
    );
  }
}

























export default App
