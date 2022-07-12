import "./SignUp.scss";
import { FormHeader, FormInput, FormButton } from "../../Components/FormComponents/FormComponents";
import { Link } from "react-router-dom";

function SignUp(props) {
    return (
        <div className="SignUp">
            <div className="container">
                <form className="form-container">
                    <FormHeader content="Sign Up" icon={<i className="fa-solid fa-user  space-after"></i>} />
                    <FormInput label="Username" type="text" />
                    <FormInput label="Email" type="text" />
                    <FormInput label="Password" type="password" />
                    <FormInput label="Re-Enter Password" type="password" />
                    <FormButton content="Sign Up" icon={<i className="fa-solid fa-right-to-bracket space-after"></i>} />
                </form>
            </div>
        </div>
    );
}

export default SignUp;