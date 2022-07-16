import "./ActionBarComponents.scss";
import { Link } from "react-router-dom";

export const Action = (props) => {
    return (
        <Link to="new" className={`Action " ${props.position && props.position} ${props.color ? props.color : 'light'}`}>
            {props.content}
        </Link>
    );
}
