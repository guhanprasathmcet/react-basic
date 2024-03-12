import {useState} from 'react';

const data = {
  name: 'guhan',
  place: 'karur'
}


export function Address(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <p>{props.place}</p>
      <button onClick={props.onClick} >submit</button>
    </div>
  )
}

const GetMyOptions1 = ( ) => {
  const [topic , setTopic] = useState('selcet a topic');

  function updateValue(){
    setTopic('value');
    console.log(topic);
  }

  return (
    <div className="get-my-options-1-wrapper">
      <Address {...data} onClick={()=> updateValue()} />
      {topic}
    </div>
  );
};

export default GetMyOptions1;


//from the above example 
//we pass the props like this {...data } so it automatically combines and send the data to the address component..
// <Address {...data} onClick={()=> updateValue()} /> this is equivalent to this <Address name={name} place={place} onClick={()=> updateValue()} />
//{and one thing to notice is if you update the value using topic and console the value inside the updated value so once you 
//click the button the value will be changed in the ui but in console.log it will be print the initial value because if rendered from top first it assume 
//the select a topic as value and after that only we update the value inside the updateValue() if you click again then value changes to the value you set} 
