const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema(
	{
    author: { type: Schema.Types.ObjectId, ref: "User" },
		content:  { type: String },
    
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Comment = mongoose.model('Comment', commentsSchema);

module.exports = Comment;
