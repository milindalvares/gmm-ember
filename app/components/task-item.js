import Ember from 'ember';

const { inject: { service } } = Ember

export default Ember.Component.extend({
  ajax: service(),
  actions: {
    toggleForm() {
      this.toggleProperty('isExpanded');
    },
    sendRequest() {
      const ajax = get(this, 'ajax');
      ajax.request('/send', {
        method: 'POST',
        data: {
          name: get(this, 'fullName'),
          contact: get(this, 'contact'),
          worktime: get(this, 'worktime')
        }
      })
    }
  }
});
