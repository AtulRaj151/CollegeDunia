import React, { Component } from "react";
import collegeImage from "../assets/images/college_02.jpg";

class CollegeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img className="card-header-img" src={collegeImage} />
          <div className="college-rating-container">
            <div className="college-rating-box">
              <span>4.5/5</span>
              <br />
              <span className="rating-remark">Very Good</span>
            </div>
          </div>
          <div className="college-tags">
            <p>best colleges in 2018</p>
            <p>2kms away</p>
          </div>
          <div className="ranking"></div>
        </div>
        <div className="card-footer">
          <div className="college-name">
            <span>Hansraj College of Delhi University</span>
          </div>
          <div className="college-start-rating">4/5</div>
          <div>
            <span className="college-nearby-places-1">
              Near Vishwavidyalya Metro Station
            </span>
            &nbsp;
            <span className="college-nearby-places-2">
              2 Kms away from bus stand
            </span>
          </div>
          <div className="college-famous-nearby-places">
            <span className="text-style1 text-style-2">93% Match</span> &nbsp;
            <span className="text-style1">2.5km</span>
            from GTB Nagar <span className="text-style1 ">7 Kms</span> from
            Rajiv Chowk
          </div>
          <div className="offer-container">
            <div className="college-offer-text">
              <p>
                Flat Rs<span className="text-style1 text-style-2">2000</span>{" "}
                off + upto Rs
                <span className="text-style1 text-style-2 ">500</span>wallet! to
                avail... <span className="text-style-3">Login</span>
              </p>
            </div>
            <div className="college-amenties">
              <span>Free Cancellation</span>

              <span>Free Wifi</span>
            </div>
          </div>
          <div className="college-fee">
            <span className="college-orignal-fee">₹6,875</span>
            <span className="college-discount-percent">20</span>
            <p className="college-discounted-fee">₹ 5,768</p>
            <span className="fee-cycle">Per Semester (3months)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CollegeCard;
