import React from 'react';


import Styled from "styled-components"; 
import BannerSmall from "../components/BannerSmall"

const Departcontainer = Styled.div`
    font-size: 2rem; 
    color: #3C4270; 
    margin-bottom: 0px; 
`;
// background: linear-gradient( #949ACB, #9BA1D4, #CACDE5, #fff);
const Departcard = Styled.div`

display: flex; 
flex-direction:column;
width: 100vw; 
height: fit-content; 
margin: auto; 
margin-top: 0px;
border-radius: 5px;
justify-content: center;
align-items: center; 
`;
// text-shadow: 0px 1px 4px #3C4270;

const Departcontent = Styled.div`
  color:black;
  width: 80%;
  font-size:1.5rem;
  `;
  // text-shadow: 1px 1px 4px #000;

const AboutInsti = () => {
    return(
        <>
       <BannerSmall/>
            <Departcontainer>
            <Departcard>
        <h1 style={{padding:'15px'}}>About the Institute</h1>
        <Departcontent>

          <p>
          National Institute of Technology Rourkela (NIT Rourkela), formerly
            known as Regional Engineering College Rourkela (REC Rourkela) is an
            institute of higher learning for engineering and technology, funded
            by the Government of India and located in the steel city of
            Rourkela, Odisha, India. The institute was established as Regional
            Engineering College (REC) Rourkela on 15 August 1961, and its
            foundation stone was laid by the first Prime Minister of India,
            Jawaharlal Nehru. It was granted autonomy in 2002 and now functions
            independently under the Ministry of Human Resource Development
            (MHRD) as one of the National Institutes of Technology. The
            Institute has been modernized by two foreign collaborative funding
            agencies i.e. the Material theme in the Materials and Metallurgical
            Engineering department under Indo-U.K. REC project and the Computer
            Science and Electronics streams under World Bank cum Swiss
            Development Corporation IMPACT project. With 21 departments awarding
            graduate and post graduate degrees including Ph.D. in Engineering,
            Science, Planning and Architecture, Management, and Humanities, NIT
            Rourkela is one of the prestigious institutes in the country. NIT
            Rourkela is presently ranked the 2nd best NIT and 12th nationwide
            (including IITs) by the MHRD. NIT Rourkela was also ranked 601-800
            in the world by the Times Higher Education World University Rankings
            of 2018 and 126 in Asia. NIT Rourkela is a well-known technical
            institute of national importance serving as a knowledge hub to the
            nation. The campus of the institute spread over an area of 262
            hectares of land is surrounded by scenic hills providing a
            spectacular rejuvenating atmosphere, which is very conducive for
            study and research. The well maintained green campus of the
            Institute provides accommodation to all students, faculties and
            staffs. The campus has all the amenities for developing personal,
            social and academic skills of young people. The greeneries and
            flowers in the campus further make the stay very pleasant and
            enjoyable.
          </p>
          </Departcontent>
          </Departcard>

      </Departcontainer>
        </>
    );
}



export default AboutInsti;



            