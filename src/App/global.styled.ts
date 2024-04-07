import { createGlobalStyle } from "styled-components";
import LTInstituteOTF from "../../public/font/LTInstitute-1.otf";
import LTHoopSemiBold from "../../public/font/LTHoop-SemiBold.ttf";
import LTHoopRegular from "../../public/font/LTHoop-Regular.ttf";
export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'LTInstitute-1';
    font-style: normal;
    font-weight: normal;
    src: url(${LTInstituteOTF}) ; 

}
@font-face {
    font-family: 'LTHoopSemiBold';

    src: url(${LTHoopSemiBold}) format('truetype') ; 

}
@font-face {
    font-family: 'LTHoopRegular';

    src: url(${LTHoopRegular}) format('truetype') ; 

}
`;
