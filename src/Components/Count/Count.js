import React, { useState } from 'react';

const Count = (props) => {

    const [count, setCount] = useState(0);

    
    const plus = () => {
        // const oldCount = count;
        // const newCount = oldCount + 1;
        // setCount (newCount);
        setCount ( count + 1);
    }

    const minus = () => {
        // const oldCount = count;
        // const newCount = count - 1;
        // setCount (newCount);
        setCount ( count - 1);
    }



    return (
        <div>
            <div className="count mt-5">
                <h1>{count}</h1>
                <button onClick={plus} className='btn btn-success py-2 px-4 mx-3'> + </button>
                <button onClick={minus} className='btn btn-danger py-2 px-4 mx-3'> - </button>
            </div>
        </div>
    );
};

export default Count;