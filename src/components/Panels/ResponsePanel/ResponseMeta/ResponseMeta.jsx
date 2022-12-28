import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from 'semantic-ui-react';

const ResponseMeta = ({ status, time, size}) => {

const red = "https://i.postimg.cc/XvrqjXS2/red.png";
const green = "https://i.postimg.cc/6QP7nnfJ/green.png";
const blue = "https://iili.io/HTxEf2t.png";
const yellow = "https://iili.io/HTxGqPV.md.png";

const [url, setUrl] = useState("");
const [message,setMessage] = useState("")
console.log(status)

useEffect(()=>{
  if(status === 200){
    setUrl(green)
    setMessage("SUCCESS")
  } else if(status>= 301 && status <=305){
    setUrl(blue)
  } else if(status>= 401 && status <= 405){
    setUrl(red)
    setMessage("ERROR")
  } else if(status >= 501 && status <= 505){
    setUrl(yellow)
  } else if(status === "undefined"){
    setUrl("...")
  } else {
    setUrl("")
  };

},[status])

  return (
    <Grid.Row columns={3}>
      <Grid.Column computer={2} tablet={4} mobile={5}>
        <div>
          <b>Status: </b>
          {status}
        </div>
      </Grid.Column>
      <Grid.Column computer={2} tablet={4} mobile={5}>
        <div>
          <b>Indicator: </b>
          {status && (
            <img
              src={url}
              alt="Indicator"
              width="15px"
              styles={{ display: "block", marginBottom: "-5px" }}
            />
          )}
        </div>
      </Grid.Column>
      <Grid.Column computer={2} tablet={4} mobile={5}>
        <div>
          <b>Message: </b>
          {message}
        </div>
      </Grid.Column>
      <Grid.Column computer={2} tablet={4} mobile={5}>
        <div>
          <b>Time:</b> {time}
        </div>
      </Grid.Column>
      <Grid.Column computer={2} tablet={4} mobile={5}>
        <div>
          <b>Size:</b> {size}
        </div>
      </Grid.Column>
    </Grid.Row>
  );
}

export default ResponseMeta;