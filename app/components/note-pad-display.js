import Ember from 'ember';

export default Ember.Component.extend({
  notePad: Ember.inject.service('note-pad'),
});
