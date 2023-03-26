import { useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate} from 'react-router-dom'

const EditAuthor = (props) => {
    const {id} = useParams();
    const [authorName, setAuthorName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                console.log(response.data);
                setAuthorName(response.data.name);
            })
            .catch((err) => console.log(err))
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {name: authorName})
            .then(response => {
                console.log(response)
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data.err.errors);

            })

    }
 return (
    <div>
        <Link to='/'> Home </Link>
    <form onSubmit={submitHandler}>
        <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input 
                type='text' 
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                />
            {errors.name ? <p> {errors.name.message} </p> : null }
        </div>
        <button type='submit'>Submit</button>
    </form>

    </div>
 )
}

export default EditAuthor;