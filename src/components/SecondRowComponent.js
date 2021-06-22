import React from "react";
import ResizePanel from "react-resize-panel";
import style from '../App.css';
import classNames from 'classnames/bind';
import Component3 from "./Component3";
let cx = classNames.bind(style);

export default class FirstRowComponent extends React.Component {
  
  render() {
    return (
        <ResizePanel direction="n" style={{height: '200px', flexGrow: '10'}}>
              <Component3/>
        </ResizePanel>
    );
  }
}