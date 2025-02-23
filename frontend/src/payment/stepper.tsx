// import { useState, useEffect } from "react";
import { Wizard } from "react-use-wizard";

import PersonalInfo from "./personalInfo";
import Address from "./address";
import Payment from "./payment";

const StepperForm = () => {
  
  return(
    <div>
         <Wizard>
           <PersonalInfo />
           <Address  />
           <Payment />
         </Wizard>
       </div> 
  )
}
export default StepperForm;
