document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend-name');
    for (const friend of friends) {
        console.log(friend);
    }
})