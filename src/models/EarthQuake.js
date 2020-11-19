import axios from 'axios';
let quakeFeed = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'

class EarthQuakeModel {
	static all() {
		let request = axios.get(quakeFeed);
		return request;
	}
}

export default EarthQuakeModel;