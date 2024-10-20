import Container from "../../components/Container";
import logo from "../../images/logo.png"
import { MdOutlineLightMode } from "react-icons/md";


function header() {
  return (
    <div className="py-4 border-b">
        <Container className="flex justify-between items-center" >
        {/* <img src={logo} alt="Brand Logo" /> */}
        <div className="font-bold cursor-pointer">
          <a className="flex" href="#">
          <h2 className="text-4xl text-red-700" >MD Masodur</h2>
          <h2 className="text-4xl text-black" >Rahman</h2>
          </a>
        </div>
        <MdOutlineLightMode className="text-xl cursor-pointer" />
        </Container>
        

    </div>
  )
}

export default header
 
