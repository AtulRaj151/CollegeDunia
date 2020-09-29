import React, { Component } from "react";
import collegeImage from "../assets/images/college_02.jpg";

class CollegeCard extends Component {
  render() {
    const { college } = this.props;

    return (
      <div className="card">
        <div className="promoted">PROMOTED</div>

        <div className="card-header">
          <img className="card-header-img" src={collegeImage} />
          <div className="college-rating-container">
            <div className="college-rating-box">
              <span>{college.rating}/5</span>
              <br />
              <span className="rating-remark">{college.rating_remarks}</span>
            </div>
          </div>
          <div className="college-tags">
            {/* <p>{college.tags[0]}</p>
            <p>{college.tags[1]}</p> */}
            {college.tags.map((tag, index) => (
              <p key={`tag-${index}`}>{tag}</p>
            ))}
          </div>
          <div className="ranking"></div>
        </div>
        <div className="card-footer">
          <div className="college-name-rate-wrapper">
            <div className="college-name">
              <span>{college.college_name}</span>
            </div>
            <div className="college-start-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <div className="college-location">
            <span className="college-nearby-places-1">
              {college.nearest_place[0]}
            </span>
            &nbsp;
            <span className="college-nearby-places-2">
              {college.nearest_place[1]}{" "}
            </span>
          </div>
          <div className="college-famous-nearby-places">
            <span className="text-style1 text-style-2">93% Match</span> &nbsp;
            <span className="text-style1">
              {college.famous_nearest_places.split(" ")[0]}{" "}
            </span>
            {/* from GTB Nagar{" "} */}
            {college.famous_nearest_places
              .split(",")[0]
              .split(" ")
              .slice(1)
              .join(" ")}
            <span className="text-style1 ">
              {college.famous_nearest_places.split(",")[1].split(" ")[1]}
              {" km"}
            </span>{" "}
            {college.famous_nearest_places
              .split(",")[1]
              .split(" ")
              .slice(3)
              .join(" ")}
          </div>
          <div className="offer-container">
            <div className="college-offer-text">
              <p>
                Flat Rs
                <span className="text-style1 text-style-2">
                  {college.offertext.split("+")[0].split(" ")[1].slice(2)}
                </span>
                off + upto Rs
                <span className="text-style1 text-style-2 ">
                  {" "}
                  {college.offertext.split("+")[1].split(" ")[3]}
                </span>
                wallet! to avail... <span className="text-style-3">Login</span>
              </p>
            </div>
            <div className="college-amenties">
              {/* <span>Free Cancellation</span>,&nbsp;
              <span>Free Wifi</span> */}
              {college.amenties.map((item, index) => (
                <span key={`amenty-${index}`}>{". " + item}</span>
              ))}
            </div>
          </div>
          <div className="college-fee">
            <span className="college-orignal-fee">
              ₹{college.original_fees}
            </span>
            <span className="college-discount-percent">
              <li>{college.discount}</li>
            </span>
            <p className="college-discounted-fee">₹{college.discounted_fees}</p>
            <span className="fee-cycle">{college.fees_cycle}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CollegeCard;
