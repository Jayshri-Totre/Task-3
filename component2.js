
import './component2.css';
import { useState } from 'react';
import { IoCloseCircleOutline} from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";

function App1() {

    const [addrow,setaddrow]=useState();

    function handleaddrow()
    {
        let hour=[];
        setaddrow();
        console.log("Button Clicked")
    }

  const [hourarray,sethourarray]=useState([]);
   for(let i=0;i<=12;i++)
   {
     hourarray.push(i)
   }
   console.log(hourarray.length)

  const [minutearray,setminutearray]=useState([]);
    for(let i=0;i<=60;i++)
    {
      minutearray.push(i)
    }
  
  return (
    <>
        <div className='box'>
            <div className="Timings" style={{font:'22px Lato'}}>Timings
                <div className="view">
                    <div className="leftside" name="select" value="select">
                    <label style={{font:'14px Lato',width:"46px",height: "24px", left: "348px"}}>From</label> <br/>
                    <select style={{width:"100px",height: "56px",borderRadius: '8px'}}>  
                    {
                          hourarray.map((info) => { 
                                  return(
                                    <option value={info}>{info}</option>
                                  )
                                  }
                            )
                      }
                    </select>{' '}
                    <select style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                    {
                            minutearray.map((info) => { 
                                  return(
                                    <option value={info}>{info}</option>
                                  )
                                  }
                            )
                      }
                    </select>{" "}<br/>

                    <label style={{font:'14px Lato',width:"46px",height: "24px", left: "348px",top:"889px"}}>From</label><br/> 
                    <select style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                    {
                          hourarray.map((info) => { 
                                  return(
                                    <option value={info}>{info}</option>
                                  )
                                  }
                            )
                      }
                    </select>{' '}
                    <select style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                    {
                            minutearray.map((info) => { 
                                  return(
                                    <option value={info}>{info}</option>
                                  )
                                  }
                            )
                      }
                    </select>{' '}<br/>
                    <button id="button" onClick={handleaddrow}><IoAddCircleOutline Add-Timing color="#0078D4" width="26px" height="26px"  left="348px" top="1015px" /><u>Add Timings</u></button>
                </div>
                <div className="leftside">
                  
                    <label style={{font:'14px Lato',width:"21px",height: "24px", left: "599px"}}>To</label> <br/>
                      <select style={{width:"100px",height: "56px" ,borderRadius: '8px'}}>  
                        {
                              hourarray.map((info) => { 
                                      return(
                                        <option value={info}>{info}</option>
                                      )
                                      }
                                )
                          }
                        </select>{' '}
                      <select  style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                        {
                                minutearray.map((info) => { 
                                      return(
                                        <option value={info}>{info}</option>
                                      )
                                      }
                                )
                          }
                        </select><br/>

                        <label style={{font:'14px Lato',width:"21px",height: "24px", left: "599px",top:"889px"}}>To</label><br/> 
                        <select style={{width:"100px",height: "56px" ,borderRadius: '8px'}}> 
                        {
                              hourarray.map((info) => { 
                                      return(
                                        <option value={info}>{info}</option>
                                      )
                                      }
                                )
                          }
                        </select>{' '}
                      <select style={{width:"100px",height: "56px",borderRadius: '8px'}}> 
                        {
                                minutearray.map((info) => { 
                                      return(
                                        <option value={info}>{info}</option>
                                      )
                                      }
                                )
                          }
                        </select>{" "}
                        <button id="button"><IoCloseCircleOutline color="#0078D4"   width="50px" height="50px"  left="837px" top="936px" /></button>{" "} <br/>
                </div>
                </div>
                </div><br/><br/><br/><br/>
            <button id="but">Save</button>
            </div> 
    </>
  );
}

export default App1;
