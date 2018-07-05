import * as React from "react";
import { ITemperatureProp } from "./BoilingVerdict";

const scaleNames = {
    c : 'Celcius',
    f : 'Fahrenheit'
};

export interface ITemperatureState
{
    celsius? : any;
    temperature? : any;
    scale? : any;
}

class TemperatureInput extends React.Component<ITemperatureProp, ITemperatureState>
{
    constructor(props : ITemperatureProp)
    {
        super(props);

        // this.state = { temperature : ''};

        this.handleChange = this.handleChange.bind(this);
    }

    public render()
    {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>
        );
    }

    private handleChange(e : any)
    {
        // this.setState({ temperature : e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }
}

export default TemperatureInput;