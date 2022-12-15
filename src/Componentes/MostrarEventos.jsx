import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const URI = 'http://localhost:8000/mostrareventos'

export const CompMostrarEventos = () => {

    const [ceventos, setEventos] = useState([])
    
    useEffect( ()=>{
        ObtenerEventos()
    },[])

    //procedimineto para mostrar todos los registros
    const ObtenerEventos = async () => {
        const res = await axios.get(URI)
        setEventos(res.data)
    }

    //procedimineto para eliminar un registro
      const deleteEventos = async (id) => {
        await axios.delete(`${URI}+${id}`)
        ObtenerEventos()
     }


return (
   
        <div >
            <Link to="/crearevento" className='btn btn-primary mt-2 mb-2'>Crear Evento</Link>
            <Card style={{ width: '60rem' }}>
            <Card.Body>
             
            <Table >
                <thead >
                    <tr>
                        <th>FECHA</th>
                        <th>EQUIPO1</th>
                        <th>EQUIPO2</th>
                        <th>MARCADOR1</th>
                        <th>MARCADOR2</th>
                        <th>TIPOEVENTO</th>
                    </tr>
                </thead>
                <tbody>
                    { ceventos.map ( (blog) => (
                        <tr key={ blog._id}>
                            <td > { blog.fecha } </td>
                            <td > { blog.equipo1 } </td>
                            <td > { blog.equipo2 } </td>
                            <td > { blog.marcador1 } </td>
                            <td > { blog.marcador2 } </td>
                            <td > { blog.tipoevento } </td>
                            <td>
                                <Link to={`/editareventos/${blog._id}`} >Editar</Link>
                                <Button type= "submit" onClick={ () => deleteEventos(blog._id) } >Delete</Button>
                                
                            </td>
                        </tr>
                    )) }
                </tbody>
            </Table>
          
            </Card.Body>
            </Card>
        </div>    
 

)

}

export default CompMostrarEventos