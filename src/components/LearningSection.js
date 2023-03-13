import React from 'react';
import LearningCard from './LearningCard';
import './LearningSection.css';
import {learningSectionData} from '../data'

function LearningSection() {

    return (
        <div className='learning-section'>
            <h1 className='heading'>What we will teach you</h1>
            <p>we teach a variety of programming languages and tools to help you develop websites,apps for your business .</p>
            <div className='learning-container'>
                {learningSectionData.map(data=><LearningCard {...data}/>)}
            </div>


        </div>

    );
}

export default React.memo(LearningSection);