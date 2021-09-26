import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import First from "../../images/html.png";
import Second from "../../images/css.jpg";
import Third from "../../images/java.png"
import Majid from "../../images/majid.jpg";



function Card() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={First} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Second} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Third} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-sm-4" style={{ backgroundColor: " rgb(14, 37, 61)" }}>
                        <h1 style={{ color: "white" }}>Profile</h1>
                        <img src={Majid} width="80%" />
                    </div>
                    <div className="col-sm-8" style={{ backgroundColor: " rgb(14, 37, 61)", color: "white" }}>
                        <h1>My Name is Majid Shahid I am developer</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row justify-content-md-center">
                <div className="col-sm-4" style={{ backgroundColor: " rgb(14, 37, 61)",marginTop:"5px" }}>
                        <h1 style={{color:"white"}}> Experience</h1>
                        <ul>
                            <li style={{color:"white"}}>HTML 5</li>
                            <li style={{color:"white"}}>CSS 3</li>
                            <li style={{color:"white"}}>JAVASCRIPT</li>
                            <li style={{color:"white"}}>BOOTSTRAP</li>
                            <li style={{color:"white"}}>FIREBASE</li>
                        </ul>
                     
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Card;