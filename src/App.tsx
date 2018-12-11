import * as React from 'react';
import './App.css';
import BuildingSequence from './components/building/building-sequence';
import IntroSequence from './components/intro/intro-sequence';
import * as States from './utils/states';

class App extends React.Component {
  private content: any;

  constructor(props: any) {
    super(props);

    this.state = {
      state: States.STATE_INTRO_SEQUENCE,
    };
  }

  public componentDidMount() {
    this.setAppState(States.STATE_INTRO_SEQUENCE);
  }

  public render() {
    return <div className="App">{this.content}</div>;
  }

  public setAppState(state: number): void {
    switch (state) {
      case States.STATE_INTRO_SEQUENCE:
        this.content = (
          <IntroSequence
            callback={this.setAppState.bind(this, States.STATE_BUILDING)}
          />
        );
        break;

      case States.STATE_BUILDING:
        this.content = <BuildingSequence />;
        break;

      default:
        throw new Error('state is not handled correctly ' + state);
        break;
    }

    this.setState({ state });
  }
}

export default App;
