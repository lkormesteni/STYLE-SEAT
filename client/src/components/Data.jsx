import React, { useState, useEffect } from "react";
import axios from 'axios';
import SalonDetails from "./SalonDetails.jsx";

const Data = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        console.log('Fetching data...');
        try {
            const response = await axios.get('http://127.0.0.1:5000/salon')
            setData(response.data);
            console.log('Data fetched:', response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="products">
                {data.map((element, key) => (
                    <SalonDetails key={key} element={element}/>
                ))}        
        </div>
    );
}

export default Data;
