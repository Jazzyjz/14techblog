const sequelize = require('../config/connection');
const { User , Post } = require('../models');

const userData = [
    {
        username: 'emma_j92',
        email: 'emma.johnson@example.com',
        password: 'P@ssw0rd123'
    },
    {
        username: "a_rod23",
        email: "alex.rodriguez@example.com",
        password: "SecurePass!456"
    },
    {
        username: "taylor_sm",
        email: "taylor.smith@example.com",
        password: "DevPass2023"
    },
    {
        username: "cam_brown",
        email: "cameron.brown@example.com",
        password: "Brownie@Dev789"
    },
    {
        username: " jordan_d",
        email: "jordan.davis@example.com",
        password: "C0dingRocks!"
    },
    {
        username: "morgan_w",
        email: "morgan.white@example.com",
        password: "White1234!"
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;