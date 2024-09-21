import "./info.js"
import "./formulario.js"

class InfoCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

                <div class="name">
                    <h2>Perfil</h2>
                </div>
                <img src="../imagen/WhatsApp Image 2024-09-20 at 4.09.21 PM.jpeg" alt="Foto de perfil" class="profile-pic">
                <ul class="hobbies">
                    <h2>Hobbies</h2>
                    <li>Leer</li>
                    <li>Escuchar música</li>
                    <li>Aprender nuevas tecnologías</li>
                </ul>
                <div class="professional">
                    <h2>Profesional</h2>
                    <p>Bachiller Técnico en Asistente Administrativo.</p>
                </div>
                <button id="infoButton">Ir al formulario</button>
        `;
    }
    connectedCallback() {
        console.log("El componente se ha añadido al DOM");
        const button = this.querySelector('#infoButton');
        button.addEventListener('click', () => {
            window.location.href = 'index2.html'; 
        });
    }

    disconnectedCallback() {
        console.log("El componente se ha eliminado del DOM");
    }
}

customElements.define('info-card', InfoCard);


