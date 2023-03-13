import React,{useState} from 'react';
import './AdvertModel.css';


let AdvertModal = ({clearAdvertModal}) => {
    
    return <div className='form_modal_screen'>

        <div className='modal_input_card'>
            
            <p>
            Do you need a website for your business.. contact us on  09071991647 </p>

            <button onClick={clearAdvertModal}>Got it !</button>
           
        </div>
    </div >
}

export default React.memo(AdvertModal)