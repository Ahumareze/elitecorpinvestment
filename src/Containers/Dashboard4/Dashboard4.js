import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import Component from './Component';

import '../Dashboard/Dashboard.css';

function Dashboard(props) {

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

    let container = () => {
        return <Component user={user} openDrawer={openDrawer} onInvest={onInvest} errorMessage={errorMessage} />
    }

    if(!user){
        container = () => {
            return <Error />
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

    return (
        <div className='Dashboard'>
            {!loading ? <Component user={user} openDrawer={openDrawer} onInvest={onInvest} errorMessage={errorMessage} postImage={postImage} navigate={() => props.history.push('/')} /> : <Loading />}
            {drawer ? <SideDrawer closeDrawer={openDrawer} navigate={navigate} dashboard /> : null}
        </div>
    );
}


export default Dashboard;