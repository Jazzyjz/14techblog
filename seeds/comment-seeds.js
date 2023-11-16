const { Comment } = require('../models');
  

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Impressive tech showcase! Can't wait to see these innovations in action."
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Quantum computing is mind-blowing. The future is now!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "These smartphones redefine sleek design and cutting-edge features. A must-have!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Thanks for the Python tutorial. Coding feels less intimidating now!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Cybersecurity is crucial. Stay informed, stay protected. Great insights!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "The chocolate chip cookies recipe is a game-changer. Yum overload!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Tech events fuel my curiosity. The expo coverage was enlightening and inspiring."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Gadgets review on point. Time to upgrade my tech game. Excellent recommendations!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;