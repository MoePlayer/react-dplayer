import 'dplayer/dist/DPlayer.min.css';
import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DPlayer from 'dplayer';

const eventNames = [
  'abort', 'canplay', 'canplaythrough',
  'durationchange', 'emptied', 'ended',
  'error', 'loadeddata', 'loadedmetadata',
  'loadstart', 'mozaudioavailable', 'pause',
  'play', 'playing', 'progress',
  'ratechange', 'seeked', 'seeking',
  'stalled', 'suspend', 'timeupdate',
  'volumechange', 'waiting',
];
const capitalize = function (str) {
  return `${str.charAt(0).toUpperCase()}${str.substring(1)}`;
};

class DPlayerComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    //find otherProps
    let {onLoad, ...otherProps} = this.props;
    //new empty componentEvents
    const componentEvents = [];
    //remove otherProps event saveTo componentEvents
    eventNames.forEach(eventName => {
      let funcName = 'on' + capitalize(eventName);
      let event = otherProps[funcName];
      if (event) {
        delete otherProps[funcName]
        componentEvents.push({eventName, event})
      }
    });
    //new player
    console.log(otherProps)
    const player = this.dp = new DPlayer({
      ...otherProps,
      element: this.ele
    });
    //run load
    onLoad && onLoad(player);
    //bind player events
    componentEvents.forEach(eventObject => {
      const {eventName, event} = eventObject;
      player.on(eventName, event)
    })
  }

  componentWillUnmount() {
    //remove dplayer
    this.dp.destroy();
  }

  render() {
    const {className, style, id} = this.props;
    const wrapperClassName = classNames({
      [`dplayer`]: true,
      [`${className}`]: !!className,
    });
    return <div ref={ref => this.ele = ref}
                id={id}
                style={style}
                className={wrapperClassName}/>;
  }
}

DPlayerComponent.defaultProps = {
  lang: 'zh-cn',
  contextmenu: [
    {
      text: 'Author',
      link: 'http://89io.com'
    },
    {
      text: 'GitHub',
      link: 'https://github.com/MoePlayer/react-dplayer'
    }
  ],
};
DPlayerComponent.propTypes = {
  lang: PropTypes.string,
  video: PropTypes.shape({
    url: PropTypes.string,
    pic: PropTypes.string,
    type: PropTypes.string,
    quality: PropTypes.array,
    defaultQuality: PropTypes.number,
  }).isRequired
};

export default DPlayerComponent;