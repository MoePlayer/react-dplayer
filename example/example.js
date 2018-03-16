import React from 'react';
import ReactDOM from 'react-dom';
import reactCreateClass from 'create-react-class';
import DPlayer from "../src";

const Example = reactCreateClass({

  getInitialState() {
    return {
      canplay: false,
      play: false,
      currentTime: 0,
    };
  },

  seek() {
    this.dp.seek(10)
  },

  play() {
    this.dp.play()
  },

  pause() {
    this.dp.pause()
  },

  onLoad(dp) {
    this.dp = dp;
    console.log(dp, dp.video);
  },

  onCanplay() {
    this.setState({
      canplay: true,
    })
  },

  onPlay() {
    this.setState({
      play: true,
    })
  },

  onPause() {
    this.setState({
      play: false,
    })
  },

  onEnded() {
    console.log('end')
  },

  onError() {
    console.log('error')
  },

  onPlaying() {
    this.setState({
      currentTime: this.dp.video.currentTime,
    })
  },

  render() {
    return (
      <div style={{width: 800, margin: '0px auto'}}>
        <DPlayer loop={false}
                 logo={'https://avatars3.githubusercontent.com/u/17537749?v=4&s=460'}
                 video={ {
                   url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                   pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
                 }}
                 screenshot={true}
                 onLoad={this.onLoad}
                 onPlay={this.onPlay}
                 onCanplay={this.onCanplay}
                 onPause={this.onPause}
                 onEnded={this.onEnded}
                 onError={this.onError}
                 onPlaying={this.onPlaying}/>
        <button onClick={this.play}>play</button>
        <button onClick={this.pause}>pause</button>
        <button onClick={this.seek}>seek 10</button>

        <h3>canplay {JSON.stringify(this.state.canplay)}</h3>
        <h3>play {JSON.stringify(this.state.play)}</h3>
        <h3>currentTime {this.state.currentTime}</h3>
      </div>
    );
  }
});

ReactDOM.render(
  <Example/>,
  document.getElementById('example')
);