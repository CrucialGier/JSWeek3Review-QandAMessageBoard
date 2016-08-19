import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    newAnswer(currentQuestion, params){
      console.log(currentQuestion);
      currentQuestion.answers.push().save();
    },
    destroyQuestion(question) {
      question.destroyRecord();
    }
  }
});
