import React from "react";
import ResizePanel from "react-resize-panel";
import style from '../App.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

export default class Component2 extends React.Component {
  
  render() {
    return (
        <div className={cx('content', 'panel')}>
              <h3>Component 2</h3><br/>
              <div className="html-content-box">HTML Content 2</div>
        </div>
    );
  }
}