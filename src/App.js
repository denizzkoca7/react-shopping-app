import React, { useState, useEffect } from "react";
import Data from "./components/Data";
import { Header } from "./components/Header";
import datas from './datas.json'
import Basket from './components/Basket'






function App() {
    const [money] = useState(100000000);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(
            basket.reduce((acc, item) => {
                return acc + (item.amount * (datas.find(data => data.id === item.id).price))
            }, 0),
        )
    }, [basket])


    return (
        <>
            <Header total={total} money={money} />
            <div className="container">
                {datas.map(data => (

                    <Data key={data.id} total={total} setTotal={setTotal} data={data} money={money} basket={basket} setBasket={setBasket} />

                ))}
            </div>
            {total > 0 && (
                <Basket setBasket={setBasket} total={total} datas={datas} basket={basket} />

            )}

            <style jsx>
                {
                    `
                    .container{
                        display: flex;
                         max-width: 1200px;
                         flex-wrap: wrap;
                    }
                    #root{
                        background-color:#ddd
                    }
                    `
                }
            </style>


        </>
    );
}
export default App;
