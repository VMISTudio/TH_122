import * as React from 'react';
import './App.css';
import IntroSequence from './components/intro/intro-sequence';
import logo from './logo.svg';
import * as States from './utils/states';

class App extends React.Component {

  private content: any;

  public componentDidMount() {
    this.setAppState(States.STATE_INTRO_SEQUENCE);
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {this.content}

      </div>
    );
  }

  public setAppState(state: number) {
    switch(state) {
      case States.STATE_INTRO_SEQUENCE: 
      this.content = <IntroSequence />;
      break;

      default:
      throw new Error('state is not handled correctly ' + state);
      break;
    }

    this.setState({state});
  }
}

export default App;
