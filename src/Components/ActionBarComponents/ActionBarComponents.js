import "./ActionBarComponents.scss";

export const Action = (props) => {
    return (
        <button className={`Action " ${props.position && props.position} ${props.color ? props.color : 'light'}`}>
            {props.content}
        </button>
    );
}
