import React, { useState } from 'react'



const Form = (props) => {

  const {updateValues} = props;

  //state stuff
  const [exerciseCount, setExerciseCount] = useState(0);



  function handleChange(e) {
     
      setExerciseCount(e.target.value);
  }

  

  function handleSubmit(e) {
      
      e.preventDefault();
      updateValues(e.target[1].value, parseInt(exerciseCount));

      
      //console.log(exerciseCount);
      //console.log(e.target[1].value);
  } 
  


  return(
    <form onSubmit={handleSubmit}>
        <input 
          id="numberInput"
          step="1"
          type="number"
          value={exerciseCount}
          className="rep-log"
          onChange={handleChange}
        />
        
       <div className='select'>
          <select name="exercises" className="filter-exercises">
              <option value="press-up">Press up(s)</option>
              <option value="sit-up">Sit up(s)</option>
              <option value="squat">Squat(s)</option>
              <option value="pull-up">Pull up(s)</option>
          </select>
          <button type="submit" className="rep-button">
            Log your reps
        </button>
       </div>           
        
    </form> 
  )
}



export default Form;