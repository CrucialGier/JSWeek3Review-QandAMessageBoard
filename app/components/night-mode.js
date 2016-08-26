import Ember from 'ember';

export default Ember.Component.extend({
  isInverted: false,
  actions: {
    dayMode: function(){
      this.set('isInverted', false);
      console.log(this.isInverted);
    },
    nightMode: function(){
      this.set('isInverted', true);
      console.log(this.isInverted);
    },
  }
});
