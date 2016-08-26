import Ember from 'ember';

export default Ember.Component.extend({
  notePad: Ember.inject.service('note-pad'),
  actions: {
    emptyNotePad() {
      if (confirm("Delete All Notes?")) {
        this.get('notePad').set('notes', []);
      }
    }
  }
});
