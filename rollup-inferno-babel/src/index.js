import { render, Component } from 'inferno';

import Router from './router';
import shared from './shared';

import Login from './comps/login.comp';
import Nav from './comps/navbar.comp';

// [!] need a class to store app state
class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      failedConnection: false,
      route: 'dash',
    };
    shared.root = this;
  }
  render() {
    return this.state.connected === true ? <App /> : <Login />;
  }
}

render(<Root />, document.getElementById('root'));

function App() {
  return (
    <div>
      <Nav />
      <Router />
    </div>
  );
}
