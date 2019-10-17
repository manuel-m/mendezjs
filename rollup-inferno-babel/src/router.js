import Robots from './comps/robots.comp';
import Logs from './comps/logs.comp';

import shared from './shared';

export default function() {
  const { route } = shared.root.state;
  if (route === 'robots') return <Robots />;
  if (route === 'logs') return <Logs />;
}
