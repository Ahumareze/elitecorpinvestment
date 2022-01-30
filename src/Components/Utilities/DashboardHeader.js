import React, { useEffect, useState } from 'react';

import menu from '../../Assets/hamburger.png';
import bell from '../../Assets/bell.png';

import {FiHome, FiX} from 'react-icons/fi';
import './DashboardHeader.css';
import man from '../../Assets/man.png';

import {GiHamburgerMenu} from 'react-icons/all'

const width = window.innerWidth;

function DashboardHeader(props) {

    const [change, setChange] = useState(false);
    const [newName, setNewName] = useState();

    useEffect(() => {
        if(props.name.length > 8){
            var string = props.name;
            var length = 7;
            var trimmedString = string.substring(0, length);
            setNewName(trimmedString + '...')
        }else{
            setNewName(props.name)
        }
    }, [props.name])

    const changeImg = (img) => {
        setChange(false);
        props.postImage(img)
    }

    return (
        <>
            <div className='DashboardHeader' style={{top: 0, position: 'absolute'}}>
                <div className='DH_1'>
                    <div className='DH_icon'>
                        <GiHamburgerMenu size={30} onClick={props.openDrawer} />
                    </div>
                    <div className='DH_Greetings' style={{color: '#fff'}}>Greetings {newName} !</div>
                </div>
                <div className='DH_2'>
                    <div className='DH_bellIcon'>
                        <FiHome size={25} opacity={0.7} onClick={props.navigate}  />
                    </div>
                    <div className='BH_userProfile'>
                        {width > 750 ? 
                            <>
                                <div className='BH_ProfilePic' onClick={() => setChange(true)}>
                                    {props.profilePic ? <img src={props.profilePic} alt=''/> : <img src={man} alt='' />  }
                                </div>
                                <div>{props.name}</div>
                            </>
                            : <div className='BH_ProfilePic' style={{margin: 0}} onClick={() => setChange(true)}>
                                {props.profilePic ? <img src={props.profilePic} alt=''/> : <img src={man} alt='' />  }
                            </div> }
                    </div>
                </div>
            </div>
            {change &&
            <section style={{backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 0, height: '100vh', width: '100%', zIndex: 30, display: 'grid', alignItems: 'center'}} >
                <div className='cont_cont' >
                    <div className='Profile_canclebtn'>
                        <FiX size={30} color='#fff' style={{marginRight: 10}} onClick={() => setChange(false)} />
                    </div>
                    <div className='ChangeProfile_main'>
                        <div className='MainProfilePicDisplay'>
                            {props.profilePic ? <img src={props.profilePic} alt=''/> : <img src={man} alt='' />  }
                        </div>
                        <p>Change Display Picture</p>
                        <input type='file' onChange={(e) => changeImg(e.target.files[0])} />
                    </div>
                </div>
            </section> }
        </>
    );
}

export default DashboardHeader;