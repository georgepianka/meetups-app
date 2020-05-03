Meetups = new Mongo.Collection('Meetups');

Meetups.helpers({

});

Meetups.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
