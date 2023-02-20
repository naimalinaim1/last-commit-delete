const friends = (friends) => {
    const newFriends = [];
    for (let i=1; i<friends.length; i +=2) {
        newFriends.push(friends[i]);
    }
    return newFriends;
}
const friendsList = ['abul', 'babul', 'cabul', 'ebul', 'shabul' ,'abul', 'babul', 'cabul', 'ebul', 'shabul'];
console.log(friends(friendsList));