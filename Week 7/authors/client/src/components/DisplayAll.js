import { useState, useEffect} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom'

const DisplayAll = () => {
    const [allAuthors, setAllAuthors] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((response) => {
                setAllAuthors(response.data);
            })
            .catch((err) => {
                console.log(err.response.data.err.errors)
            });
    }, []);

    const deleteAuthor = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idFromBelow}`)
            .then((response) => {
                console.log('deleted');
                const filterAuthors = allAuthors.filter((author) => {
                    return author._id !== idFromBelow;
                });
                setAllAuthors(filterAuthors)
            })
            .catch((err) => {
                console.log(err.response.data.err.errors)
            })
    }

    return (
        <div>
        <Link to='/authors/new'>Add Author</Link>
        <table class="table">
            <thead >
            <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
                {allAuthors.map((author, index) => {
                    return( 
                        <tr key={index}>
                            <td> {author.name} </td>
                            <td><Link to={`/authors/edit/${author._id}`}><button type="button" class="btn btn-outline-dark" >Edit</button></Link>
                            <button type="button" class="btn btn-outline-dark" onClick={() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
        </div>
    )
}

export default DisplayAll
