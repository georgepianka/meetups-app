Meetups = new Mongo.Collection('meetups');

Meetups.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
