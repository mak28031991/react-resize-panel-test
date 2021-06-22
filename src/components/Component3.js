import React from "react";
import ResizePanel from "react-resize-panel";
import style from '../App.css';
import classNames from 'classnames/bind';
let cx = classNames.bind(style);

export default class Component2 extends React.Component {
  
  render() {
    return (
        <div className={cx('footer', 'panel')}>
            <div className={cx('footerArea')}>
                <div className={cx('footerAreaContent')}>
                <h3>Component 3</h3>
                </div>
            </div>
        </div>
    );
  }
}