

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';

import '../Dashboard/Dashboard.css';
import './Referral.css';
import DashboardHeader from '../../Components/Utilities/DashboardHeader';
import RComponent from './RComponent';
import { FaExclamationTriangle } from 'react-icons/fa';

function Referrals(props) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const [reload, setReload] = useState(0)

    useEffect(() => {
        getEmail();
    }, [reload]);

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

    const openDrawer = () => {
        setDrawer(prev => !prev)
    }
    const onInvest = (data) => {
        console.log(data)
        if(!data.coinname || !data.amount || !data.wallet || !data.wallet){
            setErrorMessage('Fields Missing')
        }else if(data.amount.includes('$')){
            setErrorMessage('Amount mustn\'t include $')
        }else{
            const datae = {
                pending: {
                    wallteId: data.recievingId,
                    coin: data.coinname,
                    amount: data.amount
                },
                ...user
            };
            axios.put('https://elite-corp-default-rtdb.firebaseio.com/users/' + user.key + '.json', datae )
                .then(r => console.log(r.data))
                .catch(e => {
                    // console.log(typeof(e));
                    // setErrorMessage(e)
                })
        }
    }

    const navigate = (destination) => {
        props.history.push(destination)
    };

    const postImage = (img) => {
        const formData = new FormData()
        formData.append('file', img);
        formData.append('upload_preset', 'kqiuojxc');
        setLoading(true)

        axios.post('https://api.cloudinary.com/v1_1/ahumareze/image/upload', formData)
            .then(r => {
                // console.log(r.data.url, user.key)
                postDatabase(r.data.url);
                setUser({...user, profilePic: r.data.url});
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
            })

    };

    const postDatabase = (url) => {
        const datae = {
            ...user,
            profilePic: url
        }
        axios.put('https://elite-corp-default-rtdb.firebaseio.com/users/' + user.key + '.json', datae )
            .then(r => console.log(r.data))
            .catch(e => {
                // console.log(typeof(e));
                // setErrorMessage(e)
            })
    }

    let view = (
        <div>
            <DashboardHeader name={user ? user.fullname : ''} profilePic={user ? user.profilePic : null} openDrawer={openDrawer} navigate={navigate} postImage={() => console.log('')}/>
            <RComponent username={user ? user.fullname : '' } />
        </div>
    )
    if(!user){
        view = (
            <div className='RefScreenError'>
                <FaExclamationTriangle size={70} color='#03255C'/>
                <p>Error loading screen</p>
                <span>please refresh page</span>
            </div>
        )
    }

    return (
        <div className='Dashboard'>
            {!loading ? view : <Loading />}
            {drawer ? <SideDrawer closeDrawer={openDrawer} navigate={navigate} referrals /> : null}
        </div>
    );
}


export default Referrals;