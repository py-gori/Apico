import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Progress,
} from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = { placeName: null, weather: null, temperature: null, loading: false}

        this.Places = [{name: '札幌', id: 2128295}, {name: '東京', id: 1850147},
                        {name: '大阪', id: 1853909}, {name: '沖縄', id: 1894616}]
        this.OpenWeatherMapKey = ""
    }

    selectPlace(index) {
        if (index > 0) {
            const place = this.Places[index - 1]
            this.setState({placeName: place.name, weather: null, temperature: null, loading: true})
            this.getWeather(place.id)
        }
    }

    getWeather(id) {
        const delay = (mSec) => new Promise((resolve) => setTimeout(resolve, mSec))

        fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${this.OpenWeatherMapKey}&id=${id}&lang=ja&units=metric`)
        .then((response) => response.json())
        .then((json) => {
            delay(700)
            .then(() => this.setState({weather: json.weather[0].description, temperature: json.main.temp, loading: false}))
        })
        .catch((response) => {
            this.setState({loading: false})
            console.log('** error **', response)
        })
    }

    render() {
        return (
            <Card style={{margin: 30}}>
                <CardHeader title={<Title place={this.state.placeName} />} />
                <CardBody>
                    <Progress animated  color={this.state.loading ? 'success' : 'info'}
                    top={40} left={100} />
                    <WeatherInformation weather={this.state.weather} temperature={this.state.temperature} />
                </CardBody>
                <CardBody>
                    <PlaceSelector places={this.Places} actionSelect={(ix) => this.selectPlace(ix)} />
                </CardBody>
            </Card>
        )
    }
}

const Title = (props) => (
    <h1>{props.place ? props.place + 'の天気' : '天気情報'}</h1>
)

Title.propTypes = {
    place: PropTypes.string
}

const WeatherInformation = (props) => (
    <List>
        <ListItem leftIcon={<WeatherIcon/>} primaryText={props.weather} />
        <ListItem leftIcon={<TemperatureIcon />} primaryText={props.temperature ? `${props.temperature} ℃` : '' } />
    </List>
)

WeatherInformation.propTypes = {
    weather: PropTypes.string,
    temperature: PropTypes.number
}

const PlaceSelector = (props) => (
    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
            場所を選択
        </DropdownToggle>
        <DropdownMenu>
            {props.places.map((place, ix) => 
            <DropdownItem key={ix} value={ix}>{place.name}</DropdownItem>)}
        </DropdownMenu>
    </Dropdown>
)

PlaceSelector.propTypes = {
    places: PropTypes.array,
    actionSelect: PropTypes.func
}

export default Weather;
