import shared from '../shared';

import './robots.scss';

export default function robots(props) {
  return (
    <div class="robots-list">
      <div class="panel-top shadow" />
      <div class="panel-header">Robots</div>
      <div class="panel-body shadow">
        <ul>
          {shared.robots.items.map(line => (
            <li class="robot-line">{robotLineLabel(line)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function robotLineLabel([id, type, groups]) {
  return (
    <div class="line">
      <div class="line__left">{`${id} ${type}`}</div>
      <div class="line__right">
        {groups.map(g => (
          <span class="badge primary">{g}</span>
        ))}
      </div>
    </div>
  );
}
