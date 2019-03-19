//This is the controller for the post. It will most likely also include the commands for the comments since the comments will be a sub model. It' going to be using router b/c we have to do that, it'll be connected to the Post model and the connection file, so it can, you know access the dadtabase and actually use the model at hand, since those things are kinda important. Then it'll have a whole bunch of routes to places so it can CRUD it up. Bars.

const express = require('express');
const router = express.Router();

const mongoose = require('../db/connection');
const Post = mongoose.model('Post');

router.get('/', (req, res) => {
	Post.find({}).then((posts) => res.json(posts));
});

router.get('/:_id', (req, res) => {
	Post.findOne({ _id: req.params._id }).then((post) => res.json(post));
});

router.post('/', (req, res) => {
	Post.create(req.body).then((post) => res.json(post));
});

router.put('/:_id', (req, res) => {
	Post.findOneAndUpdate({ _id: req.params._id }, req.body, {
		new: true
	}).then((post) => res.json(post));
});

router.delete('/:_id', (req, res) => {
	Post.findOneAndRemove({ _id: req.params._id }).then((post) => res.json(post));
});

router.put('/:_id', (req, res) => {
	Post.findOneAndUpdate(
		{ _id: req.params._id },
		{ $push: { comments: { comment: req.body.comment } } }
	).then((post) => {
		res.redirect(`/post/${post._id}`);
	});
});

module.exports = router;
