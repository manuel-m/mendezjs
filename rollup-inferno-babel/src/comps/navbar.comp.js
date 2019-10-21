import './navbar.scss';

import shared from '../shared';

export default function Navbar() {
  return (
    <div class="nav line text-primary-color dark-primary-color shadow">
      <div class="line__left">
        {NavButton('Robots', 'robots')}
        {NavButton('Logs', 'logs')}
      </div>
      <div class="line__right">
        <span class="nav__item" onClick={disconnect}>
          Disconnect
        </span>
      </div>
    </div>
  );
}

function NavButton(label, route) {
  return (
    <span
      class={
        'nav__item' + (shared.root.state.route === route ? ' selected' : '')
      }
      onClick={e => {
        e.preventDefault();
        shared.root.setState({ route });
      }}
    >
      {label}
    </span>
  );
}

function disconnect(event) {
  event.preventDefault();
  shared.root.setState({ connected: false });
}
