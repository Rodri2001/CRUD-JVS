let listaEmpleados = []

const objEmpleado = {
    id: "",
    nombre: "",
    puesto: "",
}

let editando = false

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault()
    if (nombreInput.value === '' || puestoInput.value === '') {
        alert('Todos los campos son obligatorios')
        return
    }
    if (editando) {
        //va a editar al empleado
        editando = false
    } else {
        objEmpleado.id = Date.now()
        objEmpleado.nombre = nombreInput.value
        objEmpleado.puesto = puestoInput.value

        agregarEmpleado()
    }
}


const agregarEmpleado = () => {
    listaEmpleados.push({ ...objEmpleado })
    mostrarEmpleados()
}

const mostrarEmpleados = () => {
    const divEmpleados = document.querySelector('.div-empleados')

    listaEmpleados.forEach(empleado => {
        const { id, nombre, puesto } = empleado
        const parrafo = document.createElement('p')
        parrafo.textContent = `${id} - ${nombre} - ${puesto}`
        parrafo.dataset.id = id

        const editarBoton = document.createElement('button')
        editarBoton.textContent = 'Editar'
        editarBoton.classList.add('btn', 'btn-editar')
        parrafo.append(editarBoton)

        const eliminarBoton = document.createElement('button')
        eliminarBoton.textContent = 'Eliminar'
        eliminarBoton.classList.add('btn', 'btn-eliminar')
        parrafo.append(eliminarBoton)

        const hr = document.createElement('hr')

        divEmpleados.appendChild(parrafo)
        divEmpleados.appendChild(hr)
    })
}