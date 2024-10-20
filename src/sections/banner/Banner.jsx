import Container from "../../components/Container"
import bannerImage from '../../images/banner.png';


function Banner() {
  return (
    <div>
        <Container className="grid grid-cols-2 items-center">
           <div>
            <h1 className="text-5xl font-bold mb-3 text-rose-700">Task  Management</h1>
            <p className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
            </div> 
            <div className=" m-auto">
                <img className="max-w-sm" src={bannerImage} alt="BannerImage" />
            </div>
        </Container>
    </div>
  )
}

export default Banner
