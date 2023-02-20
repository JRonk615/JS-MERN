import React, { useState } from  'react';
    
const UserForm = () => {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPass: ""
    })

    //keeps track os users in useState in empty list
    const [userList, setUserList] = useState([]);

    const userValidation =(e) => {
        let isValid = true
        if (users.firstName.length < 3 || users.lastName.length < 3 || users.email.length < 3 || users.password.length < 8)  
        {
            isValid = false
        }
        return isValid
    }

    const changeHandler = (e) => {
        setUsers({...users, [e.target.name] : e.target.value })
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        let isValid = userValidation()
        if(isValid){
            console.log(`User: ${JSON.stringify(users)}`)
            setUserList([...userList, users])
            //resets user values
            setUsers({
                firstName: "",
                lastName: "",
                email: "",
                password: "", 
                confirmPass: ""            
            })

        } else {
            console.log("invalid info")
        }
        setHasBeenSubmitted( true );
    }
    const formMessage = () => {
        if ( hasBeenSubmitted ) {
            return "Thank you for submitting the form.";
        } else {
            return "Welcome, you must submit the form or else.."
        }
    }

    return(
        <div className='container row mx-auto p-4 d-flex'>
            <div className='col-4 flex-column align-items-center justify-content-md-center mx-auto bg-dark text-light'>
                <form onSubmit={ submitHandler }>
                    <h3> { formMessage() }</h3>
                    <div className='m-4 row'>
                        <label>First Name: </label>  
                        <input type="text" name="firstName" onChange={changeHandler} value = {users.firstName} className="form-control"/>
                        {
                            //ternary operator              //true                    //false
                            users.firstName && users.firstName.length < 3 ? <p> Invalid First Name </p> : ""
                        }
                    </div>
                    <div className='m-4 row'>
                        <label>Last Name: </label> 
                        <input type="text" name="lastName" onChange={changeHandler} value = {users.lastName} className="form-control"/>
                        {
                            users.lastName && users.lastName.length < 3 ? <p> Invalid Last Name </p>: ""
                        }
                        
                    </div>
                    <div className='m-4 row'>
                        <label>Email Address: </label> 
                        <input type="email" name="email" onChange={changeHandler} value = {users.email} className="form-control"/>
                        {
                            users.email && users.email.length < 3 ? <p> Invalid email </p>: ""
                        }
                    </div>
                    <div className='m-4 row'>
                        <label>Password: </label>
                        <input type="text" name="password" onChange={changeHandler} value = {users.password} className="form-control"/>
                        {
                            users.password && users.password.length < 8 ? <p> Invalid Password Length </p>: ""
                        }
                    </div>
                    <div className='m-4 row'>
                        <label>Confirm Password: </label>
                        <input type="text" name="confirmPass" onChange={changeHandler} value = {users.confirmPass} className="form-control"/>
                        {
                            users.confirmPass && users.confirmPass !== users.password ? <p> Invalid Password </p>: ""
                        }
                    </div>

                    {<input type="submit" className='btn btn-outline-light m-4'/>}
                </form>
                </div>
            <div className='col-4'>
                        {
                            userList.map((users, i) => (
                                    <div className='card' key={i}>
                                        <div className='card-body'>
                                            <h3>User:</h3>
                                            <p className='card-text'>First Name: {users.firstName}</p>
                                            <p className='card-text'>Last Name: {users.lastName}</p>
                                            <p className='card-text'>Email: {users.email}</p>
                                        </div>
                                    </div>
                                
                                ) 
                                
                            )
                        }
            </div>
        </div>


    );
};
    
export default UserForm;

