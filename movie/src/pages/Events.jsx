import React from "react";

import { Link } from "react-router-dom";
import comedy from "../assets/image/STANDUP COMEDY SHOW1.avif";
import comedy1 from "../assets/image/karthik live in trichy.avif";
import comedy2 from "../assets/image/banker.avif";
import comedy3 from "../assets/image/world.avif";
import comedy4 from "../assets/image/toxic.avif";
import comedy5 from "../assets/image/oml.avif";

export const Events = () => {
  return (
    <>
      <center>
        <h2>Events in Trichy</h2>

        <div>
          <table>
            <th>
              <img src={comedy} alt="comedy1" width="200" height="400" />
              <h5 className="card-title">Alt+tab life of Ram</h5>
              <p className="card-text">
                Tamil Standup
                <br />
                Standup Comedy
              </p>
              <Link to="eventsticket" className="btn btn-success">
                Booking Now
              </Link>
            </th>
            <th>
              <img src={comedy1} alt="comedy2" width="200" height="400" />
              <h5 className="card-title">
                Karthik Live in
                <br /> Trichy
              </h5>
              <p className="card-text">Concerts</p>
              <Link to="eventsticket" className="btn btn-success">
                Booking Now
              </Link>
            </th>

            <th>
              <img src={comedy2} alt="comedy3" width="200" height="400" />
              <h5 className="card-title">
                Baker OP in
                <br /> The House{" "}
              </h5>
              <p className="card-text">Standup comedy</p>

              <Link to="eventsticket" className="btn btn-success">
                Booking Now
              </Link>
            </th>
            <th>
              <img src={comedy3} alt="comedy4" width="200" height="400" />
              <h5 className="card-title">
                The Under 25 <br />
                Summit
              </h5>
              <p className="card-text">Food</p>

              <Link to="eventsticket" className="btn btn-success">
                Booking Now
              </Link>
            </th>
            <th>
              <img src={comedy4} alt="comedy5" width="200" height="400" />
              <h5 className="card-title">
                Abhishek Upmanyu
                <br /> LIVE
              </h5>
              <p className="card-text">Comedy</p>

              <Link to="eventsticket" className="btn btn-success">
                Booking Now
              </Link>
            </th>

            <th>
              <img src={comedy5} alt="comedy6" width="200" height="400" />
              <h5 className="card-title">
                OML Comedy <br />
                Pit Stop
              </h5>
              <p className="card-text">Comedy</p>
              <Link to="eventsticket" className="btn btn-success">
                Booking Now
              </Link>
            </th>
          </table>
        </div>
      </center>
    </>
  );
};
export default Events;
