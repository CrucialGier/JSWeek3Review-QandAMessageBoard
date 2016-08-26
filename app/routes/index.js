import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    newAnswer(params) {
      console.log(params.question);
      var createAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(createAnswer);
      createAnswer.save().then(function() {
        return question.save();
      });
    },
    destroyQuestion(question) {
      question.destroyRecord();
    }
  }
});
