import React from "react";


      export const FeedbackOptions = ({onLeaveFeedback, options}: {options: string[], onLeaveFeedback: React.MouseEventHandler<HTMLButtonElement>}) =><div > {options.map((el,index)=> <button key={index} name={el} onClick={onLeaveFeedback}>{el}</button>)}
      </div>

