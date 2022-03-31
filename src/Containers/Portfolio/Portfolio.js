import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Converter from '../../Components/Converter/Converter';
import ChartWidget from '../../Components/TradingWidget/ChartWidget';
import DashboardHeader from '../../Components/Utilities/DashboardHeader';
import Item from './Item';
import TradingViewWidget from 'react-tradingview-widget';
import './Portfolio.css';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import BalanceBox from './BalanceBox';
import Loading from '../../Components/Loading/Loading';

function Portfolio(props) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const Username = user ? user.fullname.split(' ') : '0'
    const newUsername = Username[0];
    const num = newUsername.charCodeAt() * 543;
    const refCode = newUsername + num;

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

    const openDrawer = () => {
        setDrawer(prev => !prev)
    }

    const navigate = (e) => {
        props.history.push(e)
    }

    const view = (
        <div className='PortfolioPage'>
            <DashboardHeader name={user ? user.fullname : ''} profilePic={user ? user.profilePic : null} postImage={postImage} openDrawer={openDrawer} navigate={() => props.history.push('/')} />
            <p className='PortHeader'>My Investment <span>Plans</span></p>
            <div className='BB_flexer'>
                <BalanceBox
                    title='Total Account Balance'
                    plan1={user && user.balance}
                    plan2={user && user.balance2}
                    plan3={user && user.balance3}
                    plan4={user && user.balance4}
                    refBalance={user && user.refBalance}
                    showRefBal
                />
                <BalanceBox
                    title='Return of Investment (ROI)'
                    plan1={user && user.profit}
                    plan2={user && user.profit2}
                    plan3={user && user.profit3}
                    plan4={user && user.profit4}
                />
            </div>
            <div className='PortfolioContainer'>
                <Item title='Plan 1' balance={user && user.balance } active={user && user.active1 } expired={user && user.expired1} open={() => navigate('/plan1')} />
                <Item title='Plan 2' balance={user && user.balance2} active={user && user.active2 } expired={user && user.expired2} open={() => navigate('/plan2')} />
                <Item title='Plan 3' balance={user && user.balance3} active={user && user.active3 } expired={user && user.expired3} open={() => navigate('/plan3')} />
                <Item title='Plan 4' balance={user && user.balance4} active={user && user.active4 } expired={user && user.expired4} open={() => navigate('/plan4')} />
            </div>
            <div className='PortConverter'>
                <Converter />
            </div>
            <div className='PP_referall'>
                <p className='PP_title'>Refer Us & Earn</p>
                <p className='PP_main' >Use this code to invite your family and friends and earn referral bonuses </p>
                <p className='PP_mainCode'>{user && refCode}</p>
            </div>
            <TradingViewWidget symbol="BTCUSDT"/>
            {drawer ? <SideDrawer closeDrawer={openDrawer} navigate={navigate} dashboard /> : null}
        </div>
    )

    const loader = (
        <div style={{backgroundColor: '#fff', height: '100vh', width: '100%'}}>
            <Loading />
        </div>
    )

    return (
        <>
            {!loading ? view : loader }
        </>
    );
}

export default Portfolio;