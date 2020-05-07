MyMeetupsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('myMeetups');
  },

  onAfterAction: function () {
    Meta.setTitle('My Meetups');
  }
});

MyMeetupsController.helpers({
  'myMeetups': function() {
    return Meetups.find({user: Meteor.userId()})
  }
});

MyMeetupsController.events({
  'submit .update-meetup-form': function(event) {
    event.preventDefault();
    let title = event.target.title.value;
    let email = event.target.email.value;
    let topics = event.target.topics.value;
    let type = event.target.type.value;
    let address = event.target.address.value;
    let city = event.target.city.value;
    let state = event.target.state.value;
    let zipcode = event.target.zipcode.value;
    let meetupDate = event.target.meetup_date.value;
    let id = event.target.id.value;

    let params = {
      title: title,
      email: email,
      topics: topics,
      type: type,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      user: Meteor.userId(),
      username: Meteor.user().username,
      meetupDate: meetupDate,
      createdAt: new Date()
    }

    //insert
    Meteor.call('addMeetup', params);

    toastr.success('Meetup Posted!');

    Router.go('/meetups');
  }
});
