// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});

// Named async function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data');    // Data container element

    try {
        const response = await fetch(apiUrl);   // Fetch data from API
        const users = await response.json();    // Convert response to JSON

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a user list
        const userList = document.createElement('ul');

        // Loop through users and add each to the list
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        // Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        console.error('Error fetching data:', error);
    }
}
