import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  displayAnswers: false,
  deleteRequest: false,
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
    showDeleteConfirm: function(){
      this.set('deleteRequest', true);
    },
    hideDeleteConfirm: function(){
      this.set('deleteRequest', false);
    },
    delete(question) {
      if (this.get('confirmDelete') === 'Y' || this.get('confirmDelete') === 'y' || this.get('confirmDelete') === 'yes' || this.get('confirmDelete') === 'Yes') {
        this.sendAction('destroyQuestion', question);
        this.set('deleteRequest', false);
      } else {
        this.set('deleteRequest', false);
      }
    },
    newAnswer(params) {
      console.log(params);
      this.store.createRecord('answer', params);
      this.sendAction('newAnswer', params);
    }
  }
});
