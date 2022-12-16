import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import img1 from '../Img/mundial2.jpg'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaTrashAlt, FaRegEdit, FaPlusCircle } from 'react-icons/fa';

//import styles from "./styles.module.css";

const URI = 'http://localhost:8000/shuser/'

export const CompShowUsers = () => {

    //Aca inicia el código que envia el encabezado del Token
    const token1 = localStorage.getItem("auth")
    const token = `${token1}`;
    const beer = "Bearer"
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'accept': 'application/json',
          //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njk0NjcxMzgsImV4cCI6MTY2OTQ2ODkzOH0.Dp0FfAN_taNOtPRhOGeAB7nQZvMvzVddPhN4TKb3JJo',
         'Authorization': `${beer} ${token}`,
        }
    };


    //Aca Finaliza
   
    const [users, setBlog] = useState([])
    useEffect( ()=>{
        ObtenerUsuarios()
    },[])

    //procedimineto para mostrar todos los registros
    const ObtenerUsuarios = async () => {
        const res = await axios.get(URI,axiosConfig)
        setBlog(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (_id) => {
       await axios.delete(`${URI}${_id}`)
       ObtenerUsuarios()
    }
    return(
        <div className="">
            <div >
                <div>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><FaPlusCircle size = "30" color = "red"/></Link>
                    <center>
                    <Card style={{ width: '60rem' }}>
                        <Card.Body>
                        <Card.Img src={img1} alt="Card image" />
                          <Card.ImgOverlay>
                          <Card.Text>

                    <Table >
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
                                        <Link to={`/editarusuario/${blog._id}`} ><FaRegEdit size = "30" color= "white"/></Link>
                                    </td>
                                    <td>    
                                        <Button onClick={ () => { deleteBlog(blog._id)} } > <FaTrashAlt /> </Button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                    </Card.Text>
                    </Card.ImgOverlay>
                          
                    </Card.Body>
                    </Card>
                    </center>
                </div>    
            </div>
        </div>
    )

}

export default CompShowUsers