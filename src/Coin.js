import React from 'react';
import './Coin.css';
const Coin = ({name,id,Symbol,is_new,rank,type}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <h1>{ id}</h1>
                    <h1> {name}</h1>
                    <p className="coin-symbol">{Symbol}</p>
                    <p className="coin-name">{name}</p>

                </div>
                <div className="coin-data">
                    <p className="coin-price">{is_new}</p>
                
                    <p className="coin-rank">{rank}</p>
                    <p className="coin-type">{type}</p>

                </div>
            </div>
        </div>      
    );
};
export default Coin; 