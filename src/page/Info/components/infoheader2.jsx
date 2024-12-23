import styled from "styled-components";

const HeaderContainer = styled.div`
    width : 390px;
    height : 50px;
    display : flex;
    flex-direction: row;
`

const InfoTitle = styled.h2`
    color: #000;
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left : 40px;
    margin-top: 40px;
`

const JumpInfo = styled.h3`
    color: #A3A3A3;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 80px;
    margin-top: 25px;
`

export default function InfoHeader2(){
    return(
        <HeaderContainer>
            <InfoTitle>이수과목정보를 <br/>입력해주세요.</InfoTitle>
        </HeaderContainer>
    );
}