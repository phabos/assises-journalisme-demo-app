import { TweenMax } from 'gsap';
import { WindowInfos } from './WindowInfos';

const openResult = () => {
  if(WindowInfos()) {
    TweenMax.fromTo('.search-container', 0.5, {css: {top: "0", bottom: "0"}}, {css:{top:"-10%", bottom: "0"}} );
    TweenMax.fromTo('.result-container', 0.5, {css: {top: "100%", bottom: "0", right: "0", left: "0"}}, {css:{top:"0", bottom: "0", right: "0", left: "0"} });
  }else{
    TweenMax.fromTo('.search-container', 0.5, {css: {top: "0", bottom: "0", right: "0", left:"0"}}, {css:{top: "0", bottom: "0", right: "70%", left:"-10%", transformPerspective:500, rotationY:20, opacity:0.5}} );
    TweenMax.fromTo('.result-container', 0.5, {css: {top: "0", bottom: "0", left: "100%"}}, {css:{top:"0", bottom: "0", left: "30%"} });
  }
}

const closeResult = () => {
  if(WindowInfos()) {
    TweenMax.fromTo('.result-container', 0.5, {css: {top: "0", bottom: "0"}}, {css:{top:"100%", bottom: "0"}} );
    TweenMax.fromTo('.search-container', 0.5, {css: {top: "-10%", bottom: "0"}}, {css:{top:"0", bottom: "0"}} );
  }else{
    TweenMax.fromTo('.search-container', 0.5, {css: {top: "0", bottom: "0", right: "70%", left: "-10%", transformPerspective:500, rotationY:20, opacity:0.5}}, {css:{top: "0", bottom: "0", right: "0", left: "0", transformPerspective:500, rotationY:0, opacity:1}} );
    TweenMax.fromTo('.result-container', 0.5, {css: {top: "0", bottom: "0", left: "30%"}}, {css:{top:"0", bottom: "0", left: "100%"} });
  }
}

const animateLogo = () => {
  TweenMax.fromTo('.logo .map', 0.5, {css: {left: "50"}}, {css:{left: "0"}} ).delay(0.5);
}

export { closeResult, openResult, animateLogo }
