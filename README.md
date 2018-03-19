[![Build Status](https://travis-ci.org/MoePlayer/react-dplayer.svg?branch=master)](https://travis-ci.org/MoePlayer/react-dplayer)
[![Version](https://img.shields.io/npm/v/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![NPM](https://img.shields.io/npm/dt/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/hnsylitao/react-dplayer/blob/master/LICENSE)

# react-dplayer [demo](http://dplayer.89io.com/)

**React component for Dplayer** based on [DPlayer(V1.22.2)](https://github.com/DIYgod/DPlayer).

## Install

```bash
npm install react-dplayer -D
```

## Usage

### commonjs
```js
import Dplayer from "react-dplayer";

class Example extends Component {
    render() {
        return (
            <DPlayer video={{url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'}}/>
        )
    }
}
```

### browser
```html
<link rel="stylesheet" href="https://unpkg.com/dplayer/dist/DPlayer.min.css">
<script src="https://unpkg.com/dplayer/dist/DPlayer.min.js" />
<script src="https://unpkg.com/react@15.6.1/dist/react.min.js" />
<script src="https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js" />
<script src="https://unpkg.com/react-dplayer/dist/react-dplayer.min.js" />
<div id="example"></div>
<script >
	ReactDOM.render(React.createElement(
	  'div',
	  { style: { width: 800, margin: '0px auto' } },
	  React.createElement(ReactDPlayer, {video: {url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'} })
	), document.getElementById('example'));
</script>
```

The package also includes an in-built example under the `/example` folder. Run the sample application by cloning project and running npm start.

## [Dplayer Doc](http://dplayer.js.org/docs/)

## Props


| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| allProps | Object | -- | [read doc](http://dplayer.js.org/#/zh-Hans/?id=%E5%8F%82%E6%95%B0) |

## Events

| Name | Params | Description |
| ---- | ------ | ----------- |
| allEvent | default | [read doc](http://dplayer.js.org/#/zh-Hans/?id=%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A)  |

## Development

- `npm run start`: Run example in development mode
- `npm run compile`: Build react-dplayer（commonjs）
- `npm run dist`: dist react-dplayer (umd)

## License

`react-dplayer` is released under the `MIT license`.
