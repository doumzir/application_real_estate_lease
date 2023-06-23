import '../../style/banner.scss';

function Banner({title, img}){
  console.log(title)
  return(
    <div  className='banner' style={{
      backgroundImage: `url(${img})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
      backgroundPositionY:"50%"

    }}>

    <h1 style={{
      backgroundColor:"rgba(0, 0, 0, 0.3)",
      backgroundBlendMode:"darken",

    }}>{title}</h1>
    </div>
  )
}
export default Banner