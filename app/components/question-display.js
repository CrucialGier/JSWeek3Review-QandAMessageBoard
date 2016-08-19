import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  displayAnswers: false,
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
    }
  }
});
