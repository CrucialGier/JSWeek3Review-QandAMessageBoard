import Ember from 'ember';

export default Ember.Service.extend({
  notes: [],
  add(answer) {
    this.get('notes').pushObject(answer);
  }
});
