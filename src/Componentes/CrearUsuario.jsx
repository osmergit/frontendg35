//Aca importamos las libreria a utilizar en nuestro componente

//Se utiliza para conectarnos con nuestro servidor de Backend
import axios from 'axios'
//Cambiar el estado de nuestras cajas de texto inputs
import {useState} from 'react'
//Navegar por nuestras rutas 
import { useNavigate } from 'react-router-dom'
//Maquillaje  Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

//Aca finaliza**********La importación
//Aca definimos la url de la direccion de mi servidor de Backend
const URI = 'http://localhost:8000/regusuario/'

export const CompCrearUsuario = () => {
//Escribimos nuestro codigo de Guardar información del Usuario
//Definir nuestras variables a utilizar
 const [nomuser,setUsuario] = useState('')
 const [correo, setCorreo] = useState('')
 const [password,setPass] = useState('')
 const navigate = useNavigate()
 //Aca vamos a guardar la información en la base de datos
 var guardar = async (e) => {
    
    e.preventDefault()
    await axios.post(URI,{
                           correo:correo,
                           nomuser: nomuser,
                           password: password
                         })
    navigate('/usuarios')
 }

 return(
 <div className="login-form" >
    
    <Card style={{ width: '40rem' }}>
        
        <Card.Body>
        <Card>
        <h3> Creacion de Usuarios</h3>  
        <Form>
        <Form.Group className="mb-3" >
            <div>
                <Form.Control 
                value = {nomuser}
                onChange = { (e) =>setUsuario(e.target.value)}
                type = "text"
                placeholder='Ingrese su nombre'
                />
            </div>
            <div>
                <Form.Control  
                value = {correo}
                onChange ={ (e) => setCorreo(e.target.value)}
                type = "email"
                placeholder='Ingrese su Email'
                />
            </div>
            <div>
                <Form.Control  
                value = {password}
                onChange={(e) => setPass(e.target.value)}
                type = "password"
                placeholder='Ingrese su Password'
                />                           
            </div>
            <Button type = "submit" onClick = {guardar} variant = "outline-success"> Guardar</Button>
            </Form.Group>
        </Form>
        </Card>
        </Card.Body>
        
    </Card>

 </div>

 )

}

export default CompCrearUsuario


