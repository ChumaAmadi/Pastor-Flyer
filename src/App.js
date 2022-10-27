import './App.css';
import React from 'react';
import pastor from './pastor.jpg';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Christian Assembly</h1>
      <h3 className="App-subheader">465 Summer St, Lynn Ma, 01905</h3>
      <h3 className="App-subheader2">(857) 417-9558</h3>
      <h2 className="App-subheader3">WEEKEND WITH GOD: (FRIDAY - OCT.28TH) TO (SUNDAY - OCT.30TH)</h2>
      <img className="pastor" src={pastor} alt="Service" />
      <div className="date-flexbox">
        <div className="flyer-description">
          <h3 className='friday'>Friday</h3>
          <p className='date-text'>October 28th</p>
          <p className='time-text'>6:00pm - 8:00am</p>
        </div>
        <div className="flyer-description1">
          <h3 className='saturday'>Saturday</h3>
          <p className='date-text1'>October 29th</p>
          <p className='time-text1'>11:00am - 3:00pm</p>
        </div>
        <div className="flyer-description2">
          <h3 className='sunday'>Sunday</h3>
          <p className='date-text2'>October 30th</p>
          <p className='time-text2'>11:00am - 1:00pm</p>
        </div>
      </div>
      <h3 className='footer'>Come & Experience The Anointing Of The Holy Spirit</h3>
    </div>
  );
}

export default App;
