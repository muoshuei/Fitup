import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './HomeFitup.css';
function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">

       
        <ParallaxLayer offset={0} speed={0.2}>
          <div class="animation_layer parallax" id="background"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={0.5}>
          <section>
            <h1 id="text"><b>Fitup</b></h1>
          </section>
        </ParallaxLayer>

        
        <ParallaxLayer offset={0.4} speed={0.2}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>

       
        <ParallaxLayer offset={0.3} speed={0.1}>
          <section className="button-section">
          <Link to="/Signin">
            <button className="custom-button"><b>Start</b></button>
          </Link>
          </section>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
