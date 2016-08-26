import Ember from 'ember';

export function helpful(params) {
  var answer = params[0];
  var currentUpVotes = answer.get('upVotes');
  var currentDownVotes = answer.get('downVotes');
  if (currentUpVotes >= 20 && currentUpVotes > currentDownVotes * 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-certificate helpfulAnswer"></span>');
  }
}

export default Ember.Helper.helper(helpful);
