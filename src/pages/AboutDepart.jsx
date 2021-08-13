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
  
  // text-shadow: 0.1px 0.1px 0.1px #000;
const AboutDepart = () => {
    return(
        <>
<BannerSmall/>
            <Departcontainer style = { { 
              backgroundColor: "#CACDE5"
            }}>
            <Departcard>
        <h1 style={{padding:'15px'}}>About the Department</h1>
        <Departcontent>
          <p>
            Established in 1964, the Department has emerged as a powerhouse for
            academics, scientific research, and cutting-edge technologies. With
            time, the department grew noticeably and established new areas of
            research and teaching in materials engineering, while retaining its
            strength in traditional areas of metallurgical engineering. The
            department is actively involved in fundamental research in
            diversified fields like steel technology, advanced manufacturing
            processes, alloy designing, nanotechnology, composites and
            computational materials. The alumni of the department hold strong
            positions in many prestigious organizations over the world. The
            department attracts highly qualified faculties and bright students
            from the entire nation. The well-developed infrastructure,
            diversified expertise of the faculties and incredibly talented
            students have placed the department in the global forum. The
            graduates from the department are well-placed in esteemed industries
            and institutions. The department has a history of producing highly
            ambitious students motivated for higher education in India and
            overseas. The department is actively involved in research activities
            in the front line areas of metallurgical and materials engineering
            in collaboration with reputed R&D organizations and industries
            throughout the country. The research wing of the department is
            strongly supported by various public and private organizations. At
            present, various research projects are being run in the department
            by external sponsoring agencies like Department of Science and
            Technology (DST), Council of Scientific and Industrial Research
            (CSIR), Naval Research Board (NRB), Defence Research and Development
            Organisation (DRDO), Board of Research in Nuclear Sciences (BRNS),
            National Aluminum Company (NALCO). Recently TATA Steels has joined
            hands together with the department for active collaborative
            industrial research on FRP Composites, corrosion, metal extraction.
          </p>
          </Departcontent>
          </Departcard>

      </Departcontainer>
        </>
    );
}



export default AboutDepart;
