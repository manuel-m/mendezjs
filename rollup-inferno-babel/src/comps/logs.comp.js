export default function logs(props) {
  return (
    <div class="robots-list">
      <div class="panel-top shadow" />
      <div class="panel-header">
        <div class="line">
          <div class="line__left">
            <span class="toolbar__item">Filter...</span>
          </div>
        </div>
      </div>
      <div class="panel-body shadow">
        <ul>
          <li class="robot-line">
            Last event<pre>Connected:{new Date().toLocaleDateString()}</pre>
          </li>
        </ul>
      </div>
    </div>
  );
}
