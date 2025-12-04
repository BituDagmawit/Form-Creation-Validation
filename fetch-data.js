document.addEventListener('DOMContentLoaded', async () => {
    const dataContainer = document.getElementById('api-data');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';
        const ul = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            ul.appendChild(li);
        });

        dataContainer.appendChild(ul);
    } catch (error) {
        dataContainer.textContent = 'Failed to load user data.';
    }
});
