import React, { useState,useEffect } from 'react';

export default function ExampleComponent() {
    const [count,setCount] = useState(0);
    const [data,setData] = useState({}); //intializing results from fetch as a object

    useEffect(() => {
        //function calls or Logic 
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error=> console.error('Error fetching data', error))
        //clean up function (optional)
        // return () => {
        //     console.log("Component will unmount or dependencies have changed : cleanup")
        // };
    }, [count])
    //the dependencies array determines if the functional arguement of useEffect will be called again.

    return(
        <div>
            <p> Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment count/change joke</button>
            {
                data.value && (
                    <p>Data: {data.value}</p>
                )
            }
        </div>
    )
}