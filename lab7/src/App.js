import React from 'react';
import './App.css';
import Header from './components/task1/Header';
import Content from './components/task1/Content';
import Image from './components/task1/Image';
import GoodsCard from './components/task2/GoodsCard';

function App() {
  const goods = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: 45999,
      image: 'https://content.rozetka.com.ua/goods/images/big/567207410.jpg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: 54999,
      image: 'https://content2.rozetka.com.ua/goods/images/big/431788017.jpg'
    },
    {
      id: 3,
      name: 'iPhone 14',
      price: 32999,
      image: 'https://content.rozetka.com.ua/goods/images/big/284957985.jpg'
    },
    {
      id: 4,
      name: 'Xiaomi 14 Pro',
      price: 32999,
      image: 'https://content1.rozetka.com.ua/goods/images/big/603331331.jpg'
    },
    {
      id: 5,
      name: 'OnePlus 12',
      price: 29999,
      image: 'https://content2.rozetka.com.ua/goods/images/big_tile/519837079.jpg'
    },
    {
      id: 6,
      name: 'Nothing Phone (2)',
      price: 21999,
      image: 'https://content.rozetka.com.ua/goods/images/big/619438446.jpg'
    }
  ];

  return (
    <div className="App">
      <div className="task-section">
        <h1>Завдання 1</h1>
        <Header />
        <Content />
        <Image />
      </div>

      <div className="task-section">
        <h1>Завдання 2</h1>
        <div className="goods-gallery">
          {goods.map((item) => (
            <GoodsCard 
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;