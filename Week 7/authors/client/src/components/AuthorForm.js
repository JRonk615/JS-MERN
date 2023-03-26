import {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {name} )
        .then((response) => {
            console.log(response);
            navigate('/');

        })
        .catch((err) => {

            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    }
    return (
        <div className='container col-3'>
            <Link to='/'> Home </Link>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type='text' 
                        className='form-control' 
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                        {errors.name ? <p> {errors.name.message} </p> : null }
                </div>
                <button type='submit'>Create</button>
            </form>

        
        </div>
    )
}

export default AuthorForm;