document.addEventListener('DOMContentLoaded', () => {
    // --- Data Source: Edit this array to add/remove services ---
    const servicesData = [
        {
            id: 1,
            name: "OuedKniss",
            description: "The leading marketplace for buying and selling cars, real estate, and more.",
            category: "Services",
            link: "https://www.ouedkniss.com",
            icon: "🛒"
        },
        {
            id: 2,
            name: "BaridiMob",
            description: "Algérie Poste mobile banking. Manage your CCP account and transfers.",
            category: "Utilities",
            link: "https://edcarte.poste.dz/",
            icon: "💳"
        },
        {
            id: 3,
            name: "Minister of Interior",
            description: "Official portal for biometric documents (Passport, ID) and administrative paperwork.",
            category: "Government",
            link: "https://interieur.gov.dz",
            icon: "🏛️"
        },
        {
            id: 4,
            name: "Yassir",
            description: "Ride-hailing and delivery super-app improving daily transport in Algeria.",
            category: "Services",
            link: "https://yassir.com",
            icon: "🚕"
        },
        {
            id: 5,
            name: "CNAS El-Hana",
            description: "Social security space for workers to check status and reimbursements.",
            category: "Government",
            link: "https://elhana.cnas.dz",
            icon: "🏥"
        },
        {
            id: 6,
            name: "Sonelgaz Payment",
            description: "Pay your electricity and gas bills online securely.",
            category: "Utilities",
            link: "https://paiement.sonelgaz.dz",
            icon: "⚡"
        },
        {
            id: 7,
            name: "Univ. Algiers 1",
            description: "Benyoucef Benkhedda University portal for student resources and news.",
            category: "Education",
            link: "https://www.univ-alger.dz",
            icon: "🎓"
        },
        {
            id: 8,
            name: "Emploitic",
            description: "The number one recruitment and job search site in Algeria.",
            category: "Services",
            link: "https://www.emploitic.com",
            icon: "💼"
        },
        {
            id: 9,
            name: "Algerie Ferries",
            description: "Book tickets for maritime travel to and from Algeria.",
            category: "Utilities",
            link: "https://algerieferries.dz",
            icon: "⛴️"
        }
    ];

    // --- Elements ---
    const grid = document.getElementById('servicesGrid');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    // --- Render Function ---
    function renderServices(data) {
        grid.innerHTML = '';

        if (data.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 2rem;">
                    <p>No services found matching your criteria.</p>
                </div>
            `;
            return;
        }

        data.forEach((service, index) => {
            // Create Card Element
            const card = document.createElement('article');
            card.className = 'card';
            card.style.animationDelay = `${index * 50}ms`; // Staggered animation

            card.innerHTML = `
                <span class="card-category">${service.category}</span>
                <div class="card-header">
                    <div class="card-icon">${service.icon}</div>
                    <h3 class="card-title">${service.name}</h3>
                </div>
                <p class="card-desc">${service.description}</p>
                <a href="${service.link}" target="_blank" rel="noopener noreferrer" class="card-btn">
                    Visit Website
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            `;
            
            grid.appendChild(card);
        });
    }

    // --- Filter Logic ---
    function filterData() {
        const query = searchInput.value.toLowerCase().trim();
        const category = categoryFilter.value;

        const filtered = servicesData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(query) || 
                                  item.description.toLowerCase().includes(query);
            const matchesCategory = category === 'All' || item.category === category;
            
            return matchesSearch && matchesCategory;
        });

        renderServices(filtered);
    }

    // --- Event Listeners ---
    searchInput.addEventListener('input', filterData);
    categoryFilter.addEventListener('change', filterData);

    // --- Initial Render ---
    renderServices(servicesData);
});
