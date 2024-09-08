import hero from './hero.JPG'




function CardImage() {
    return (
      <div className='card-layout'>
        <img src={hero} alt='image-of-dev' className='hero-image' />
      </div>
    )    
}

export default CardImage
