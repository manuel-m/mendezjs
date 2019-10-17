import shared from './shared';
import api from './api.mock';

const actions = {
  'config.load': configLoad,
  'robots.list': robotsList,
};

export default function(actionId, payload) {
  return actions[actionId](payload);
}

async function configLoad() {
  shared.config = await api.get('config.json');

  // robots mapping
  {
    const { format } = shared.config.robots;
    format.map = format.columns.reduce((o, v, i) => {
      o[v] = i;
      return o;
    }, {});
  }
}

async function robotsList() {
  const payload = {
    page: shared.robots.page,
    search: shared.robots.search,
  };
  const items = await api.post('/api/robots', payload);
  shared.robots.items = items;
  shared.root.setState({ connected: true, route: 'robots' });
}
