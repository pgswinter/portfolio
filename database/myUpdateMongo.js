var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	let contestCount = 0;
	db.collection('contests').find({}).each((err, contest) => {
	assert.equal(null, err);
	if (!contest) { return; }

	contestCount++;
	db.collection('names')
	.find({ id: { $in: contest.nameIds }})
	.project({ _id: 1 })
	.toArray()
	.then(_ids => {
	const newIds = _ids.map(o => o._id);
	db.collection('contests').updateOne(
		{ id: contest.id },
		{ $set: { nameIds: newIds } }
	).then(() => {
		console.info('Updated', contest._id);
		contestCount--;
		if (contestCount === 0) { db.close(); }
	});
	})
	.catch(console.error);
	});
});