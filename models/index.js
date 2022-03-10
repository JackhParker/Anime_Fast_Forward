const User = require('./User');
const AnimePList = require('./AnimePList');
const TheAnime = require('./TheAnime');
const SpecificEpisode = require('./specificEpisode');

AnimePList.belongsTo(User, {
    foreignKey: `user_id`,
});

User.hasMany(AnimePList, {
    foreignKey: `user_id`,
});

module.exports = { User, AnimePList, SpecificEpisode, TheAnime };
