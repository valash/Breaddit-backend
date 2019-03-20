//This is the controller for the post. It will most likely also include the commands for the comments since the comments will be a sub model. It' going to be using router b/c we have to do that, it'll be connected to the Post model and the connection file, so it can, you know access the dadtabase and actually use the model at hand, since those things are kinda important. Then it'll have a whole bunch of routes to places so it can CRUD it up. Bars.

const express = require('express');
const postRouter = express.Router();
const commentRouter = express.Router({ mergeParams: true });

postRouter.use('/:id/comments', commentRouter);

const mongoose = require('../db/connection');
const Post = mongoose.model('Post');

postRouter.get('/', (req, res) => {
	Post.find({}).then((posts) => res.json(posts));
});

postRouter.get('/:_id', (req, res) => {
	Post.findOne({ _id: req.params._id }).then((post) => res.json(post));
});

postRouter.post('/', (req, res) => {
	Post.create(req.body).then((post) => res.json(post));
});

postRouter.put('/:_id', (req, res) => {
	Post.findOneAndUpdate({ _id: req.params._id }, req.body, {
		new: true
	}).then((post) => res.json(post));
});

postRouter.delete('/:_id', (req, res) => {
	Post.findOneAndRemove({ _id: req.params._id }).then((post) => res.json(post));
});

//The Routes down here are for comments

//creates comments
postRouter.put('/:_id', (req, res) => {
	Post.findOneAndUpdate(
		{ _id: req.params._id },
		{ $push: { comments: { comment: req.body.comment } } }
	).then((post) => {
		res.json(post);
	});
});

//reads all comments
commentRouter.get('/:_id/comments', (req, res) => {
	Post.find({ _id: req.params._id }, { comments }).then((comments) => {
		res.json(comments);
	});
});

//deletes comments
commentRouter.put('/:_id/comments', (req, res) => {
	Post.comments.id(_id).remove().then(res.redirect('/:_id')).then((post) => {
		res.json(post);
	});
});

module.exports = postRouter;
