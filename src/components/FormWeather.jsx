import React from 'react';


const FormWeather = props => (
  <div className="container">
  <form className="text-center row" onSubmit={props.getWeather}>
    <h2>Find the weather by Cities</h2>
    <input className="form-control col-sm-6 mr-2" type="text" name="city" placeholder="City.."/>
    {/* <input className="form-con className="text-center row ml-5 fixed-bottom mb-5 "trol mb-5"type="text" name="country" placeholder="Country..."/> */}

    <button className="btn btn-success ">Search Weather</button>
  </form>
  </div>
)
export default FormWeather
