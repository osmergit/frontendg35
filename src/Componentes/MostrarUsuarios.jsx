import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//import styles from "./styles.module.css";

const URI = 'http://localhost:8000/shuser'

export const CompShowUsers = () => {
   
    const [users, setBlog] = useState([])
    useEffect( ()=>{
        ObtenerUsuarios()
    },[])

    //procedimineto para mostrar todos los registros
    const ObtenerUsuarios = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (_id) => {
       await axios.delete(`${URI}${_id}`)
       ObtenerUsuarios()
    }
    return(
        <div className="">
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>crear</Link>
                    <table className='table'>
                        <thead className='thead tr:first-child'>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (blog) => (
                                <tr key={ blog._id}>
                                    <td > { blog.nomuser } </td>
                                    <td > { blog.correo } </td>
                                    <td > { blog.password } </td>
                                    <td>
                                        <Link to={`/editarusuario/${blog._id}`} >Editar</Link>
                                        <button onClick={ () => { deleteBlog(blog._id)} } > Eliminar </button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowUsers