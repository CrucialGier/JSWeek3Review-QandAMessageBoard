import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    newAnswer(currentQuestion) {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
      };
      this.set('addNewAnswer', false);
      console.log(currentQuestion);
      this.sendAction('newAnswer', currentQuestion, params);
    }
  }
});
