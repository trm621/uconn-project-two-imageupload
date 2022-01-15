// import all models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations- verify on deletes working correctly

// User  
User.hasMany(Post, {
    foreignKey: 'user_id',
  });

User.hasMany(Comment, {
    foreignKey: 'user_id',
  });

// Post
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

// Comment

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  });


module.exports = { User, Post, Comment };