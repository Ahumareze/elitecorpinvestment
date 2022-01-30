import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Error from '../../Components/Error/Error';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import DashboardHeader from '../../Components/Utilities/DashboardHeader';
import './Withdrawal.css';
import '../Dashboard/Dashboard.css';
import WithdrawSection from './WithdrawSection';

function Withdrawal(props) {
    const [withdrawals, setWithdrawals] = useState();
    const [drawer, setDrawer] = useState(false);
    // const [key, setKey] = useState();

    useEffect(() => {
        const key = localStorage.getItem('@key');
        // setKey(key);
        fetchPending(key);
    }, []);

    const fetchPending = (key) => {
        console.log('Started')
        axios.get('https://elite-corp-default-rtdb.firebaseio.com/users/' + key + '.json')
            .then(r => {
                console.log(r.data.pending)
                if(r.data.pending){
                    setWithdrawals(r.data.pending)
                }else{
                    setWithdrawals('Empty')
                }
            })
            .catch(e => console.log(e.Error  + ' Error'))
    }

    const openDrawer = () => {
        setDrawer(prev => !prev)
    }

    const navigate = (destination) => {
        props.history.push(destination)
    };

    let container = (
        <Error />
    )

    if(withdrawals){
        container = (
            <>
                <DashboardHeader openDrawer={openDrawer} />
                <WithdrawSection withdrawals={withdrawals} />
            </>
        )
    }

    return (
        <div className='Withdrawal_page'>
            {container}
            {drawer ? <SideDrawer closeDrawer={openDrawer} navigate={navigate} Withdrawal /> : null}
        </div>
    );
}

export default Withdrawal;