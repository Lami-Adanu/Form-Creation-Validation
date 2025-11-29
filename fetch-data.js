async function fetchUserData() {
    const apiUrl ="https://jsonplaceholder.typicode.com/users";
    var dataContainer = document.getElementById('api-data');
    try {
        var response = await fetch(apiUrl);
        var users = await response.json();
        dataContainer.innerHTML='';
        const userList = document.createElement("ul");
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded',fetchUserData);