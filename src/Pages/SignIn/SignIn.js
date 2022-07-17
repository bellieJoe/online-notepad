import "./SignIn.scss";
import { FormHeader, FormInput, FormButton } from "../../Components/FormComponents/FormComponents";

import { Link } from "react-router-dom";

function SignIn(){
    return (
        <div className="SignIn">
            <div className="container">
                <form className="form-container">
                    <FormHeader content="Login" icon={<i className="fa-solid fa-right-to-bracket space-after"></i>} />
                    <FormInput label="Username or Email" type="text" required={true} />
                    <FormInput label="Password" type="password" required={true} />
                    <Link to="/">Forgot Password?</Link>
                    <FormButton type="submit" content="Sign In" icon={<i className="fa-solid fa-right-to-bracket space-after"></i>} />
                </form>
            </div>
        </div>
    );
}

export default SignIn;