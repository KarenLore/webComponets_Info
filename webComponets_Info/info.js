class HobbiesElement extends HTMLElement {
    constructor() {
        super();{}
        this.innerHTML = `

        <div class="perfil">
        <h2>Datos</h2>
            <p><strong>Nombre:</strong> Karen Cristancho</p>
            <p><strong>Edad:</strong> 18</p>
            <p><strong>Ocupacion:</strong> Estudiante</p>
            <p><strong>Email:</strong> <span class="email">karenlorenacriscaceres@gmail.com</span></p>
        </div>

        `
    }
}

customElements.define("hobbies-element", HobbiesElement);