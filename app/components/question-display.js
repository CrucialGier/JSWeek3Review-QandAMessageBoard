import Ember from 'ember';

export default Ember.Component.extend({
  notePad: Ember.inject.service('note-pad'),
  isSelected: false,
  displayAnswers: false,
  answerSelected: false,
  deleteRequest: false,
  sortUpVotes: ['upVotes:desc'],
  sortedAnswers: Ember.computed.sort('currentQuestion.answers', 'sortUpVotes'),
  actions: {
    showDetails: function(){
      this.set('isSelected', true);
    },
    hideDetails: function(){
      this.set('isSelected', false);
    },
    showAnswers: function(){
      this.set('displayAnswers', true);
    },
    hideAnswers: function(){
      this.set('displayAnswers', false);
    },
    selectAnswer: function(){
      this.set('answerSelected', true);
    },
    deselectAnswer: function(){
      this.set('answerSelected', false);
    },
    showDeleteConfirm: function(){
      this.set('deleteRequest', true);
    },
    hideDeleteConfirm: function(){
      this.set('deleteRequest', false);
    },
    delete(question) {
      if (this.get('confirmDelete') === 'Y' || this.get('confirmDelete') === 'y' || this.get('confirmDelete') === 'yes' || this.get('confirmDelete') === 'Yes') {
        this.sendAction('destroyQuestion', question);
      }
      this.set('confirmDelete', "");
      this.set('deleteRequest', false);
    },
    newAnswer(params) {
      console.log(params);
      this.sendAction('newAnswer', params);
    },
    upVote(answer) {
      var currentUpVotes = answer.get('upVotes');
      answer.set('upVotes', currentUpVotes + 1);
      answer.save();
    },
    downVote(answer) {
      var currentDownVotes = answer.get('downVotes');
      answer.set('downVotes', currentDownVotes + 1);
      answer.save();
    },
    addToNotePad(answer) {
      this.get('notePad').add(answer);
    }
  }
});
