/// <reference types="dplayer" />

declare module "react-dplayer" {
  import DPlayer, { DPlayerOptions } from "dplayer";
  import * as React from "react";

  type DPlayerEventHandle = () => void;

  export interface ReactDplayerProps extends React.HTMLProps<ReactDplayer> {
    options: DPlayerOptions,
    onLoad?: (player: DPlayer) => void;
    onAbort: DPlayerEventHandle,
    onCanplay: DPlayerEventHandle,
    onCanplaythrough: DPlayerEventHandle,
    onDurationchange: DPlayerEventHandle,
    onEmptied: DPlayerEventHandle,
    onEnded: DPlayerEventHandle,
    onError: DPlayerEventHandle,
    onLoadeddata: DPlayerEventHandle,
    onLoadedmetadata: DPlayerEventHandle,
    onLoadstart: DPlayerEventHandle,
    onMozaudioavailable: DPlayerEventHandle,
    onPause: DPlayerEventHandle,
    onPlay: DPlayerEventHandle,
    onPlaying: DPlayerEventHandle,
    onProgress: DPlayerEventHandle,
    onRatechange: DPlayerEventHandle,
    onSeeked: DPlayerEventHandle,
    onSeeking: DPlayerEventHandle,
    onStalled: DPlayerEventHandle,
    onSuspend: DPlayerEventHandle,
    onTimeupdate: DPlayerEventHandle,
    onVolumechange: DPlayerEventHandle,
    onWaiting: DPlayerEventHandle,
    onScreenshot: DPlayerEventHandle,
    onThumbnailsShow: DPlayerEventHandle,
    onThumbnailsHide: DPlayerEventHandle,
    onDanmakuShow: DPlayerEventHandle,
    onDanmakuHide: DPlayerEventHandle,
    onDanmakuClear: DPlayerEventHandle,
    onDanmakuLoaded: DPlayerEventHandle,
    onDanmakuSend: DPlayerEventHandle,
    onDanmakuOpacity: DPlayerEventHandle,
    onContextmenuShow: DPlayerEventHandle,
    onContextmenuHide: DPlayerEventHandle,
    onNoticeShow: DPlayerEventHandle,
    onNoticeHide: DPlayerEventHandle,
    onQualityStart: DPlayerEventHandle,
    onQualityEnd: DPlayerEventHandle,
    onDestroy: DPlayerEventHandle,
    onResize: DPlayerEventHandle,
    onFullscreen: DPlayerEventHandle,
    onFullscreenCancel: DPlayerEventHandle,
    onSubtitleShow: DPlayerEventHandle,
    onSubtitleHide: DPlayerEventHandle,
    onSubtitleChange: DPlayerEventHandle,
  }

  export default class ReactDplayer extends React.Component<ReactDplayerProps> {
    dp: DPlayer;
    container: React.DOMElement;
  }
}
