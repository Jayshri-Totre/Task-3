import './Page2comp2.css';
import React, { useState } from 'react';
import { IoCloseCircleOutline} from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
    


function Page5() {
  const [time,settime]=useState({fromh:"",fromm:"",toh:"",tom:""});
  const[array,setarray]=useState([time]);
  const selects =(e)=>
  {
    console.log(e.target.value)
    console.log(e.target.name)
    settime({...time,[e.target.name]:e.target.value});
  }
  array.push(time);
  console.log(array);
  const [hourarray,sethourarray]=useState([]);
  for(let i=0;i<=12;i++)
  {
    hourarray.push(i)
  }
 const [minutearray,setminutearray]=useState([]);
   for(let i=0;i<=60;i++)
   {
     minutearray.push(i)
   }
console.log(time)

 return (
<div>

   <div  className="leftside" >
      <label style={{font:'20px Lato',width:"46px",height: "24px", }}>From</label>  <label  id ="to" style={{font:'20px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
                   <select   name="fromh" onChange={e=>selects(e)} style={{width:"100px",height: "56px",borderRadius: '8px'  }}>  
                   {
                         hourarray.map((info) => { 
                                 return(
                                   <option value={info}>{info}</option>
                                 )
                                 }
                           )
                     }
                   </select>{' '}
                   <select  name="fromm" onChange={e=>selects(e)} style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                   {
                           minutearray.map((info) => { 
                                 return(
                                   <option   value={info}>{info}</option>
                                 )
                                 }
                           )
                     }
                   </select>{" "}
                   
                     <select  name="toh" onChange={e=>selects(e)} id="mar" style={{width:"100px",height: "56px" ,borderRadius: '8px' }}>  
                       {
                             hourarray.map((info) => { 
                                     return(
                                       <option   value={info}>{info}</option>
                                     )
                                     }
                               )
                         }
                       </select>{' '}
                       
                   <select  name="tom"  onChange={e=>selects(e)} style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                   {
                           minutearray.map((info) => { 
                                 return(
                                   <option  value={info}>{info}</option>
                                 )
                                 }
                           )
                     }
                   </select>{' '}

           </div> 
                    
   </div>
 )
}
function Page4() {
  
  const [time1,settime1]=useState({fromh:"",fromm:"",toh:"",tom:""});
  const[array1,setarray]=useState([time1]);
  const selects =(e)=>
  {
    console.log(e.target.value)
    console.log(e.target.name)
    settime1({...time1,[e.target.name]:e.target.value});
  }
  array1.push(time1);
    console.log(array1);

  

   const [hourarray,sethourarray]=useState([]);
   for(let i=0;i<=12;i++)
   {
     hourarray.push(i)
   }
  const [minutearray,setminutearray]=useState([]);
    for(let i=0;i<=60;i++)
    {
      minutearray.push(i)
    }
    console.log(time1)
  return (
<div>

    <div  className="leftside" >
       <label style={{font:'20px Lato',width:"46px",height: "24px", left: "348px"}}>From</label>  <label  id ="to" style={{font:'20px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
                    <select  name="fromh"  onChange={e=>selects(e)} style={{width:"100px",height: "56px",borderRadius: '8px'}}>  
                    {
                          hourarray.map((info) => { 
                                  return(
                                    <option value={info}>{info}</option>
                                  )
                                  }
                            )
                      }
                    </select>{' '}
                    <select name="fromm" onChange={e=>selects(e)} style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                    {
                            minutearray.map((info) => { 
                                  return(
                                    <option value={info}>{info}</option>
                                  )
                                  }
                            )
                      }
                    </select>{" "}
                    
                      <select  name="toh"  onChange={e=>selects(e)}  id="mar" style={{width:"100px",height: "56px" ,borderRadius: '8px' }}>  
                        {
                              hourarray.map((info) => { 
                                      return(
                                        <option value={info}>{info}</option>
                                      )
                                      }
                                )
                          }
                        </select>{' '}
                        
                    <select  name="tom"  onChange={e=>selects(e)} style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                    {
                            minutearray.map((info) => { 
                                  return(
                                    <option value={info}>{info}</option>
                                  )
                                  }
                            )
                      }
                    </select>{' '}
                    <button   id="button" ><IoCloseCircleOutline color="#0078D4" /></button> <br/> 
                    
            </div> 
                     
    </div>
  )
}

export default function Page3() {
    const[bolin,setbolin]=useState(true);
    const handleclick = ()=>{
        setbolin(false);
     }
    
  return (<div><div id ="display"><p style={{font:'24px Lato'}} >Timings</p><Page5/>{bolin ?
    <div>
     
   <button id="button" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>
    
   </div>
    : <span>
    <Page4/> <button id="button" onClick={handleclick}><IoAddCircleOutline Add-Timing color="#0078D4" /><u>Add Timings</u></button>  
    </span>
  }
   <button id="but">Save</button>
  </div> 
  
    </div>
  )
}