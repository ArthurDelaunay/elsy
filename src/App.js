import React from "react";
import Box from "./components/Box"
import './App.css';
import './styles/global.css'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            water: 0,
            heart: 120,
            temperature: -10,
            steps: 3000
        }
    }
    onHeartChange = (e) => {
        this.setState({
            heart: e.target.value
        })
    }
    onStepsChange = (e) => {
        this.setState({
            steps: e.target.value
        })
    }
    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }


    render() {
        return (
            <div className="container-fluid box">
                <div className="row">
                    {/* <p>Heart : {heartMin}</p>
                    <p>Temperature : {tempMin}</p>
                    <p>Steps : {stepsMin}</p> */}
                    {/* Water */}
                    <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
                    {/* Steps */}
                    <Box 
                        icon="directions_walk" 
                        color="black"
                        unit="steps"
                        value={this.state.steps}
                        min={stepsMin}
                        max={stepsMax}
                        onChange={this.onStepsChange}
                        />
                    {/* Heart */}
                    <Box 
                        icon="favorite" 
                        color="red" 
                        unit="bpm" 
                        value={this.state.heart} 
                        min={heartMin}
                        max={heartMax}
                        onChange={this.onHeartChange}
                    />
                    {/* Temperature */}
                    <Box 
                        icon="wb_sunny" 
                        color="yellow" 
                        unit="°C" 
                        value={this.state.temperature}
                        min={tempMin}
                        max={tempMax}
                        onChange={this.onTemperatureChange}
                    />

                </div> 
            </div>
        );
    }
    }

export default App;