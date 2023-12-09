import React from 'react'

export default function About() {
  return (
    <>
    <div className='container'>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About TextUtil
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>TextUtil is an text utility.</strong> It can be used to convert your text into required form. It converts lowercase to uppercase, uppercase to lowercase, and we can copy the modified text.
         It also counts the number of words and number of letters in the given text. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About Us
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is an Text utility application.</strong> I got a good experience during this React application development.I developed this application during my React learning period.
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
