import logo from '../assets/react.svg'
import {useState} from 'react'

const SimpleForm = () => {

    //Aqui va la logica para que funcione el SimpleForm

    //paso:2 crear los estados donde guardare la información tecleada


    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    //paso 4 crear la funcion que se ejecutara al hacer click en el boton de enviar del formulario
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('Email')
    }

  return (
    //* aqui va todo el diseño html
    // paso1: crear el formulario base en jsx
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        
        <form onSubmit={() => {}/* HANDLE SUBMIT */}>
        //paso 3 guardo la informació de la contraseña
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)/* HANDLE INPUT */}
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) =>  setPassword(event.target,value)/* HANDLE INPUT */}
            value={password}
          />
          
          <button type='submit'>
            Iniciar Sesion
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default SimpleForm

