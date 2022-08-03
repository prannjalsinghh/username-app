import Card from "./UI/Card";
import './userShow.css'
const UsersShow = (props) =>{

    return(
        <Card className="users">
        { 
            props.allUsers.map(user=>
                <div className="user">       
                    <div>{user.username}</div> 
                    <div>{user.age}</div>
               </div>
                )
        }
        </Card>
    )
    

}
export default UsersShow;