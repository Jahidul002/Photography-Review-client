import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../Context/ContextApi';

const MyEvent = () => {
    const { user } = useContext(authContext)
    const [event, setevent] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/service?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setevent(data))
            .catch(err => console.error(err))
    }, [user?.email])
    console.log(event);
    return (
        <div>
            {
                event?.map()
            }
        </div>
    );
};

export default MyEvent;