const sequelize = require('../config/connection');
const { User , Post } = require('../models');

const userData = [
    {
        username: 'emma_j92',
        twitter: '@emma_johnson92',
        gitHub: 'emmaj92',
        email: 'emma.johnson@example.com',
        password: 'P@ssw0rd123'
    },
    {
        username: "a_rod23",
        twitter: "@alex_rodriguez23",
        github: "arod23",
        email: "alex.rodriguez@example.com",
        password: "SecurePass!456"
    },
    {
        username: "taylor_sm",
        twitter: "@taylor_smith",
        github:  "tsmith_dev",
        email: "taylor.smith@example.com",
        password: "DevPass2023"
    },
    {
        username: "cam_brown",
        twitter: "@cameron_brown",
        github: "cbrown_devs",
        email: "cameron.brown@example.com",
        password: "Brownie@Dev789"
    },
    {
        username: " jordan_d",
        twitter: "@jordan_davis",
        github: "jdavis_codes",
        email: "jordan.davis@example.com",
        password: "C0dingRocks!"
    },
    {
        username: "morgan_w",
        twitter: "@morgan_white",
        github: "mwhite_dev",
        email: "morgan.white@example.com",
        password: "White1234!"
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;