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
        fetch(`http://localhost:5000/service?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setevent(data))
            .catch(err => console.error(err))
    }, [user?.email])
    // console.log(event);
    return (
        <div className='md:grid grid-cols-3 gap-10'>
            {
                event?.map(ev => <DisplayMyEvent key={ev._id} data={ev}></DisplayMyEvent>)
            }
        </div>
    );
};

export default MyEvent;