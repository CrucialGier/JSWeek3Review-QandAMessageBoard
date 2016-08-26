import Ember from 'ember';

export default Ember.Component.extend({
  isBeingEdited: false,
  actions: {
    showQuestionEdit() {
      this.set('isBeingEdited', true);
    },
    hideQuestionEdit() {
      this.set('isBeingEdited', false);
    },
    update(question) {
      question.save();
      this.set('isBeingEdited', false);
    }
  }
});
