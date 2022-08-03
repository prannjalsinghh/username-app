import React, {useState} from 'react';
import Card from './UI/Card';
import ErrorModal from './UI/ErrorModal';
import './userData.css'


const Userdata = (props) =>{

    const [enteredUsername, userNameChangeHandler]=useState('');
    const [enteredAge, AgeChangeHandler]=useState('');

    const [error,setError]= useState();

    const errorHandler = ()=>{
        setError(null);
    }

    const usernameHandler = (event) =>{
        userNameChangeHandler(event.target.value);
        
    }
    const ageHandler = (event) =>{

        AgeChangeHandler(event.target.value);
        
    }

    console.log(enteredAge,enteredUsername);
    
    const dataHandler = (event)=>{
        event.preventDefault();
       let id = Math.random.toString();

       if(enteredAge==='' || enteredUsername===''){
        setError({
            title: 'Enter non-Empty Input!!',
            message:'something went wrong!'
        })
        return;
       }
       if(enteredAge<0){
        setError({
            title: 'Enter Valid Age (>0)',
            message:'something went wrong!'
        })
        return;
       }
       
        props.userHandler({key:id, username:enteredUsername,age:enteredAge});

        userNameChangeHandler('');
        AgeChangeHandler('');
       
    }

    return(
        <div>
        {error && <ErrorModal Error={error} onConfirm={errorHandler}/> }   
        <Card className="input">
        <form onSubmit={dataHandler}>
            <label>Username</label>
            <input type="text" class="input"placeholder="Username here" value={enteredUsername} onChange={usernameHandler}/>
            <label>Age</label>
            <input type="number" class="input" placeholder="age here" value={enteredAge} onChange={ageHandler}/>
            <button type="submit">Add</button>
        
            
        </form>
        </Card>
        </div>
    );

}
export default Userdata;