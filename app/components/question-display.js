import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showDetails: function(){
      this.set('isSelected', true);
    },
    hideDetails: function(){
      this.set('isSelected', false);
    }
  }
});
