import {User} from "lucide-react";
const Form = () => {
    return(
        <>
            <div className="form">
                <h1 ><User/>FORM</h1>
                <form className="summa">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Phone number"  pattern="[0-9]{10}"/>
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="UserName" required/>
                    <input type="password" placeholder="Password" required/>
                    <button className="buu" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
export default Form;