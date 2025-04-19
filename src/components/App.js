import React, { useState } from 'react'
import menuItems from '../../data/menuItems.json'

const App = () => {
    const [items, setItems] = useState(menuItems)

    function handleClick (e){
        if(e.target.innerText === "Breakfast"){
            setItems(menuItems.filter(item => item.category === "breakfast"))
        }
        if(e.target.innerText === "Lunch"){
            setItems(menuItems.filter(item => item.category === "lunch"))
        }
        if(e.target.innerText === "Shakes"){
            setItems(menuItems.filter(item => item.category === "shakes"))
        }
        if(e.target.innerText === "All"){
            setItems(menuItems)
        }
    }

    return (
        <div id='main' style={{ padding: "6px" }}>
            <h2>Our Menu</h2>
            <div>
                <button onClick={handleClick}>All</button>&nbsp;&nbsp;
                <button id='filter-btn-1' onClick={handleClick}>Breakfast</button>&nbsp;&nbsp;
                <button id='filter-btn-2' onClick={handleClick}>Lunch</button>&nbsp;&nbsp;
                <button id='filter-btn-3' onClick={handleClick}>Shakes</button>&nbsp;&nbsp;
            </div>
            <br />
            <div style={{display: 'flex', gap: '25px', flexWrap: 'wrap'}}>
                {items && items.map((item, ind) => {
                    return (
                        <div key={ind} style={{ width: "20%", border: "2px solid black", marginBottom: "15px", padding: "0px 8px" }}>
                            <img src={item.url} alt='img' style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <p><b>Name:</b> {item.name}</p>
                            <p><b>Description:</b> {item.description}</p>
                            <p><b>Price:</b> ${item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App