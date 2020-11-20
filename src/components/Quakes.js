import React, { Component } from 'react';
import Quake from '../models/Quake';

class Quakes extends Component {
  constructor() {
    super();
    this.state = {
        quakes: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    Quake.all().then((res) => {
        this.setState({
            quakes: res.data.features,
        })
    })
  }

  render() {
    return (
      <div>
          <ul>
              {this.state.quakes.map((quake, index) => {
                  return (
                  <p key={index}>{quake.properties.title}</p>
              )})};         
          </ul>
      </div>
    );
  }
}

export default Quakes