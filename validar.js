/*Profesor, le adelanto que no pude hacer el proceso de validación como debería
Mis disculpas. 
*/

window.addEventListener('load', ()=> {
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    var telefono = document.getElementById('telefono')
    const email = document.getElementById('email')
    
     form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {

        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        var telefono = telefono.value.trim()
        const emailValor = email.value.trim()
             
        if(!nombreValor){
           validaFalla(nombre, 'Campo vacío')
        }else{
            validaOk(nombre)
        }

        if(!apellidoValor){
            validaFalla(apellido, 'Campo vacío')
        }else{
             validaOk(apellido)
        }

        if(!telefonoValor){
            validaFalla(telefono, 'Campo vacío')
        }else{
             validaOk(telefono)
        }


        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})