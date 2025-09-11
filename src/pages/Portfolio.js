import { useNavigate } from "react-router-dom";
function Portfolio(){
        const navigate=useNavigate();

    const proceedHome=()=>{ 
        navigate('/home');
    }; 
    return(
        <div>
            <h1>This is my portfolio</h1>
            <button type="button" class="btn btn-success" onClick={proceedHome}>My Home</button>
            
        </div>
    )
}

export default Portfolio;