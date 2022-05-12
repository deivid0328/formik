import React from 'react'
import { useFormik } from 'formik'

const App = () => {

  const formik = useFormik({
    initialValues:{
      name:'',
      lastname:'',
      email:'',
    },
    validate:(values) =>{
      const errors={}
      errors.name='Requerido'
      return errors
    },
    onSubmit:values=> console.log(values)
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        name='name'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.name}
      />
    
    <label>Apellido</label>
      <input
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.lastname}
      />

    <label>Correo Electronico</label>
      <input
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default App