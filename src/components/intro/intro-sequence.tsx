import * as React from 'react';
import './intro-sequence.css';

import videojs from 'video.js';

interface IProps {
  callback: () => void;
}

class IntroSequence extends React.Component<IProps> {
  private player: any;
  private videoNode: any;

  public render() {
    return (
      <div className="data-vjs-player">
        <video ref={node => (this.videoNode = node)} className="video-js" />
      </div>
    );
  }

  public componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  public componentDidMount() {
    const videoJsOptions = {
      autoplay: true,
      controls: false,
      fluid: true,
      sources: [
        {
          src: 'assets/video/ident.mp4',
          type: 'video/mp4',
        },
      ],
    };

    this.player = videojs(this.videoNode, videoJsOptions);
    this.player.on('ended', this.props.callback);
  }
}

export default IntroSequence;
