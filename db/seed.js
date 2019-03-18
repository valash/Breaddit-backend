//this is going to be seed data for the database so that we as a team can make sure certain requests work across the board

const mongoose = require('./connection');
const seeds = require('./seedData');

const Post = mongoose.model('Post');

mongoose.Promise = Promise;

Post.remove({}).then(() => {
	console.log('DB has been emptied');
	Post.collection.insert(seeds).then((seededEntries) => {
		console.log(seededEntries);
		mongoose.connection.close();
	});
});
