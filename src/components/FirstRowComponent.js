import React from "react";
import ResizePanel from "react-resize-panel";
import style from '../App.css';
import classNames from 'classnames/bind';
import Component1 from "./Component1";
import Component2 from "./Component2";
let cx = classNames.bind(style);

export default class FirstRowComponent extends React.Component {
  
  render() {
    return (
        <div className={cx('body')}>
            <ResizePanel direction="e" style={{ flexGrow: '1' }} >
              <Component1/>
            </ResizePanel>
            <Component2/>
          </div>
    );
  }
}