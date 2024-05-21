import React, { useEffect, useState } from "react";
import VoiceToTextInput from "./VoiceToTextInput";
import classes from "./Chat.module.css";

const API = "sk-Your API Key";

function Religious() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([]);
  const [btn, setBtn] = useState("Send");
  const [loading, setLoading] = useState("<h1>hello</h1><p>hi</p>");

  useEffect(() => {
    setMessage(inputText);
  }, [inputText]);

  const getData = async (msg) => {
    setBtn("loading...");
    let ms;
    if (msg !== "0") {
      ms = msg;
    } else if (!message) {
      setBtn("Send");
      return false;
    } else {
      ms = message;
    }
    const data = await fetch(`https://api.openai.com/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${ms}`,
          },
        ],
      }),
    });
    const res = await data.json();
    console.log(res);
    let result = res.choices[0].message.content;
    let hello = result.split('\n')
    console.log(hello);
    let arr = [...response, [ms, hello]];
    setResponse(arr);
    setBtn("Send");
    setLoading("");
    setMessage("");
  };

  const sendMessage = async () => {
    setResponse([]);
    setLoading("loading...");
    if (!message) {
      setResponse([]);
      setLoading("please enter a chat");
      return false;
    }
    const data = await fetch(`http://localhost:8000/chat/${message}`);
    const result = await data.text();
    if (result === "error") {
      console.log(result);
      setResponse(
        "sorry cannot provide information on that. This is against my rules and regulations"
      );
      setLoading("");
      return false;
    }
    const linesArray = result.split("\n");
    console.log(linesArray);
    setResponse(linesArray);
    setLoading("");
  };

  return (
    <div className={classes.main}>
      <h1>JusticePal</h1>
      <div className={classes.box}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => getData("0")}>{btn}</button>
        <VoiceToTextInput inputText={inputText} setInputText={setInputText} />
        <p>this bot can make some mistakes. Please Re-Check the information</p>
      </div>
      <div className={classes.container}>
        {!loading ? (
          <ol>
            {response.map((e, i) => {
              return (
                <li key={i}>
                  <b>YOU. </b>
                  <br></br>
                  <p>{e[0]}</p>
                  <br></br>
                  <b>JUSTICEPAL. </b>
                  <br></br>
                  <br></br>
                  <ul className={classes.list}>
                    {e[1].map((ele,ind)=>{
                      return(<><li key={ind}>
                        {ele}
                      </li></>)
                    })}
                  </ul>
                  <br></br>
                  <br></br>
                </li>
              );
            })}
          </ol>
        ) : (
          <>
            <h3 className={classes.h3}>Religious as Marginalized Groups </h3>
            <p className={classes.para}>
              Religious groups, comprising diverse faith traditions and beliefs,
              often face marginalization, discrimination, and persecution due to
              their religious identity. Despite the principles of religious
              freedom and tolerance espoused by many societies, religious
              minorities continue to encounter various forms of prejudice,
              intolerance, and exclusion that undermine their rights and
              freedoms.
            </p>
            <div className={classes.buttons}>
              <h4>3 Most FAQ </h4>
              <button
                onClick={() => {
                  getData(`What is religious discrimination, and how does it affect individuals and communities?
                `);
                }}
              >
                What is religious discrimination, and how does it affect
                individuals and communities?
              </button>
              <button
                onClick={() => {
                  getData(`What are the main challenges faced by religious minorities in contemporary society?
                `);
                }}
              >
                What are the main challenges faced by religious minorities in
                contemporary society?
              </button>
              <button
                onClick={() => {
                  getData(`What measures can be taken to promote religious tolerance and coexistence in diverse societies?
                `);
                }}
              >
                What measures can be taken to promote religious tolerance and
                coexistence in diverse societies?
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Religious;
