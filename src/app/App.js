/*
Animate through path
var path = MorphSVGPlugin.pathDataToBezier("#motionPath");

TweenMax.to("#XMLID_584_", 5, {bezier:{values:path, type:"cubic", autoRotate: ['x', 'y', 'rotation']}, ease:Linear.easeNone, repeat:-1});
https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js

Exemple http://codepen.io/osublake/pen/XXbLer?editors=0010

tl.to(elements, 1, {rotation:360, transformOrigin:"50% 50%"}, "+=1")
.to(elements, 1, {rotation:360, transformOrigin:"200px 200px"}, "-=1")

 */

import React, { Component } from 'react';
import SearchWrapper from './Search.js';
import Results from './Results.js';
import { Provider } from 'react-redux';
import { applicationApp } from './Store.js';

let store = createStore(applicationApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
