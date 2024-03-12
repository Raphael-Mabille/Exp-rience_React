import React from 'react';
import { useState } from 'react';
import './App.css';

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
    <li key={product.id}
        className={'text-slate-' + product.id * 100}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}>
       {product.title}
    </li>
);

function App() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    const user = {
        name: 'John Doe',
        class: 'text-slate-50'
    };
    return (
        <div>
            <h1 className={user.class}>Welcome to my app {user.name}!</h1>
            <h2>here's a list of product you may want to buy: {listItems}</h2>
            <MyButton count={count} onClick={handleClick}/><br></br>
            <MyButton count={count} onClick={handleClick}/>
        </div>
    );
}

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick} >
            Clicked {count} times
        </button>
    );
}


export default App;
