import * as React from 'react';
import videojs from 'video.js';
import './intro-sequence.css';

class IntroSequence extends React.Component {
  public render() {
    return (
      <video
        id="intro-sequence"
        className="video-js"
        preload="auto"
        data-setup="{}"
      >
        <source src="assets/video/ident.mp4" type="video/mp4" />
        {/* <source src="MY_VIDEO.webm" type='video/webm' /> */}
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
    );
  }

  public componentDidMount() {
    videojs('intro-sequence', {
      autoplay: true,
      fluid: true,
    });
  }
}

export default IntroSequence;
