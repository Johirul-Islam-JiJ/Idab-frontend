import React from 'react'
import "../bootstrap_4/css/bootstrap-grid.min.css"
import "../Style/home/home.css"

const Home = () => {
    return (
      <div className='home_main'>
        <div className='img_slider col-lg-12'>
          {/* <img src="../Style/about_idab/idab_profile.jpg"/> */}
            <div className='banner-content '>
              <div className='banner_text'>
                <h1>IDAB</h1>
                <h4>Interior designer’s association Of Bangladesh</h4>
              </div>
            </div>
        </div>
        <div className='Header_paragrap'>
            <h2>Interior designer’s association Of Bangladesh</h2>
            <p>
                IDAB (Interior designer’s Association Of Bangladesh) founded in 2019 with some young and energetic Bangladeshi Interior Designers to represent the Interior designers & interior design industry as a whole of Bangladesh.<br/><br/>

                From 2020 IDAB start organizing all Bangladeshi Interior designers, architects to bring them under one umbrella. This process is ongoing. When you join the association of Interior Designers, you become part of a national and international network of interior designers. We are trying to make IDAB a professional organization that works for interior designers and architects.
            </p><br/>
            <input className='input' type={"submit"} value={"We Are"}/>
        </div>
        <div className='corporate'>
            <h2>IDAB Corporate partners</h2>
            <p>
                The IDAB Corporate Partnership program is a strategic partnership scheme between IDAB and key industry players, created with the vision of improving standards of professionalism within the Interior Design Industry. As a multi-tier annual endowment funding scheme that creates a long-term partnership between IDAB and industry leaders, the program carries the objective of establishing a platform where Interior Designers and industry leaders can work together on projects to raise awareness of the professionalism and importance of the interiors industry, to the future economic prosperity of the nation. Kindly contact the IDAB Secretariat general for more information regarding the IDAB Corporate Partnership program.
            </p>
        </div>
      </div>
    )
  }
  
  export default Home;