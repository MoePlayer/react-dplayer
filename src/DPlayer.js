import 'dplayer/dist/DPlayer.min.css';
import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DPlayer from 'dplayer';

class DPlayerComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const {
      autoplay, theme, loop, lang, screenshot, hotkey, preload, contextmenu, logo, volume, video, danmaku,//Props
      onPlay, onPause, onCanplay, onPlaying, onEnded, onError, onLoad,//Events
    } = this.props;
    const player = this.dp = new DPlayer({
      element: this.ele,
      autoplay: autoplay,
      theme: theme,
      loop: loop,
      lang: lang,
      screenshot: screenshot,
      hotkey: hotkey,
      preload: preload,
      contextmenu: contextmenu,
      logo: logo,
      volume: volume,
      video: video,
      danmaku: danmaku,
    });

    //load
    onLoad && onLoad(player);

    player.on('play', () => {
      onPlay && onPlay();
    })
    player.on('pause', () => {
      onPause && onPause();
    })
    player.on('canplay', () => {
      onCanplay && onCanplay();
    })
    player.on('playing', () => {
      onPlaying && onPlaying();
    })
    player.on('ended', () => {
      onEnded && onEnded();
    })
    player.on('error', () => {
      onError && onError();
    })
  }

  render() {
    const {
      autoplay, theme, loop, lang, screenshot, hotkey, preload, contextmenu, logo, volume, video, danmaku,//Props
      onPlay, onPause, onCanplay, onPlaying, onEnded, onError, onLoad,//Events
      ...resetProps,
    } = this.props;
    const {className, ...extraProps} = resetProps;
    const wrapperClassName = classNames({
      [`dplayer`]: true,
      [`${className}`]: !!className,
    });
    return <div ref={ref => this.ele = ref}
                className={wrapperClassName}
                {...extraProps}/>;
  }

}

DPlayerComponent.defaultProps = {
  autoplay: false,
  theme: '#FADFA3',
  loop: true,
  lang: 'zh',
  screenshot: false,
  hotkey: true,
  preload: 'auto',
  volume: 0.7,
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
  autoplay: PropTypes.bool,
  theme: PropTypes.string,
  loop: PropTypes.bool,
  lang: PropTypes.string,
  screenshot: PropTypes.bool,
  hotkey: PropTypes.bool,
  preload: PropTypes.string,
  logo: PropTypes.string,
  volume: PropTypes.number,
  contextmenu: PropTypes.array,
  video: PropTypes.shape({
    url: PropTypes.string,
    pic: PropTypes.string,
    type: PropTypes.string,
    quality: PropTypes.array,
    defaultQuality: PropTypes.number,
  }).isRequired,
  danmaku: PropTypes.shape({
    id: PropTypes.string.isRequired,
    api: PropTypes.string,
    token: PropTypes.string,
    maximum: PropTypes.number,
    addition: PropTypes.array,
    user: PropTypes.string,
  }),
};

export default  DPlayerComponent;