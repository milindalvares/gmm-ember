import Ember from 'ember';
import config from '../config/environment';
const { inject: { service }, get } = Ember

export default Ember.Component.extend({
  ajax: service(),
  actions: {
    toggleForm() {
      this.toggleProperty('isExpanded');
    },
    sendRequest(task, id) {
      var $ = Ember.$;
      const ajax = get(this, 'ajax');
      ajax.request(config.APP.API_HOST+'/send', {
        method: 'POST',
        data: {
          name: get(this, 'fullName'),
          contact: get(this, 'contact'),
          worktime: get(this, 'worktime'),
          task: task
        }
      }).finally(() => {
        $('#'+id).html('Sent');
      });
    }
  }
});
