const User = require('./User');
const AnimePList = require('./AnimePList');

AnimePList.belongsTo(User, {
    foreignKey: `user_id`,
});

User.hasMany(AnimePList, {
    foreignKey: `user_id`,
});

module.exports = { User, AnimePList };
