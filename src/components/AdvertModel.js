import React,{useState} from 'react';
import './AdvertModel.css';


let AdvertModal = ({clearAdvertModal}) => {
    
    return <div className='form_modal_screen'>

        <div className='modal_input_card'>
            <div className='cancel'>

                <span className='material-icons' onClick={clearAdvertModal}>
                    clear
                </span>

            </div>
            <h1>P.dev</h1>
            <p>
            Do you need a website for your business.
            Wether you are into cleaning business,fashion,blogging , health care business , beauty care , local home food delivery , you run a brooker , do you run a school , an hotel , a restuarant , you sure need a website . contact us on call or on whatsapp via 09071991647 </p>
           
        </div>
    </div >
}

export default React.memo(AdvertModal)