[![Build Status](https://travis-ci.org/hnsylitao/react-dplayer.svg?branch=master)](https://travis-ci.org/hnsylitao/react-dplayer)
[![Version](https://img.shields.io/npm/v/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![NPM](https://img.shields.io/npm/dt/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/hnsylitao/react-dplayer/blob/master/LICENSE)

# react-dplayer[Live Demo](http://dplayer.89io.com/)

**React component for Dplayer** based on [DPlayer](https://github.com/DIYgod/DPlayer).

## Install

```bash
npm install react-dplayer -save
```

## Usage

```js
import Dplayer from "react-dplayer";

class Example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dplayer />
        )
    }
}
```

The package also includes an in-built example under the `/example` folder. Run the sample application by cloning project and running npm start.

## [Dplayer Doc](http://dplayer.js.org/docs/)

## Props


| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| autoplay | Boolean | false | autoplay video, not supported by mobile browsers |
| theme | String | #FADFA3 | theme color |
| loop | Boolean | true | loop play video |
| lang | String | zh | `zh` for Chinese, `en` for English |
| screenshot | Boolean | false | enable screenshot function |
| hotkey | Boolean | true | binding hot key, including left right and Space |
| preload | String | 'auto' | the way to load video, can be 'none' 'metadata' or 'auto' |
| logo | String | DPlayer default | player logo, showing in top left corner |
| volume | Number | 0.7 | player volume |
| contextmenu | Array | DPlayer default | custom contextmenu |
| video| Object | DPlayer default  | video.url -> video link video.pic -> video poster video.type -> video type video.quality -> video quality video.defaultQuality -> video defaultQuality|
| danmaku| Object | DPlayer default  | video danmaku |

## Events

| Name | Params | Description |
| ---- | ------ | ----------- |
| onPlay | none | Triggered when DPlayer start play |
| onPause | none | Triggered when DPlayer paused |
| onCanplay | none | Triggered when enough data is available that DPlayer can play |
| onPlaying | none | Triggered periodically when DPlayer is playing |
| onEnded | none | Triggered when DPlayer ended playing |
| onError | none | Triggered when an error occurs |

## Development

- `npm run start`: Run example in development mode
- `npm run compile`: Build react-dplayer

## License

`react-dplayer` is released under the `MIT license`.
