import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Form.css'

//icons
import { BsEyeFill } from 'react-icons/bs'
import { BsEyeSlashFill } from 'react-icons/bs'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShow = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='Form'>
      <div className='Form-container'>
        <span>Ingresa</span>
        <form>
          <div className='Form-content'>
            <label htmlFor='name'>Nombre de Usuario</label>
            <input
              name='user_name'
              type="text"
            />
          </div>
          <div className='Form-content'>
            <label htmlFor='name'>Contraseña</label>
            <div className='Form-container-password'>
              <input
                name='password'
                type={showPassword ? "text" : "password"}
              />
              <div onClick={handleShow}>
                {showPassword
                  ? <BsEyeFill className='Form-icon-password' />
                  : <BsEyeSlashFill className='Form-icon-password' />
                }
              </div>
            </div>
          </div>
          <div className='Form-container-btn'>
            <button className="Form-btn" type='submit'>
              Guardar
            </button>
            <Link className="Form-btn" to='/'>Atras</Link>
            <Link className="Form-btn" to={'/home'}>Inicio</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
