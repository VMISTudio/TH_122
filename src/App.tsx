import * as React from 'react';
import './App.css';
import IntroSequence from './components/intro/intro-sequence';
import * as States from './utils/states';

class App extends React.Component {
  private content: any;

  public componentDidMount() {
    this.setAppState(States.STATE_INTRO_SEQUENCE);
  }

  public render() {
    return <div className="App">{this.content}</div>;
  }

  public setAppState(state: number) {
    switch (state) {
      case States.STATE_INTRO_SEQUENCE:
        this.content = <IntroSequence />;
        break;

      default:
        throw new Error('state is not handled correctly ' + state);
        break;
    }

    this.setState({ state });
  }
}

export default App;
