// https://jsonplaceholder.typicode.com/users

function loadUsers3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers3(data));
}

function displayUsers3(users) {
    const ul = document.getElementById("new-user-list");
    for(const user of users){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}