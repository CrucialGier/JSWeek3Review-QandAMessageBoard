import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    newAnswer() {
      var params = {
        answer: this.get('answer'),
        author2: this.get('author'),
        question: this.get('currentQuestion')
      };
      this.set('addNewAnswer', false);
      this.sendAction('newAnswer', params);
    }
  }
});
