Meteor.publish('meetups', function(){
  return Meetups.find();
});

Meteor.publish('myMeetups', function(){
  return Meetups.find({user: this.userId});
});
