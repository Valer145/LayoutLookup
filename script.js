const API_URL = 'https://backend-layoutlookup.onrender.com/api';

async function loadStyles() {
    const container = document.getElementById('styles-container');
    if (!container) return;

    try {
        const res = await fetch(`${API_URL}/styles`);
        const styles = await res.json();

        container.innerHTML = '';

        styles.forEach(style => {
            const card = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="images/${style.name.toLowerCase().replace(/ /g, '-')}.jpg" 
                             class="card-img-top" 
                             alt="${style.name}">
                        <div class="card-body">
                            <h5 class="card-title">${style.name}</h5>
                            <p class="card-text">${style.description}</p>
                            
                            <a href="${style.name.toLowerCase().replace(/ /g, '')}.html" 
                               class="btn btn-primary w-100">
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });

    } catch (error) {
        console.error("Error:", error);
        container.innerHTML = `<p class="text-danger">Error al cargar los estilos. Inténtalo más tarde.</p>`;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadStyles();
});