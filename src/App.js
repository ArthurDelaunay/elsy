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
            water: 1.5,
            heart: 120,
            temperature: -10,
            steps: 3000,
            addWaterHeart: 0,
            addWaterSteps: 0,
            addWaterTemperature: 0,
            linearGradient: "material-icons linear-background-text_1"
        }
    }
    onHeartChange = (e) => {
        this.setState({
                heart: Number(e.target.value)
        }, () => {
            if (this.state.heart > 120) {
                this.setState({
                    addWaterHeart: (this.state.heart - 120) * 0.0008
                })
                this.calculateWater()
            }
        })
        
        
    }
    onStepsChange = (e) => {
        this.setState({
                steps: Number(e.target.value)
        }, () => {
            if (this.state.steps > 10000) {
                this.setState({
                    addWaterSteps: (this.state.steps - 10000) * 0.00002
                })
                this.calculateWater()
            }
        })
        
    }
    onTemperatureChange = (e) => {
        this.setState({
                temperature: Number(e.target.value)
        }, () => {
            if (this.state.temperature > 20) {
                this.setState({
                    addWaterTemperature: (this.state.temperature - 20) * 0.02
                })
                this.calculateWater()
            }
        })  
    }
    
    calculateWater = () => {  
        this.setState({
            water: ((1.5 + this.state.addWaterHeart + this.state.addWaterSteps + this.state.addWaterTemperature).toFixed(2))
        })
        if (this.state.water < 1.7){
            this.setState ({
                linearGradient : "material-icons linear-background-text_1"
            })
        } else if (this.state.water < 1.9) {
            this.setState ({
                linearGradient : "material-icons linear-background-text_2"
            })
        } else if (this.state.water < 2.1) {
            this.setState ({
                linearGradient : "material-icons linear-background-text_3"
            })
        } else if (this.state.water < 2.3) {
            this.setState ({
                linearGradient : "material-icons linear-background-text_4"
            })
        } else if (this.state.water < 2.5){
            this.setState ({
                linearGradient : "material-icons linear-background-text_5"
            })
        } else {
            this.setState ({
                linearGradient : "material-icons linear-background-text_6"
            })
        }
    }

    render() {
        return (
            <div className="container-fluid box pt-0">
                <div className="row">
                    {/* Water */}
                    <Box 
                        icon="local_drink" 
                        className={this.state.linearGradient}
                        value={this.state.water} 
                        unit="L"
                    />
                    {/* Steps */}
                    <Box 
                        icon="directions_walk" 
                        color="black"
                        unit="steps"
                        value={this.state.steps}
                        min={stepsMin}
                        max={stepsMax}
                        onChange={this.onStepsChange}
                        className="material-icons flip-vertical-bck"
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
                        className="material-icons heartbeat"
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
                        className="material-icons rotate-scale-down"
                    />
                </div> 
            </div>
        );
    }
    }

export default App;