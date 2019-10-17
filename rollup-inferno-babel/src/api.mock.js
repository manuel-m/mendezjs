import entities from './api.entities.mock';

export default {
  get: _xhr,
  post: _xhr,
};

function _xhr(url, payload) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      const entity = url.split('/').pop();
      resolve(entities(entity));
    }, 20);
  });
}
