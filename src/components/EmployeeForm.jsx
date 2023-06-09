import React, { useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

function EmployeeForm() {
    const {darkMode, setDarkMode} = useThemeContext()
    const [dataForm,setDataForm] = useState()
    const [data, setData] = useState(
      {
        nombre : '',
        apellido: '',
        posicion : '',
        salario: 0,
      }
    )
    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
    }
    //console.log('DATA',data);
    /* const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [posicion, setPosicion] = useState('')
    const [salario, setSalario] = useState(0)
  
    const handleChangeNombre = (e) => {
      setNombre(e.target.value)
    }
    const handleChangeApellido = (e) => {
      setApellido(e.target.value)
    }
    const handleChangePosicion = (e) => {
      setPosicion(e.target.value)
    }
    const handleChangeSalario = (e) => {
      setSalario(e.target.value)
    } */
  
    function sendForm(e) {
      e.preventDefault()
      //console.log('formulario enviado');
      //console.log('Data enviada', data);
      setDataForm(data)
    }
    console.log('dataFORM ENVIADO A BACK', dataForm);
  
    const changeTheme = () => {
      setDarkMode(!darkMode)
    }
    
    return (
      <section className={darkMode ? 'form-container-light' : 'form-container-dark'}>
        <div className='buttons-container'>
          <button className={darkMode ? 'style-buttom-dark' : 'style-buttom'} onClick={changeTheme}>DarkMode</button>
          <button className={darkMode ? 'style-buttom-dark' : 'style-buttom'}><Link to={'/api'} className={darkMode ? 'button-link' : 'button-link-dark'}>Api</Link></button>
        </div>
        <h3 className='form-title'>titulo</h3>
        <p className='form-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <form className='form' onSubmit={sendForm}>
          <label className='form-label'>Nombre</label>
          <input className='form-imput' type='text' value={data.nombre} name='nombre' onChange={handleChange}></input>
          <label className='form-label'>Apellido</label>
          <input className='form-imput' type='text' value={data.apellido} name='apellido' onChange={handleChange}></input>
          <label className='form-label'>Posición</label>
          <input className='form-imput' type='text' value={data.posicion} name='posicion' onChange={handleChange}></input>
          <label className='form-label'>Salario</label>
          <input className='form-imput' type='number' value={data.salario} name='salario' onChange={handleChange}></input>
          <button className='form-buttom' type='submit'>Enviar</button>
        </form>
      </section>
    )
}

export default EmployeeForm