import React from "react";
import { Link } from "react-router-dom";
import movie1 from "../assets/image/labur panthu.avif";
import movie2 from "../assets/image/lucky baskhar.avif";
import movie3 from "../assets/image/meiyazhagan.avif";
import movie4 from "../assets/image/ulagapor.avif";
import movie5 from "../assets/image/vaalai.avif";
import movie6 from "../assets/image/vijay.avif";
// import logo1 from '../assets/image/discount.png';

// import logo2 from '../assets/image/discount1.jpg';
// import logo3 from '../assets/image/discount3.jpg';
export const Home = () => {
  return (
    <>
      <br />
      <br />
      <div>
        <center>
          <table>
            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?&q=labur+panthu+trailer+link&qpvt=labur+panthu+trailer+link&mid=D121E3BFFCCBF35DEF54D121E3BFFCCBF35DEF54&&FORM=VRDGAR"
                target="_blank"
              >
                <img src={movie1} alt="movie1" width="200" height="400" />
              </a>
              <tr>
                <h2>Laburpanthu</h2>
              </tr>
              <td>
                <Link to="/movieticket" className="btn btn-success">
                  Booking Now
                </Link>
              </td>
              {/* <button><a href="movieticket">Booking Now</a></button></td> */}
            </th>

            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?q=lucky+baska+trailer+link+download&mid=866DD5DF2894F5B5D18D866DD5DF2894F5B5D18D&FORM=VIRE"
                target="_blank"
              >
                <img src={movie2} alt="movie2" width="200" height="400" />
              </a>
              <tr>
                <h2>Lucky baskar</h2>
              </tr>
              <td>
                <Link to="/movieticket" className="btn btn-success">
                  Booking Now
                </Link>
              </td>
            </th>
            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?&q=meiyalagan+trailer+link&&mid=3AF776B71A15B4BE91AE3AF776B71A15B4BE91AE&&FORM=VRDGAR"
                target="_blank"
              >
                <img src={movie3} alt="movie3" width="200" height="400" />
              </a>
              <tr>
                <h2>Meiyalagan</h2>
              </tr>
              <td>
                <Link to="/movieticket" className="btn btn-success">
                  Booking Now
                </Link>
              </td>
            </th>
            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?&q=kadai+ulaga+por+trailer+link&&mid=6298778E05A261FC599F6298778E05A261FC599F&&FORM=VRDGAR"
                target="_blank"
              >
                <img src={movie4} alt="movie4" width="200" height="400" />
              </a>
              <tr>
                <h2>Kadasiulagapor</h2>
              </tr>
              <td>
                <Link to="/movieticket" className="btn btn-success">
                  Booking Now
                </Link>
              </td>
            </th>

            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?&q=valai+trailer+link&&mid=3010B80670FC606F2D013010B80670FC606F2D01&&FORM=VRDGAR"
                target="_blank"
              >
                <img src={movie5} alt="movie5" width="200" height="400" />
              </a>
              <tr>
                <h2>Vazlai</h2>
              </tr>
              <td>
                <Link to="/movieticket" className="btn btn-success">
                  Booking Now
                </Link>
              </td>
            </th>

            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?&q=goat++trailer+link&&mid=03F6743B512C7384742503F6743B512C73847425&&FORM=VRDGAR"
                target="_blank"
              >
                <img src={movie6} alt="movie6" width="200" height="400" />
              </a>
              <tr>
                <h2>GOAT</h2>
              </tr>
              <td>
                <Link to="/movieticket" className="btn btn-success">
                  Booking Now
                </Link>
              </td>
            </th>
          </table>
        </center>
      </div>
    </>
  );
};
export default Home;
