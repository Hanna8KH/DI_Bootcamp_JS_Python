(function (userName) {
    const userInfoDiv = document.getElementById('user-info');

    const userDiv = document.createElement('div');
    // userDiv.classList.add('user-info');

    const profileImage = document.createElement('img');
    profileImage.src = 'https://picsum.photos/200/200'; 
    // profileImage.classList.add('profile-image');

    const userNameSpan = document.createElement('span');
    userNameSpan.textContent = 'Welcome, ' + userName;

    userDiv.appendChild(profileImage);
    userDiv.appendChild(userNameSpan);

    userInfoDiv.appendChild(userDiv);
})('John'); 