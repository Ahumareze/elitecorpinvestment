import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import DashboardHeader from '../../Components/Utilities/DashboardHeader';

import '../Dashboard/Dashboard.css';
import './Wallets.css';
import Items from './Items';

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


    let container = (
        <>
            <DashboardHeader name={user ? user.fullname : ''} profilePic={user ? user.profilePic : null} postImage={postImage} openDrawer={openDrawer} navigate={() => props.history.push('/')} />
            <section className='Wa_section' style={{paddingTop: 50}}>
                <Items
                    title='Bitcoin(BTC)'
                    wallet='bc1qn877p472f3vfaf9072vx9fk0eznp4vcrp7wuj9'
                />
                <Items
                    title='Ethereum (ETH)'
                    subTitle=' (Erc20)'
                    wallet='0xA3340C3391c3dAB7a54072361FB9291e4459B9Ec'
                />
                <Items
                    title='Usdt (TETHER)'
                    subTitle=' (Trc20)'
                    wallet='TU17zGWN4fBGxYDAe3CnnaUKobsTYWyY3L'
                />
                <Items
                    title='Binance Smartchain (BNB)'
                    subTitle=' (Bep20)'
                    wallet='0xA3340C3391c3dAB7a54072361FB9291e4459B9Ec'
                />
                <Items
                    title='Dogecoin (DOGE)'
                    wallet='DRwDrg3YJ7TMu3KBnNSWUeGpRWUf45W1Yt'
                />
                <Items
                    title='Shiba Inu (SHIB)'
                    subTitle=' (Erc20)'
                    wallet='0xA3340C3391c3dAB7a54072361FB9291e4459B9Ec'
                />
            </section>
        </>
    )

    const navigate = (destination) => {
        props.history.push(destination)
    }

    return (
        <div className='Dashboard'>
            {!loading ? container : <Loading />}
            {drawer ? <SideDrawer closeDrawer={openDrawer} navigate={navigate} wallets /> : null}
        </div>
    );
}


export default Dashboard;