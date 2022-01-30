import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './Referral.css';
import '../../Containers/Dashboard/Dashboard.css';
import DashboardHeader from '../../Components/Utilities/DashboardHeader';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import Loading from '../../Components/Loading/Loading';
import RComponent from './RComponent';

function Referrals(props) {
    const [drawer, setDrawer] = useState(false);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getEmail();
    }, []);

    const getEmail = () => {
        const data = localStorage.getItem('@localemail');
        if(data){
            fetchUser(data)
        }
    }

    const fetchUser = (email) => {
        setLoading(true)
        axios.get('https://elite-corp-default-rtdb.firebaseio.com/users.json')
            .then(r => {
                const data = r.data;
                let arr = {};
                Object.keys(data).map((key, i) => {
                    if(data[key].email === email){
                        arr = {...data[key], key: key}
                        console.log(arr)
                        setUser(arr);
                        localStorage.setItem('@key', key)
                        localStorage.setItem('@localUsername', data[key].fullname)
                    }
                });
                setLoading(false)
            })
            .catch(e => {
                setLoading(false);
                console.log(e)
            })
    }

    const navigate = (destination) => {
        props.history.push(destination)
    };

    const openDrawer = () => {
        setDrawer(prev => !prev)
    }

    const container = (
        <div className='Dashboard'>
            <DashboardHeader name={user ? user.fullname : ''} profilePic={user ? user.profilePic : null} openDrawer={openDrawer} navigate={navigate} postImage={() => console.log('')}/>
            <RComponent username={user ? user.fullname : '' } />
            {drawer && <SideDrawer closeDrawer={openDrawer} navigate={navigate} referrals /> }
        </div>
    )

    return (
        <div style={{height: '100vh', backgroundColor: '#fff'}}>
            {!loading ? container : <Loading /> }
        </div>
    );
}

export default Referrals;