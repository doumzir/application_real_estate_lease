import '../../style/banner.scss';
import background from'../../image/montain.jpg'
function Banner({title}){
  console.log(title)
  return(
    <div  className='banner' style={{
      backgroundImage: `url(${background})`,
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