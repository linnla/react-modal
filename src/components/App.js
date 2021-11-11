import close_eyes from './close-your-eyes-close.gif';
import globe from './Rotating_earth_(large).gif';
import React from 'react';

function App() {
  return (
    <div class='ui active modal'>
      <div class='header'>Header</div>
      <div class='image content'>
        <iframe
          src='https://www.youtube.com/embed/eGRRvv0YOXk?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1'
          width='560'
          height='315'
          frameborder='0'
          allowfullscreen
        ></iframe>
        <img
          class='image'
          src={close_eyes}
          alt='Italian Trulli'
          width='200'
        ></img>
        <div class='description'>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default App;
