import React from "react";
import { Button } from "../atoms/button";
import '../../styles/result.style.css';
import {ResultText} from "../atoms/resultText";
import {Pallet} from "../atoms/pallet";

export const Result = () => {
  return(
      <div className='result'>
          <div className='gradientDiv'>
              <ResultText/>
              <Pallet/>
          </div>
          <Button href='/' text='Tilbake til forsiden'/>
      </div>
  );
};