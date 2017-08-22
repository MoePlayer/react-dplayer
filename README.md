[![Build Status](https://travis-ci.org/MoePlayer/react-dplayer.svg?branch=master)](https://travis-ci.org/MoePlayer/react-dplayer)[![Version](https://img.shields.io/npm/v/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![NPM](https://img.shields.io/npm/dt/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/hnsylitao/react-dplayer/blob/master/LICENSE)

# react-dplayer[Live Demo](http://dplayer.89io.com/)

**React component for Dplayer** based on [DPlayer](https://github.com/DIYgod/DPlayer).

## Install

```bash
npm install react-dplayer -save
```

## Usage

### commonjs
```js
import Dplayer from "react-dplayer";

class Example extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DPlayer video={{
                    url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                   }}/>
        )
    }
}
```

### browser
```html
<link rel="stylesheet" href="https://unpkg.com/dplayer@1.6.0/dist/DPlayer.min.css">
<script src="https://unpkg.com/dplayer@1.6.0/dist/DPlayer.min.js" />
<script src="https://unpkg.com/react@15.6.1/dist/react.min.js" />
<script src="https://unpkg.com/react-dplayer@0.0.2/dist/react-dplayer.min.js" />
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
- `npm run compile`: Build react-dplayer（commonjs）
- `npm run dist`: dist react-dplayer (umd)

## License

`react-dplayer` is released under the `MIT license`.
