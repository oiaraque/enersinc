import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPersona,
         postPersona, 
         putPersona,
         deletePersona
       } from '../actions/index.js';
import {useParams} from 'react-router-dom'

import MaterialTable from 'material-table';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//------------------------------------------------------------------------------------------------
  
  const columnas=[
  {
    title:'Tipo Documento',
    field: 'TipoDocumento'
  },
  {
    title:'Numero Documento',
    field: 'NumDocumento'
  },
  {
    title:'Nombres',
    field: 'Nombres'
  },
  {
    title:'Apellidos',
    field: 'Apellidos'
  },
  {
    title:'Hobbies',
    field: 'Hobbies'
  },
  ]

  const useStyles = makeStyles((theme)=>({
    modal:{
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer',
    },
    inputMaterial:{
      width: '100%'
    }
  }));

export default function Home(){
  const dispatch = useDispatch()
  const allPersonas = useSelector(state=>state.personas);
  const {id} = useParams()
  const styles = useStyles()

  const [modalInsert, setModalInsert] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    TipoDocumento:"",
    NumDocumento:"",
    Nombres:"",
    Apellidos:"",
    Hobbies:""
  });

  const seleccionarPersona=(Nombres,caso)=>{
    setUsuarioSeleccionado(Nombres);
    (caso === 'Editar')?abrirCerrarModalEditar() :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsert(!modalInsert); 
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar); 
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar); 
  }

  useEffect(()=>{
    dispatch(getPersona(id))
  }, [id, dispatch])



  //HANDLERS
  const handleChange=e=>{
    const {name, value}=e.target;
    setUsuarioSeleccionado(prev=>({
      ...prev,
      [name]:value
    }))
  }

  function handleSubmit(e){
    dispatch(postPersona(usuarioSeleccionado))
    alert('Usuario Creado!!..')
    setUsuarioSeleccionado({
        TipoDocumento:"",
        NumDocumento:"",
        Nombres:"",
        Apellidos:"",
        Hobbies:""
    })
    abrirCerrarModalInsertar()
  }

  function handleUpdate(e){
    dispatch(putPersona(usuarioSeleccionado))
    alert('Usuario Actualizado!!..')
    setUsuarioSeleccionado({
        TipoDocumento:"",
        NumDocumento:"",
        Nombres:"",
        Apellidos:"",
        Hobbies:""
    })
    abrirCerrarModalEditar()
  }
  
  function handleDelete(e){
    dispatch(deletePersona(usuarioSeleccionado))
    alert('Usuario eliminado!!..')
    
  }

 //-------------------------------------------------------------------------------------------------------------------

  //INPUTS MODALPOST
  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Usuario</h3>
      <TextField 
      className={styles.inputMaterial}
      label="Tipo Documento" 
      name="TipoDocumento"
      onChange={handleChange}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Numero Documento" 
      name="NumDocumento"
      onChange={handleChange}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Nombres" 
      name="Nombres"
      onChange={handleChange}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Apellidos" 
      name="Apellidos"
      onChange={handleChange}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Hobbies " 
      name="Hobbies"
      onChange={handleChange}/>
    <div align="right">
      <Button color="primary" type="submit" onClick={e=>handleSubmit(e)}>Insertar</Button>
      <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
    </div>  
    </div>
    )


   //INPUTS MODALPUT
  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Usuario</h3>
      <TextField 
      className={styles.inputMaterial}
      label="Tipo Documento" 
      name="TipoDocumento"
      onChange={handleChange}
      value={usuarioSeleccionado && usuarioSeleccionado.TipoDocumento}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Numero Documento" 
      name="NumDocumento"
      onChange={handleChange}
      value={usuarioSeleccionado && usuarioSeleccionado.NumDocumento}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Nombres" 
      name="Nombres"
      onChange={handleChange}
      value={usuarioSeleccionado && usuarioSeleccionado.Nombres}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Apellidos" 
      name="Apellidos"
      onChange={handleChange}
      value={usuarioSeleccionado && usuarioSeleccionado.Apellidos}/>
      <br />
      <TextField 
      className={styles.inputMaterial}
      label="Hobbies " 
      name="Hobbies"
      onChange={handleChange}
      value={usuarioSeleccionado && usuarioSeleccionado.Hobbies}/>
    <div align="right">
      <Button color="primary" type="submit" onClick={e=>handleUpdate(e)}>Editar</Button>
      <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
    </div>  
    </div>
    )


    //INPUT MODALDELETE
    const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estas seguro de eliminar usuario <b>{usuarioSeleccionado && usuarioSeleccionado.Nombres}</b>?</p>
      <div align='right'>
        <Button color='secondary' onClick={e=>handleDelete()}>Si</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>)
//-----------------------------------------------------------------------------------------------------

  return (
    <div>
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar Usuario</Button>
      <br /><br />
      <MaterialTable 
      columns={columnas}
      data={allPersonas}
      title={"Usuarios"}
      actions={[
          {
            icon:'edit',
            tooltip:'Editar persona',
            onClick:(event,rowdata)=>seleccionarPersona('Editar')
          },
          {
            icon:'delete',
            tooltip:'Eliminar persona',
            onClick:(event,rowdata)=>seleccionarPersona('Eliminar')
          },
        ]}
      options={{
        actionsColumnIndex: -1
      }}
      localization={{
        header:{
        actions:'Acciones'          
        }
      }}
      />

      <Modal 
        open={modalInsert}
        onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>
      <Modal 
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
      <Modal 
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </div>       
  );
}