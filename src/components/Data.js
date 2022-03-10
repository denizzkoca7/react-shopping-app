import React from 'react'


const Data = ({ data, basket, total, money, setBasket }) => {

    const amountNumber = basket.find(item => item.id === data.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === data.id)
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== data.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: data.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const checkBasket = basket.find(item => item.id === data.id)
        checkBasket.amount -= 1
        if (checkBasket.amount === 0) {

            setBasket([...basket.filter(item => item.id !== data.id)])
        } else {
            setBasket([...basket.filter(item => item.id !== data.id), checkBasket])
        }
    }


    return (
        <>
            <div className="products">
                <div className="product">
                    <img className="data-image" src={data.image} alt="" />
                    <h4>{data.title}</h4>
                    <h6>${data.price}</h6>
                    <div className="actions d-flex ali ">
                        <button className="btn btn-outline-primary" disabled={!amountNumber} onClick={removeBasket} >Sell</button>
                        <div className="amounts ms-2 me-2" >{(amountNumber && amountNumber.amount) || 0}</div>
                        <button className="btn btn-primary" disabled={money < total + data.price} onClick={addBasket}>Buy</button>
                    </div>
                </div>
            </div >
            <style jsx>{

                `
                .products{
                    padding: 0 10px;
                    margin : 15px 0
                }
               
                .product  {
                    background-color: #eee;
                    padding: 10px ;
                    margin-top: 10px;
                }
            
                .product h4{
                    text-transform: capitalize;
                }

                .data-image {
                    width:250px
                }
                `
            } </style>
        </>
    )
}

export default Data;
