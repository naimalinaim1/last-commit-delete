document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.background = 'lightblue';
    }
});

document.getElementById('friend-center').addEventListener('click', function () {
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center';
});

document.getElementById('add-friends').addEventListener('click', function () {
    const container = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend')
    friend.innerHTML = `
        <h3 class="friend-name">new Friend</h3>
        <p>something new added</p>
    `;
    container.appendChild(friend);
})