import * as React from "react";

export interface ITemperatureProp
{
    celsius? : any;
    scale? : any;
    temperature? : any;
    onTemperatureChange? : any;
}

function BoilingVerdict(props : ITemperatureProp)
{
    if (props.celsius >= 100) 
    {
        return <p>The water would boil.</p>;
    }
    else
    {
        return <p>The water would not boil.</p>;
    }
}

export default BoilingVerdict;