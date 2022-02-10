module.exports = () => {
    const data = {
        friends: [],
    };

    for (let index = 0; index < 500; index++) {
        data.friends.push({
            in: index + 1,
            likes: 5,
            Name: `Friend ${index + 1}`,
        });
    }
};
