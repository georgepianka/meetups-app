Meteor.methods({
  'addMeetup': function(params) {
    Meetups.insert(params);
  },
  'updateMeetup': (id, params) => {
    Meetups.update(
       {_id: id},
       {$set:params}
     )
  }
});
