import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../Context/ContextApi';
import DisplayMyEvent from './DisplayMyEvent';


const MyEvent = () => {
    const { user } = useContext(authContext)
    const [event, setevent] = useState()

    useEffect(() => {
        fetch(`https://assignment-11-server-sable.vercel.app/service?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setevent(data))
            .catch(err => console.error(err))
    }, [user?.email])
    // console.log(event);
    return (
        <div className='md:grid grid-cols-3 gap-10'>
            {
                event?.length === 0 ? <><p className='text-rose-800 text-4xl font-extrabold text-center'>No Services Added</p></> : <>{event?.map(ev => <DisplayMyEvent key={ev._id} data={ev}></DisplayMyEvent>)}</>
            }
        </div>
    );
};

export default MyEvent;