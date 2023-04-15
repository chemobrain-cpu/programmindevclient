import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './AdvertModel.css';


let AdvertModal = ({clearAdvertModal}) => {
    let navigate = useNavigate()
    
    return <div className='form_modal_screen'>

        <div className='modal_input_card'>
            
            <p>
            Create a website or an app to start making money in 2023. Contact us or whatsapp on 09071991647 to learn how. Its free! Hurry! </p>

            <button onClick={()=>navigate('/camera')}>Got it !</button>
           
        </div>
    </div >
}

export default React.memo(AdvertModal)