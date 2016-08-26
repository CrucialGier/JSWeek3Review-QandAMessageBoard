import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  author2: DS.attr(),
  upVotes: DS.attr('number'),
  downVotes: DS.attr('number'),
  question: DS.belongsTo('question', { async: true })
});
