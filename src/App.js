import React from 'react'
import { useFormik } from 'formik'

const App = () => {

  const formik = useFormik({
    initialValues:{
      name:'',
      lastname:'',
      email:'',
    },
    onSubmit:values=> console.log(values)
  })

  return (
    <from onSubmit={formik.handleSubmit}>
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

    <label>Nombre</label>
      <input
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button>Enviar</button>
    </from>
  )
}

export default App