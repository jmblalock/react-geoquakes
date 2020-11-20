import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import Quake from '../models/Quake';
import logo from '../images/earthquake.png';

class MapContainer extends React.Component {
	constructor() {
			super();
			this.state = {
					quakes: [],
					loading: true,
			}
	}

	componentDidMount() {
			this.fetchData();
	}

	fetchData = () => {
			Quake.all().then((res) => {
					this.setState({
							quakes: res.data.features,
							loading: false,
					})
			})
	}

	render() {
			if (this.state.loading) {
					return <h2>Loading...</h2>
			} else {
					return (
					<Map
							google={this.props.google}
							zoom={5}
							initialCenter={{
								lat: this.state.quakes[0].geometry.coordinates[1],
								lng: this.state.quakes[0].geometry.coordinates[0]
							}}
							style={{width:'39vw'}}>

							{this.state.quakes.map((quake, index) => {
									return (
										<Marker 
												key={index}
												position={{
													lat: quake.geometry.coordinates[1],
													lng: quake.geometry.coordinates[0]
												}}
												icon= {{
														url: logo,
														scaledSize: new this.props.google.maps.Size(30,30)
												}}
										/>
									)
							})}
					</Map>
					);
			}
	}
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'),
})(MapContainer);