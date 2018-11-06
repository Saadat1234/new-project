import React from 'react';
import WeatherIcon from 'react-icons-weather';


const weather = (props) => (
  <div className="container mt-5" style={{background:'rgba(0,0,0,0.4)',padding:''}}>
  { props.city && props.country && <p><strong>Location: </strong>{ props.city },{ props.country }</p>}
  { props.temperature && <p><strong>Temperature:</strong> { props.temperature }</p>}
  { props.humidity && <p><strong>Humidity:</strong> { props.humidity }</p>}
  { props.description && <p><strong>Description:</strong> { props.description }</p>}
  { props.error && <p className="text-warning">{ props.error} </p>}
  { props.iconId && <p className="icon"><WeatherIcon name='owm' iconId={ props.iconId } /></p> }
  </div>
);

export default weather
