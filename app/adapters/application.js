import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.API_HOST,
  namespace: 'api',
  headers: {
    'AUTHTOKEN': '58jdc60b-c891-9981-8821-939p0121609b'
  }
});
