import * as React from 'react';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPersona } from '../actions/index.js';
import {useParams} from 'react-router-dom'
import MaterialTable from 'material-table';
//------------------------------------------------------------------------------------------------

export default function Home(){
  const dispatch = useDispatch()
  const allPersonas = useSelector(state=>state.personas);
  const {id} = useParams()


  useEffect(()=>{
    dispatch(getPersona(id))
  }, [id, dispatch])

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

  return (
    <div>
      <MaterialTable 
      columns={columnas}
      data={allPersonas}
      />
    </div>    
                
                
            
            
         
  );
}