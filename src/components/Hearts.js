import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import AuthService from '../services/auth.service';
import './Heart.css';

function Hearts(props) {
    const currentUser = AuthService.getCurrentUser();

    const [likeID, setLikeID] = useState();
    //const [loading, setLoading] = useState(true);
    const [likeState, setLikeState] = useState(false);
    //const [error, setError] = useState(null);

    useEffect(() => {
            AuthService.getLikes(currentUser.id).then(res => {
            let listOfFaves = [];
            //console.log(res.data);
            for(let i in res.data) {
    		listOfFaves.push(res.data[i].job_id);
    		if(res.data[i].job_id === props.job_id){

    			setLikeID(res.data[i].id);
    			setLikeState(true);
    		}
    	    };
    	    //const result = listOfFaves.includes(props.jobs_id);
            
        })
            .catch (err => console.log(err))

    }, []);
    

    
    async function handleLike(e){
    		if(!likeState) {
	    		await AuthService.postLike(currentUser.id, props.job_id).then(
		        (response) => {
		          
		          
		          let res = Object.values(response);
		          console.log(parseInt(res[2]));
		          let int = parseInt(res[2]);
		          setLikeID(int);
		          console.log(likeID);
		          setLikeState(prev => !prev);
		        },
		        (error) => {
		          const resMessage =
		            (error.response &&
		              error.response.data &&
		              error.response.data.message) ||
		            error.message ||
		            error.toString();
		
		          console.log(resMessage);
		        }
		      	);
		      	//console.log("I added likeID ${likeID}", likeID);
		      	//window.location.reload(true);
    		}else{	
    		
    			console.log(likeID);
    		
    			await AuthService.deleteLike(likeID).then(
		        (response) => {
		          console.log(response);
		          setLikeState(prev => !prev);
		        },
		        (error) => {
		          const resMessage =
		            (error.response &&
		              error.response.data &&
		              error.response.data.message) ||
		            error.message ||
		            error.toString();
		
		          console.log(resMessage);
		        }
		      	);
    			//console.log("I unlike likeID ${likeID}", likeID);

    		}
    		
    		
	    
	} 
 
	
    return (
    	<div>
    	<React.StrictMode>
	    	<Button onClick={handleLike} className="bg-transparent border-0 fs-3">
	    		{likeState ? 
	    			(<i className="bi bi-suit-heart-fill btnactive"></i>) 
	    			:(<i className="bi bi-suit-heart-fill"></i>)
	    		}
	    	</Button>
    	</React.StrictMode>
    	</div>
	    
        

    );
};

export default Hearts;
