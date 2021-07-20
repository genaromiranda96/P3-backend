const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema(
	{
    author: { type: Schema.Types.ObjectId, ref: "User" },
		sport:  { type: String, enum: ["Run", "Football", "Biking", "Skateboarding",
     "Camping", "Rollerblading", "Kite Surfing"
     , "Snowboarding", "Walking", "Trekking", "Boxing"]},
    location: { type: String },
    date: {
      hour: {type: Number},
      day: {type: String},
      year: {type: Number},
    },
    comments: [{type: Schema.Types.ObjectId, ref:'Comments'}]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
