import React from 'react';
import CardImage from './CardImage';
import Header from './Header'
import Footer from './Footer'
function CardItem(){
    return(
    
        <div className="main-container">
        <CardImage/>
        <main className="main-content">
        <Header/>
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
        <Footer/>
        </div>
       
        
    )
}

export default CardItem