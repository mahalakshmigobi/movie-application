import React from "react";

import movie1 from "../assets/image/ayalan.jpg";
import movie2 from "../assets/image/kadavul.jpg";
import movie3 from "../assets/image/download.jpg";
import movie4 from "../assets/image/o2.jpg";
import movie5 from "../assets/image/yosi.jpg";
import movie6 from "../assets/image/vijay.avif";

export const Movies = () => {
  return (
    <>
      <br />
      <br />
      <div>
        <center>
          <table>
            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?q=ayalaan+movie+trailer&&mid=34442E5291129F9565FA34442E5291129F9565FA&FORM=VAMGZChttps://www.bing.com/videos/riverview/relatedvideo?&q=labur+panthu+trailer+link&qpvt=labur+panthu+trailer+link&mid=D121E3BFFCCBF35DEF54D121E3BFFCCBF35DEF54&&FORM=VRDGAR"
                target="_blank"
              >
                <img src={movie1} alt="movie1" width="200" height="400" />
              </a>
              <tr>
                <h2>Ayalan</h2>
                {/* <h4>**** 4.0 Rating</h4> */}
                <a href="https://www.filmibeat.com/tamil/movies/ayalaan/story.html#synopsis">
                  description
                </a>
              </tr>

              <td>
                <a href="Newmovie">Booking Now</a>
              </td>
            </th>

            <th>
              <a
                href="https://www.youtube.com/watch?v=d8sQJMBWXJk"
                target="_blank"
              >
                <img src={movie2} alt="movie2" width="200" height="400" />
              </a>
              <tr>
                <h2>kkadavulada</h2>
                <a href="https://en.wikipedia.org/wiki/Kasethan_Kadavulada_(2023_film)">
                  description
                </a>
              </tr>
              <td>
                <a href="Newmovie">Booking Now</a>
              </td>
            </th>
            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?q=dragon+movie+trailer&mid=FA3A12204A8DD0126BF1FA3A12204A8DD0126BF1&FORM=VIRE"
                target="_blank"
              >
                <img src={movie3} alt="movie3" width="200" height="400" />
              </a>
              <tr>
                <h2>Dragon</h2>
                <a href="https://en.wikipedia.org/wiki/Dragon_(2025_film)">
                  description
                </a>
              </tr>
              <td>
                <a href="Newmovie">Booking Now</a>
              </td>
            </th>
            <th>
              <a
                href="https://www.bing.com/videos/riverview/relatedvideo?q=o2+movie+trailer&mid=1CCFD83EF915855A4E981CCFD83EF915855A4E98&FORM=VIRE"
                target="_blank"
              >
                <img src={movie4} alt="movie4" width="200" height="400" />
              </a>
              <tr>
                <h2>o2</h2>
                <a href="https://en.wikipedia.org/wiki/O2_(2022_film)">
                  description
                </a>
              </tr>
              <td>
                <a href="Newmovie">Booking Now</a>
              </td>
            </th>

            <th>
              <a
                href="https://www.youtube.com/watch?v=_zOn4eUpGLA"
                target="_blank"
              >
                <img src={movie5} alt="movie5" width="200" height="400" />
              </a>
              <tr>
                <h2>Yosi</h2>
                <a href="https://www.imdb.com/title/tt27179211/">description</a>
              </tr>
              <td>
                <a href="Newmovie">Booking Now</a>
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
                <a href="https://en.wikipedia.org/wiki/The_Greatest_of_All_Time">
                  description
                </a>
              </tr>
              <td>
                <a href="Newmovie">Booking Now</a>
              </td>
            </th>
          </table>
        </center>
      </div>
    </>
  );
};
export default Movies;
