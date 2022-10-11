// import React, { useState } from "react";
import React from 'react'
import "../bootstrap_4/css/bootstrap-grid.min.css"
import "../Style/members/members.css"


const Member = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-lg-4'>
                    <h2>PROFESSIONAL MEMBERS</h2>
                    <p>
                        Professional Membership under this category will be granted to individuals who meet the following criteria: Completion of a degree course in Architecture (approved by a recognized University/IAB) or a Degree Course in Interior Design (approved by a recognized University or National Education Board), or an Interior Design Course approved by IDAB, with not less than three years of full time work experience in the field Interior Design OR Completion of a Diploma Course in Interior Design (approved by a recognized University or National Education Board/IDAB) with not less than five years of full time work experience in the field of Interior Design.
                    </p>
                </div>

                <div className='col-lg-4'>
                    <h2>CANDIDATE MEMBERS</h2>
                    <p>
                        Candidate Membership under this category will be granted to individuals who meet the following criteria: Completion of a degree course in Architecture (approved by a recognized University/IAB) or a Degree Course in Interior Design (approved by a recognized University or National Education Board), or an Interior Design Course approved by IDAB, with not less than three years of full time work experience in the field Interior Design OR Completion of a Diploma Course in Interior Design (approved by a recognized University or National Education Board/IDAB) with not less than five years of full time work experience in the field of Interior Design.
                    </p>
                </div>

                <div className='col-lg-4'>
                    <h2>ASSOCIATE MEMBERS</h2>
                    <p>
                        Membership under this category will be accorded to individuals not necessarily qualified to be as general member or engaged in the practice of Interior Design but who are involved in Interior Design field, such as: Landscape Designers, Industrial Designers, Designers of Decorative Fine Arts and Crafts, Graphic Artists, Civil/Mechanical/Electrical Engineers must involve with interior design sector. And company who engages interior designers or architect can become a trade member of the association.
                    </p>
                </div>

                <div className='col-lg-4'>
                    <h2>STUDENT MEMBERS</h2>
                    <p>
                        Student membership shall be confined to bona students of recognized training Institutes engaged in Interior design.
                    </p>
                </div>
            </div>
        </div>    
    )
  }
  
  export default Member;
