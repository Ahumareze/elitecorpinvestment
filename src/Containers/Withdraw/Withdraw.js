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
import './Withdraw.css';
import WithItem from './WithItem';
import WithContainer from './WithContainer';

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
                        console.log(arr)
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
    const onInvest = (e) => {
        const num = new Date().valueOf();
        const date = new Date().toDateString()
        
        setLoading(true);

        const transaction = {...user.transaction};
        transaction[num] = {
            coinname: e.coinname,
            amount: e.amount,
            wallet: e.recievingId,
            walletName: e.wallet,
            status: 'pending',
            date: date,
            network: e.network
        }
        const data = {
            ...user,
            transaction
        }
        axios.put('https://elite-corp-default-rtdb.firebaseio.com/users/' + user.key + '.json', data )
            .then(r => {
                console.log(r.data);
                setLoading(false);
                setModal(true);
            })
            .catch(e => {
                console.log(e);
                setLoading(false)
            })
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

    const DepModal = (
        <div className='DepModal'>
            <div className='DepModalMain'>
                <div className='DepModalMainP'>
                    <p>Kindly hold while your withdrawal is being processed </p>
                </div>
                <div className='DepModalMainBtn' onClick={() => {
                    setModal(false)
                    setReload(prev => prev + 1);
                }}>Close</div>
            </div>
        </div>
    )

    let container = (
        <>
            <DashboardHeader name={user ? user.fullname : ''} profilePic={user ? user.profilePic : null} postImage={postImage} openDrawer={openDrawer} navigate={() => props.history.push('/')} />
            <section className='DashSection2' style={{paddingTop: 100}}>
                <div className='Deposit_header'>
                    <h3>Withdraw</h3>
                    <div className='DP_line' />
                </div>
                <DepositBox 
                    title='Withdrawal Details' 
                    boxes={['Coin name to withdraw to', 'Withdrawal Amount', 'Wallet name e.g Binance, Trust wallet e.t.c', 'Recieving Wallet Adderss']} 
                    onClick={(data) => {
                        onInvest(data)
                    }}
                    button='Withdraw'
                    errorMessage={errorMessage}
                    extraMessage='Note: To process your pending withdrawal 30% tax is to be charged on profit. Capital allowance of 25% is given to professional investors, while all other categories of investors pay the general tax or profit (30%) as stated in the terms and conditions. Contact the admins for more informations.'
                />
                <div className='WithdrawRequestsDiv'>
                    <p className='WithdrawalHistoryTitle' >Withdrawal History</p>
                    <WithContainer transaction={user && user.transaction} />
                </div>
            </section>
            <div style={{ marginLeft: '20px', paddingTop: 50}}>
                <TradingViewWidget symbol="ETHUSDT" />
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
            {drawer ? <SideDrawer closeDrawer={openDrawer} navigate={navigate} withdraw /> : null}
        </div>
    );
}


export default Dashboard;