import React, { useEffect } from 'react';

// APIS
import { getAllTask } from './API';

const Page = () => {
    const loadAllTask = () => {
        getAllTask()
            .then((data) => {
                if(data.error) {
                    console.log(data.error);
                }
                // console.log(data);
            })
    }

    useEffect(() => {
        loadAllTask();
    }, [])

    return (
        <div>
            <h1>Hello MERN TODO</h1>
        </div>
    )
}

export default Page;