import React from 'react'

class Box extends React.Component {
    render() {
        return (
                
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize : 100, color : this.props.color}}>{this.props.icon}</span>
                <p>{this.props.value}{this.props.unit}</p>
                {(this.props.icon !== "local_drink") && <input type="range" onChange={this.props.onChange} min={this.props.min} max={this.props.max} value={this.props.value} />}
            </div>
        )
    }

}

export default Box