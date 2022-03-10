import React from 'react'


const BasketItems = ({ item, data }) => {
    return (
        <>
            <li className="basket-product">{data.title} * <span>{item.amount}</span> </li>

<style jsx> {
    `
    li{
        padding: 10px 0;
        font-size:24px;
        color:red;
    }

    li span {
        color:black;
    }
    `
}</style>
        </>
    )
}

export default BasketItems
