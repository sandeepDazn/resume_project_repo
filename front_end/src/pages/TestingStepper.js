import { Step, Stepper } from "react-form-stepper";
// import { useState } from "react";

function StepperUi() {
  // const[step,setStep] =useState(0);
  return (
    <div>
      <Stepper activeStep={2}>
        <Step active={true}
          label={
            <div>
              <input className="form-control" name="testing" />
            </div>
          }
        ></Step>
        <Step
          label={
            <div>
              <input className="form-control" name="testing" />
            </div>
          }
        ></Step>
        <Step
          label={
            <div>
              <input className="form-control" name="testing" />
            </div>
          }
        ></Step>
      </Stepper>
    </div>
  );
}

export default StepperUi;
