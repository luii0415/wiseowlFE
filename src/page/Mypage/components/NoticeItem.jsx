import styled from "styled-components";
import speaker from "../../../img/speaker 2.png";

const Container = styled.div`
  width: 330px;
  height: 75px;
  margin: 0 auto;
  align-items: center;
  border-radius: 9.85px;
  box-shadow: 0px 0.49px 0.91px 0.99px rgba(0, 0, 0, 0.09);
  margin-bottom: 15px;
  cursor: pointer;
`;
const TopBox = styled.div`
  width: 330px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Dot = styled.div`
  margin-top: 8px;
  margin-right: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #5d96e8;
`;
const BottomBox = styled.div`
  width: 270px;
  display: flex;
`;
const LeftBox = styled.div`
  height: 45px;
  margin-top: 5px;
`;

const SpeakImg = styled.img`
  margin-left: 15px;
  width: 18px;
  height: 18px;
`;
const RightBox = styled.div`
  align-items: center;
  margin-top: 5px;
  margin-left: -5px;
`;
const TopHorizontalBox = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`;
const Organization = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
`;
const Minute = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 10.8px;
  color: #a7a8ab;
`;
const BottomHorizontalBox = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7px;
  margin-left: 15px;
`;
const Text = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 10.1px;
  color: #000;
`;
function NoticeItem({ organization, min, text, isread, link }) {
  function handleClick() {
    window.location.href = link;
  }
  return (
    <Container onClick={handleClick}>
      <TopBox>
        <Dot isread={isread} />
      </TopBox>
      <BottomBox>
        <LeftBox>
          <SpeakImg src={speaker} />
        </LeftBox>
        <RightBox>
          <TopHorizontalBox>
            <Organization>{organization}</Organization>
            <Minute>{min}</Minute>
          </TopHorizontalBox>
          <BottomHorizontalBox>
            <Text>{text}</Text>
          </BottomHorizontalBox>
        </RightBox>
      </BottomBox>
    </Container>
  );
}
export default NoticeItem;
