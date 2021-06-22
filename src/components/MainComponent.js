import React from "react";
//import ResizePanel from "react-resize-panel";
import ResizePanel from "react-resize-panel";
import style from '../App.css';
import classNames from 'classnames/bind';
import FirstRowComponent from "./FirstRowComponent";
import SecondRowComponent from "./SecondRowComponent";
let cx = classNames.bind(style);

export default class MainComponent extends React.Component {
  
  render() {
    return (
      <div className={cx('container')}>
          <ResizePanel direction="s">
            <div className={cx('panel')}>
            </div>
          </ResizePanel>
          <FirstRowComponent/>
          <SecondRowComponent/>   
  </div>
    );
  }
}