import React from 'react'

class Box extends React.Component {
    render() {
        return (
                
            <div className="box col-sm-3 col-6">
                {(this.props.icon === "local_drink")
                    ? <span className={this.props.className} style={{fontSize : 100}}>{this.props.icon}</span>
                    : <span className={this.props.className} style={{fontSize : 100, color : this.props.color}}>{this.props.icon}</span>
                }
                <p>{this.props.value} {this.props.unit}</p>
                {(this.props.icon !== "local_drink" && this.props.icon !== "directions_walk") && <input type="range" onChange={this.props.onChange} min={this.props.min} max={this.props.max} value={this.props.value} />}
                {(this.props.icon === "directions_walk") && <input type="range" onChange={this.props.onChange} min={this.props.min} max={this.props.max} value={this.props.value} step="1000" />}
            </div>
        )
    }

}

export default Box