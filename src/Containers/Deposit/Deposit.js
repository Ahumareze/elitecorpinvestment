import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import ChartWidget from '../../Components/TradingWidget/ChartWidget';
import DashboardHeader from '../../Components/Utilities/DashboardHeader';
import DepositBox from '../../Components/Utilities/DepositBox';

import TradingViewWidget from 'react-tradingview-widget';

import '../Dashboard/Dashboard.css';
import './Deposit.css';

function Dashboard(props) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [modal, setModal] = useState(false);
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
                        setUser(arr);
                        localStorage.setItem('@key', key)
                        localStorage.setItem('@localUsername', data[key].fullname)
                    }
                });
                setLoading(false)
            })
            .catch(e => {
                setLoading(false);
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

    const postDeposit = (data) => {
        const newData = {
            ...data,
            date: new Date().toDateString()
        }
        setLoading(true)
        axios.post('https://elite-corp-default-rtdb.firebaseio.com/deposit.json', newData)
            .then(r => {
                setLoading(false);
                setModal(true)
            })
            .catch(() => setLoading(false))
        // setModal(true)
    }

    // let container = () => {
    //     return <Component user={user} openDrawer={openDrawer} onInvest={onInvest} errorMessage={errorMessage} />
    // }

    // if(!user){
    //     container = () => {
    //         return <Error />
    //     }
    // }

    const DepModal = (
        <div className='DepModal'>
            <div className='DepModalMain'>
                <div className='DepModalMainP'>
                    <p>Kindly hold while your investment payment is confirmed</p>
                </div>
                <div className='DepModalMainBtn' onClick={() => {
                    setModal(false)
                    setReload(prev => prev + 1);
                }}>Close</div>
            </div>
        </div>
    );

    let container = (
        <>
            <DashboardHeader name={user ? user.fullname : ''} profilePic={user ? user.profilePic : null} openDrawer={openDrawer} postImage={postImage} navigate={() => props.history.push('/')} />
            <section className='DashSection2' style={{paddingTop: 100}}>
                <div className='Deposit_header'>
                    <h3>Deposit</h3>
                    <div className='DP_line' />
                    <p>Fund your account</p>
                </div>
                <DepositBox 
                    title='Coin Details' 
                    boxes={['Coin Name', 'Amount', 'Email', 'Wallet Adderss']} 
                    onClick={(data) => {
                        postDeposit(data)
                    } }
                    button='Invest'
                />
            </section>
            <div style={{ marginLeft: '20px', paddingTop: 50}}>
                <TradingViewWidget symbol="BTCUSDT"/>
            </div>
            {modal && DepModal}
        </>
    )

    const navigate = (destination) => {
        props.history.push(destination)
    }

    return (
        <div className='Dashboard'>
            {!loading ? container  : <Loading />}
            {drawer ? <SideDrawer closeDrawer={openDrawer} navigate={navigate} deposit /> : null}
        </div>
    );
}


export default Dashboard;