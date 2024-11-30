type ButtonProps = {
    buttonType?: "Primary" | "Secondary" | "Tertiary"
    function: (...args: any) => void;
    text: string;
    tooltip?: string;
    disabled: boolean;
    style?: React.CSSProperties;
}

export default function Button(props: ButtonProps){
    switch(props.buttonType){
        case "Primary":
            return(
                <button
                className="btn-primary"
                title={props.tooltip}
                disabled={props.disabled}
                style={props.style}
                onClick={() => props.function()}>
                    {props.text}
                </button>
            )
        case "Secondary":
            return(
                <button
                className="btn-secondary"
                title={props.tooltip}
                disabled={props.disabled}
                style={props.style}
                onClick={() => props.function()}>
                    {props.text}
                </button>
            )
        case "Tertiary":
            return(
                <button
                className="btn-tertiary"
                title={props.tooltip}
                disabled={props.disabled}
                style={props.style}
                onClick={() => props.function()}>
                    {props.text}
                </button>
            )
        default:
            return(
                <button
                title={props.tooltip}
                disabled={props.disabled}
                style={props.style}
                onClick={() => props.function()}>
                    {props.text}
                </button>
            )
    }
}