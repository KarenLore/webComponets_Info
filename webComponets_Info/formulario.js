class FormElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .form-container {
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                    width: 100%;
                    margin: 20px auto;
                }
                h2 {
                    text-align: center;
                    color: #2d98da;
                    margin-bottom: 20px;
                }
                label {
                    font-weight: bold;
                    color: #4b6584;
                    display: block;
                    margin-bottom: 5px;
                }
                input, textarea {
                    width: 100%;
                    padding: 12px;
                    margin-bottom: 15px;
                    border: 1px solid #dcdde1;
                    border-radius: 8px;
                    transition: border-color 0.3s;
                }
                input:focus, textarea:focus {
                    border-color: #2d98da;
                    outline: none;
                }
                button {
                    width: 100%;
                    padding: 12px;
                    background-color: #2d98da;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background-color: #1a7dba;
                }
                ul {
                    list-style-type: none;
                    padding-left: 0;
                }
                ul li {
                    background-color: #d1d8e0;
                    padding: 10px;
                    border-radius: 6px;
                    margin-bottom: 8px;
                    text-align: center;
                }
                    .delete-btn {
                    background-color: #e74c3c;
                    border: none;
                    color: white;
                    border-radius: 4px;
                    padding: 5px 10px;
                    cursor: pointer;
                    font-size: 14px;
                }
            </style>
            <div class="form-container">
                <h2>Formulario de Datos</h2>
                <label for="name">Nombre:</label>
                <input type="text" id="name" required>

                <label for="age">Edad:</label>
                <input type="number" id="age" required>

                <label for="email">Correo:</label>
                <input type="email" id="email" required>

                <label for="profile">Perfil Profesional:</label>
                <textarea id="profile" rows="4" required></textarea>

                <label for="hobbies">Hobbies:</label>
                <input type="text" id="hobbies" placeholder="Añadir un hobby">
                <button type="button" id="addHobby">Añadir Hobby</button>

                <ul id="hobbyList"></ul>

                <button type="submit" id="submitBtn">Enviar</button>
            </div>
        `;

        this.shadowRoot.querySelector('#addHobby').addEventListener('click', () => this.addHobby());
        this.shadowRoot.querySelector('#submitBtn').addEventListener('click', () => this.submitForm());
    }

    addHobby() {
        const hobbyInput = this.shadowRoot.querySelector('#hobbies');
        const hobbyList = this.shadowRoot.querySelector('#hobbyList');

        if (hobbyInput.value) {
            const listItem = document.createElement('li');
            listItem.textContent = hobbyInput.value;
            hobbyList.appendChild(listItem);
            hobbyInput.value = ''; // Limpiar el input
            
            // Botón para eliminar el hobby
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                hobbyList.removeChild(listItem); // Eliminar el hobby
            });

            listItem.appendChild(deleteBtn);
        } else {
            alert('Por favor, introduce un hobby.');
        }
    }

    submitForm() {
        const name = this.shadowRoot.querySelector('#name').value;
        const age = this.shadowRoot.querySelector('#age').value;
        const email = this.shadowRoot.querySelector('#email').value;
        const profile = this.shadowRoot.querySelector('#profile').value;
        const hobbies = Array.from(this.shadowRoot.querySelectorAll('#hobbyList li'));

        console.log({ name, age, email, profile, hobbies });
        alert('Datos enviados con éxito.');
        window.location.href = 'index.html';
    }
}

customElements.define('form-element', FormElement);
