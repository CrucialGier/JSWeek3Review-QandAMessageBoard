import Ember from 'ember';

export default Ember.Component.extend({
  isBeingEdited: false,
  actions: {
    showQuestionEdit() {
      this.set('isBeingEdited', true);
    },
    update(question) {
      question.save();
      this.set('isBeingEdited', false);
    }
  }
});
