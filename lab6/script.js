const loadBtn = document.querySelector('.load-btn');

function loadUsers() {
    const errorEl = document.getElementById('error');
    const cardsContainer = document.getElementById('cardsContainer');
    
    cardsContainer.innerHTML = '';
    
    errorEl.style.display = 'none';

    fetch('https://randomuser.me/api/?results=5')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка мережі');
            }
            return response.json();
        })
        .then(data => {            
            data.results.forEach(user => {
                displayUser(user);
            });
        })
        .catch(error => {
            errorEl.textContent = `Помилка завантаження: ${error.message}`;
            errorEl.style.display = 'block';
            console.error('Error:', error);
        });
}

function displayUser(user) {
    const cardsContainer = document.getElementById('cardsContainer');
    
    const card = document.createElement('div');
    card.className = 'user-card';
    
    const fullName = `${user.name.first} ${user.name.last}`;
    const picture = user.picture.large;
    const cell = user.cell;
    const city = user.location.city;
    const country = user.location.country;
    
    card.innerHTML = `
        <img src="${picture}" alt="${fullName}" class="user-image">
        <div class="user-info">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Cell:</strong> ${cell}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>Country:</strong> ${country}</p>
        </div>
    `;
    
    cardsContainer.appendChild(card);
}

loadBtn.addEventListener('click', loadUsers);