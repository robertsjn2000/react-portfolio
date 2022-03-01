import React, {useState} from "react";
import {validateEmail} from "../utils/formValidation";

function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const inputChange = (e) =>{
        const {target} = e;
        const inputName = target.name;
        const inputValue = target.value;
        if(inputName === "name"){
            setName(inputValue);
        }else if(inputName === "email"){
            setEmail(inputValue);
        }else if(inputName === "message"){
            setMessage(inputValue);
        }
    };
    const formSubmit = (e) => {
        e.preventDefault();
        if(!name){
            setError("Name is required.");
            return;
        }
        if(!email){
            setError("Email is required.");
            return;
        }
        if(!message){
            setError("Message is required.");
            return;
        }
        if(validateEmail(email) === false){
            setError("Invalid Email Address");
            return;
        }
        alert("Thankyou for contacting me.");
        setName("");
        setEmail("");
        setMessage("");
        setError("")
    };
    return (
        <div>
            <h1>Contact Me</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="name"
                        value= {name}
                        onChange = {inputChange}
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        value= {email}
                        onChange = {inputChange}
                    />
                    <br />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="5"
                        cols="50"
                        value= {message}
                        onChange = {inputChange}
                    ></textarea>
                    <br />
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={formSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
            {error && (
                <div>
                    <p className="error-text text-danger">{error}</p>
                </div>
            )

            }
        </div>
    );
}

export default Contact;