import React from "react";
import CollegeCard from "./CollegeCard";
import data from "../colleges.json";
import InfiniteScroll from "react-infinite-scroll-component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      colleges: [],
      index: 0,
      hasMore: true,
    };
  }
  componentDidMount() {
    const { colleges } = data;
    let newCollege = [colleges[0], colleges[1], colleges[2], colleges[3]];
    console.log(newCollege);
    this.setState({
      colleges: newCollege,
      index: 4,
    });
  }
  loadmore = () => {
    console.log("index", this.state.index);
    if (this.state.index >= data.colleges.length - 1) {
      this.setState({ hasMore: false });
      return;
    }

    this.setState({
      colleges: [
        ...this.state.colleges,
        this.state.index < data.colleges.length &&
          data.colleges[this.state.index + 1],

        this.state.index < data.colleges.length &&
          data.colleges[this.state.index + 2],
      ],
      index: this.state.index + 2,
    });
  };

  render() {
    // const { colleges } = data;
    console.log("this state changes", this.state.colleges);
    return (
      <div className="App">
        <div className="main">
          {/* {colleges.map((college, index) => (
            <CollegeCard college={college} key={index} />
          ))} */}
          <InfiniteScroll
            dataLength={this.state.colleges.length}
            className="main"
            next={this.loadmore}
            hasMore={this.state.hasMore}
          >
            {this.state.colleges.length > 0
              ? this.state.colleges.map(
                  (college, index) =>
                    college != undefined && (
                      <CollegeCard college={college} key={index} />
                    )
                )
              : null}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default App;
