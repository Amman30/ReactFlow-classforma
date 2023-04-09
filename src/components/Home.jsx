import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
    const [getdata, setgetData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://64307b10d4518cfb0e50e555.mockapi.io/workflow")
            .then(async (response) => await response.json())
            .then((data) => setgetData(data))
            .catch((error) => console.log(error));
        setLoading(false);
    }, []);

    return loading ? <div>loading...</div> : (
        <div className='Home'>
            {getdata.map((data) => (
                <div className='container' key={`${data.id}`}>

                    <div className="name">

                        <Link to={`/name/${data.id}`}>
                            {data.name}
                        </Link>
                    </div>
                    <div className='input'>{data.input_type}</div>
                    <div className='createdAt'>{data.createdAt}</div>
                </div>
            ))}
        </div>
    );
}

export default Home;




















