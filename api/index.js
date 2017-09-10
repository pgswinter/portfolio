import express from 'express';
import {MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../server/config';
// import data from '../src/loadingData'

let mdb;
MongoClient.connect(config.mongodbUri, (err,db)=>{
	assert.equal(null, err);
	mdb = db;
})

const router = express.Router();

router.get('/portfolio', (req,res) => {

	// **** Loading data from MONGO DB
	let portfolio = {};
	mdb.collection('personalityTable').find({})
		.project({
			idSkill: 1,
			idFavourite: 1
		})
		.each((err,portfolio)=>{
			assert.equal(null, err);

			if(!portfolio){ // no more contests
				res.send({portfolio});
				return;
			}

			// contests[contest.id] = contest
			portfolio[portfolio._id] = portfolio // Change to use Object ID
		})
	// **** Loading data from MONGO DB
});

router.get('/portfolio/:idPerson', (req,res) => {

	// **** Loading data from MONGO DB
	mdb.collection('personalityTable')
		// .findOne({id:Number(req.params.contestId)})
		.findOne({ '_id': ObjectID(req.params.idPerson)}) // Change to use Object ID
		.then(portfolio => res.send(portfolio))
		.catch(error => {
			console.log(error);
			res.status(404).send('Bad Request');
		});
	// **** Loading data from MONGO DB
});

export default router;