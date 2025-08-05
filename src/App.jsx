import { useState } from 'react'
import './css/style.css'
function App() {
const [weight , setWeight] = useState(0);
const [height , setHeight] = useState(0);
const [bmi, setBmi] = useState(null);

const result = (evt) => {
  evt.preventDefault();
  setBmi(weight / (height ** 2));


}
  return (
<div>
<div className="container">

<h1>BMI CALCULATOR</h1>
<br />
<br />
<div className="items">
<form action="">
<p className='p'>Weight(kg)</p>
<input type="text" onChange={(evt) => setWeight(evt.target.value)} className='input1' placeholder='  Enter Your Weight' />
<br />
<br />
<p className='p'>Height(m)</p>
<input type="text"  onChange={(evt) => setHeight(evt.target.value)}  className='input1' placeholder='  Enter Your Height' />
<br />
<br />
<button onClick={result} className='button'>Submit</button>
<button className='button2'>Reload</button> 

{/* 
 NO NEED TO HANDLE RELOAD AS SITE WILL GO TO SOME UNKNOWN SERVER AND IT WILL RELOAD SITE AHHAHAHAHAHAHAHAHAHAHAH */}
</form>
<br />

 <h5>Your BMI is :{bmi} </h5>
</div>


</div>




</div>
  )
}

export default App;
