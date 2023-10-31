import React from 'react';
import './Monday.scss';
import img1 from'../../assests/crm_icon.png';
import img2 from'../../assests/design_icon.png';
import img3 from'../../assests/dev_icon.png';
import img4 from'../../assests/hr_icon.png';
import img5 from'../../assests/marketing_icon.png';
import img6 from'../../assests/operations_icon.png';
import img7 from'../../assests/pmo_icon.png';
import img8 from'../../assests/workflows_icon.png';

function Monday() {
    return (
        <>
            <div className='mid-section'>
                <div className='mid-section-row'>
                <div className='row-1'>
                    <h1>
                        A platform built for a <br/>
                        new way of working
                    </h1>
                    <span>
                        what would you like to manage with monday.com Work OS?
                    </span>
                </div>
                
                <div className='row-2'>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img2}/>
                        Creative & Design
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img3}/>
                        Software Development
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img4}/>
                        Marketing
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img5}/>
                        Project Management
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img6}/>
                        Sales & CRM
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img7}/>
                        Task Management
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img8}/>
                        HR
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img1}/>
                        Operations
                    </div>
                    <div className='row-2-col'>
                         <input  type='checkbox'/>
                        <img src= {img4}/>
                        More workflows
                    </div>
                </div>

                <div className='mid-bottom'>
                    <button>Get Started</button>
                    <div className='bottom-content'>
                    <li>No credit card needed</li>
                    <li>Unlimited time on Free plan</li>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Monday;