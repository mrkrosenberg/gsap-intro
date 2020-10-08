import React, { useRef, useEffect, useState } from 'react';
import './App.css';

// GSAP Library
import { TweenMax, Power3 } from 'gsap';
import userEvent from '@testing-library/user-event';
import { Tween } from 'gsap/gsap-core';

function App() {

  let app = useRef(null);
  let circleBox = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [ state, setState ] = useState(false);

  const updateState = () => {

    setState(!state);
  };

  useEffect(() => {

    TweenMax.to(app, 0, {css: {visibility: 'visible'}})
    // TweenMax.from(circle, .8, {opacity: 0, x: 60, ease: Power3.easeOut});
    // TweenMax.from(circleRed, .8, {opacity: 0, x: 60, ease: Power3.easeOut, delay: .2});
    // TweenMax.from(circleBlue, .8, {opacity: 0, x: 60, ease: Power3.easeOut, delay: .3});
    TweenMax.staggerFrom([circle, circleRed, circleBlue], 1.2, {opacity: 0, x: 60, ease: Power3.easeOut}, .2)
  }, []);

  const handleExpand = () => {

    updateState();
    if (!state) {
      TweenMax.to(circleRed, .8, {width: 200, height: 200, ease: Power3.easeOut});
      TweenMax.to(circleBox, .8, {css: {visibility: 'visible'}})
      console.log(state);
      return;
    }
    TweenMax.to(circleRed, .8, {width: 75, height: 75, ease: Power3.easeOut});
    TweenMax.to(circleBox, .8, {css: {visibility: 'hidden'}})
    console.log(state);
  };

  return (
    <div 
      ref={el => app = el}
      className="App"
    >
      <div className="App-header">
        <div className="circle-container">
          <div
            ref={el => circle = el} 
            className="circle"></div>
          <div 
            ref={el => circleBox = el}
            className="circle-box"
          >
          </div>
          <div
              ref={el => circleRed = el} 
              className="circle red"
              onClick={handleExpand}  
            ></div>
          <div
            ref={el => circleBlue = el} 
            className="circle blue"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
