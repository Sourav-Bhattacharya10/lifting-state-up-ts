import * as React from "react";
import BoilingVerdict, { ITemperatureProp } from "./BoilingVerdict";
import TemperatureInput, { ITemperatureState } from "./TemperatureInput";

function toCelsius(fahrenheit : any) 
{
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius : any) 
{
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature : any, convert : any) 
{
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) 
    {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component<ITemperatureProp, ITemperatureState>
{
    constructor(props : ITemperatureProp)
    {
        super(props);

        this.state = {temperature: '', scale: 'c'};

        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    
    public render()
    {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
    }

    private handleCelsiusChange(temperature : any)
    {
        this.setState({ scale : 'c', temperature });
    }

    private handleFahrenheitChange(temperature : any)
    {
        this.setState({ scale : 'f', temperature });
    }
}

export default Calculator;