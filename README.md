[![Build Status](https://travis-ci.org/MoePlayer/react-dplayer.svg?branch=master)](https://travis-ci.org/MoePlayer/react-dplayer)
[![Version](https://img.shields.io/npm/v/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![NPM](https://img.shields.io/npm/dt/react-dplayer.svg?style=flat)](https://www.npmjs.com/package/react-dplayer)
[![LICENSE](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/hnsylitao/react-dplayer/blob/master/LICENSE)

# react-dplayer [demo](https://codesandbox.io/s/react-dplayer-demo-i61n5) [next demo](https://codesandbox.io/s/next-react-dplayer-7frjk)

# Gitpod

Open the project in Gitpod (free online dev environment for GitHub) and start coding immediately.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/MoePlayer/react-dplayer)

**React component for Dplayer** based on [DPlayer(V1.25.1)](https://github.com/DIYgod/DPlayer).

## Install

```bash
npm install react-dplayer -D
```

## Usage

### commonjs

```js
import DPlayer from "react-dplayer";

class Example extends Component {
    render() {
        return (
            <DPlayer
                options={{
                    video:{url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'}
                }}
                />
        )
    }
}
```

### browser

```html
<script src="https://unpkg.com/dplayer/dist/DPlayer.min.js" />
<script src="https://unpkg.com/react/dist/react.min.js" />
<script src="https://unpkg.com/react-dom/dist/react-dom.min.js" />
<script src="https://unpkg.com/react-dplayer/dist/react-dplayer.min.js" />
<div id="example"></div>
<script >
ReactDOM.render(React.createElement(
   'div',
    { style: { width: 800, margin: '0px auto' } },
    React.createElement(ReactDPlayer, {options:{video: {url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4'} }})
), document.getElementById('example'));
</script>
```

The package also includes an in-built example under the `/example` folder. Run the sample application by cloning project and running npm start.

## [Dplayer Doc](http://dplayer.js.org/docs/)

## Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| options | Object | -- | [read doc](http://dplayer.js.org/guide.html#options) |

## Events

> `camel-case rule` example play as onPlay

| Name | Params | Description |
| ---- | ------ | ----------- |
| allEvent | default | [read doc](http://dplayer.js.org/guide.html#event-binding)  |

## Development

- `npm run start`: Run example in development mode
- `npm run compile`: Build react-dplayer（commonjs）
- `npm run dist`: dist react-dplayer (umd)

## License

`react-dplayer` is released under the `MIT license`.
