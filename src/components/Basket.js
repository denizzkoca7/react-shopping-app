import React from 'react'
import BasketItems from './BasketItems'

const Basket = ({ basket, setBasket, total, datas }) => {
    const resetBasket = () => {
        setBasket([])
    }
    return (
        <>
            <div className="basket-container container text-center p-4 d-flex flex-column">
                <h3 className="text-center basket-header">Shopping Basket</h3>
                <ul >
                    {basket.map(item => (

                        <BasketItems total={total} item={item} data={datas.find(x => x.id === item.id)} />

                    ))}
                </ul>
                <div className="total text-end mt-3">Total : {total}$ </div>
                <button className="btn btn-danger mt-3" onClick={resetBasket} > Clear Basket</button>

            </div>
            <style jsx>
                {
                    `
                .basket-header{
                    color:red;
                    font-size:34px
                }
                ul{
                    list-style-type:none;
                    border-bottom: 1px solid #ffff;
                }
                .total{
                    font-size:24px;
                }
                `
                }
            </style>
        </>
    )
}

export default Basket
