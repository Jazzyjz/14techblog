const { Post } = require('../models');

const postData = [
    {
        title: "Mastering Python: A Beginner's Guide to Coding",
        post_content:  "Embark on your coding journey with this beginner-friendly Python tutorial. We'll cover the basics, syntax, and practical examples to get you started on your programming adventure. Whether you're a novice or looking to expand your skills, this guide provides a solid foundation in one of the most versatile programming languages.",
        user_id: 3
    },
    {
        title: "Navigating the Cybersecurity Landscape: Trends and Threats",
        post_content:   "As technology evolves, so do cybersecurity challenges. In this post, we analyze current trends in cyber threats, from ransomware attacks to emerging vulnerabilities. Stay informed and learn about the best practices to secure your digital presence in an ever-changing online environment.",
        user_id: 1
    },
    {
        title: "Tech Review: The Next Generation Smartphones",
        post_content: "From foldable screens to revolutionary camera systems, the latest smartphones are pushing the boundaries of technology. This review takes an in-depth look at the most innovative features of the newest releases, helping you stay on the cutting edge of mobile technology.",
        user_id: 2

    },
    {
        title: "Unveiling the Future: Quantum Computing",
        post_content: "Dive into the world of quantum computing, where bits can exist in multiple states simultaneously. In this post, we explore the potential of quantum computers, their applications, and the groundbreaking advancements that are reshaping the landscape of information processing.",
        user_id: 5
    },
    {
        title: "Highlights from the Tech Expo 2023: Innovations and Insights",
        post_content:"The Tech Expo 2023 brought together visionaries and tech enthusiasts from around the globe to showcase the latest advancements and trends. From futuristic AI applications to groundbreaking robotics, this post provides an inside look at the most captivating exhibits and thought-provoking discussions that defined this year's tech extravaganza. Join us as we unravel the future of technology unveiled at the forefront of innovation.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;