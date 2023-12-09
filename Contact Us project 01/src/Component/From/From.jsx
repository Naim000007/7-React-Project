import React, { useState } from "react";
import img from '../../assets/Service 24_7-pana 1.jpg'
import Button from "../Button/Button";
import { AiTwotoneMail } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import "./From.css";

function From() {
    const [name, setName] = useState('s');
    const [email, setemail] = useState('');
    const [text, setText] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        setName("name", event.target[0].value);
        setemail("email", event.target.email.value);
        setText("text", event.target.text.value);
    }
    
  return (
    <>
      <section className="container01">
        <div className="from-cotainer">
          <Button
            text={`Chat`}
            icone={<RiMessage2Line style={{ fontSize: "20px" }} />}
          ></Button>
          <Button text={`call`} icone={<IoCallOutline />}></Button>
        </div>
        <Button
          text={`via Email`}
          isTrue={true}
          icone={<AiTwotoneMail />}
        ></Button>
        <form className="input--from" onSubmit={onSubmit}>
          <div className="fromfild">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="name-from"
            />{" "}
            <br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="name-from"
            />{" "}
            <br />
            <textarea
              type="text"
              name="text"
              rows="8"
              placeholder="Text"
              className="text-area"
            />
          </div>
          <Button text={`send`}></Button>
          {/* <div>{name + " " + email + " " + text}</div> */}
        </form>
        <img src={img} alt="" className="img" />
      </section>
     
    </>
  );
}

export default From;
