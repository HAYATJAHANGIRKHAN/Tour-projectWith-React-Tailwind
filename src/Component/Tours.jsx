import React, { useState } from 'react';


export default function Tours({tours}) {

   
  return (
    <div>
      <div>
      <h1> Kashmir Tourism</h1>
      </div> 
      <div>
          {
            tours.map( (tours) =>{
                return <card {...tours}></card>
            })
          }
      </div>
    </div>
  )
}
