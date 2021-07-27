const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema(
	{
    author: { type: Schema.Types.ObjectId, ref: "User" },
		sport:  { type: String, enum: ["Running", "Football", "Biking", "Skateboarding",
    	 "Rollerblading", "Snowboarding", "Walking", "Trekking", "Boxing"]},
    location: { type: String },
    hour: {type: Number},
    day: {type: String},
    year: {type: Number},
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
