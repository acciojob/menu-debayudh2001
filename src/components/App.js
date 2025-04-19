import React, { useState } from 'react'
import menuItems from '../../data/menuItems.json'

const App = () => {
    const [items, setItems] = useState(menuItems)
    const [breakfast, setBreakfast] = useState([])
    const [lunch, setLunch] = useState([])
    const [shakes, setShakes] = useState([])

    function handleClick(e) {
        if (e.target.innerText === "Breakfast") {
            setBreakfast(menuItems.filter(item => item.category === "breakfast"))
            setItems([])
            setLunch([])
            setShakes([])
        }
        if (e.target.innerText === "Lunch") {
            setLunch(menuItems.filter(item => item.category === "lunch"))
            setItems([])
            setBreakfast([])
            setShakes([])
        }
        if (e.target.innerText === "Shakes") {
            setShakes(menuItems.filter(item => item.category === "shakes"))
            setItems([])
            setBreakfast([])
            setLunch([])
        }
        if (e.target.innerText === "All") {
            setItems(menuItems)
            setBreakfast([])
            setLunch([])
            setShakes([])
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
            {items.length !== 0 && <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap'}}>
                {items.map((item, ind) => {
                    return (
                        <div key={ind} style={{ width: "20%", border: "2px solid black", marginBottom: "15px", padding: "0px 8px" }}>
                            <img src={item.url} alt='img' style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <p><b>Name:</b> {item.name}</p>
                            <p><b>Description:</b> {item.description}</p>
                            <p><b>Price:</b> ${item.price}</p>
                        </div>
                    )
                })}
            </div>}
            {breakfast.length !== 0 && <div data-test-id="menu-item-breakfast" style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                {breakfast.map((item, ind) => {
                    return (
                        <div key={ind} style={{ width: "20%", border: "2px solid black", marginBottom: "15px", padding: "0px 8px" }}>
                            <img src={item.url} alt='img' style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <p><b>Name:</b> {item.name}</p>
                            <p><b>Description:</b> {item.description}</p>
                            <p><b>Price:</b> ${item.price}</p>
                        </div>
                    )
                })}
            </div>}
            {lunch.length !== 0 && <div data-test-id="menu-item-lunch" style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                {lunch.map((item, ind) => {
                    return (
                        <div key={ind} style={{ width: "20%", border: "2px solid black", marginBottom: "15px", padding: "0px 8px" }}>
                            <img src={item.url} alt='img' style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <p><b>Name:</b> {item.name}</p>
                            <p><b>Description:</b> {item.description}</p>
                            <p><b>Price:</b> ${item.price}</p>
                        </div>
                    )
                })}
            </div>}
            {shakes.length !== 0 && <div data-test-id="menu-item-shakes" style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                {shakes.map((item, ind) => {
                    return (
                        <div key={ind} style={{ width: "20%", border: "2px solid black", marginBottom: "15px", padding: "0px 8px" }}>
                            <img src={item.url} alt='img' style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                            <p><b>Name:</b> {item.name}</p>
                            <p><b>Description:</b> {item.description}</p>
                            <p><b>Price:</b> ${item.price}</p>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default App