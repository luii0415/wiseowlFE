import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../auth/axiosInstance";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  width: 390px;
  height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background: #FBFBFB;
`;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
`;

const ModalBack = styled.h4`
  color: #A3A3A3;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  margin-left: auto;
  margin-right: 30px;
  margin-top: 20px;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 30%;
  height: 5px;
  background-color: black;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const BigContainer = styled.div`
  width: 30%;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

const BigText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
`;

const MajorContainer = styled.div`
  width: 70%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClassContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-top : 15px;
  padding: 20px;
  overflow-y: auto;
  scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Edge에서 스크롤바 숨김 */
    }
`;

const ClassButton = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  background: #F5F6FB;
  border-radius: 7px;
  padding: 10px;
  margin-left: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, border 0.2s ease;
  border: ${({ isActive }) => (isActive ? "1px solid #5D96E8" : "none")};
  &:hover {
    border: 1px solid #5d96e8;
    transform: scale(1.1);
  }
`;

const ClassTitle = styled.h3`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  width: 150px; /* 원하는 너비 */
  white-space: nowrap; /* 텍스트 줄바꿈 금지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임표 표시 */
  display: block; /* 필수: block 또는 inline-block */
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
`;

const InfoName = styled.h4`
  color: #afafb1;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  width : 120px;
  white-space: nowrap; /* 텍스트 줄바꿈 금지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임표 표시 */
  display: block; /* 필수: block 또는 inline-block */
`;

const InfoText = styled.h4`
  color: #afafb1;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: 2px;
  width : 70px;
  white-space: nowrap; /* 텍스트 줄바꿈 금지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임표 표시 */
  display: block; /* 필수: block 또는 inline-block */
`;

const DayText = styled.h4`
  color: #afafb1;
  font-family: Inter;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap; /* 텍스트 줄바꿈 금지 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 말줄임표 표시 */
  display: block; /* 필수: block 또는 inline-block */
`;
export default function EditcourseModal2() {
  const navigate = useNavigate();
  const location = useLocation();

  const [subjectdata, setSubjectdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({ subject_department: [], subject_generation: [] });

  const selectedSemester = location?.state?.selectedSemester || "defaultSemester";
  const subjectkey = location?.state?.subjectkey || "defaultsubjectkey";
  const onevalue = location?.state?.textType || "defaulttextType";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/requirements/colleges/${selectedSemester}/subjects/`
        );
        setData(response.data);
        console.log("가져오는 데이터" ,data);
        
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedSemester]);

  const fetchsubjectData = async (subjectid) => {
    try {
      setLoading(true);
      const requestBody = { school_year: subjectkey };
      const response = await axiosInstance.post(
        `/api/requirements/colleges/${subjectid}/department/subjects/add/`,
        requestBody
      );
      console.log("보내는 전공 데이터", requestBody);
      
      setSubjectdata(response.data);
      navigate("/infotwo", { state: { subjectid, subjectdata: response.data } });
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const department = data.subject_department.find(
    (dept) => dept.department_name === onevalue
  );
  const generation = data.subject_generation.find(
    (gen) => gen.gened_category_name === onevalue
  );

  const currentData = department || generation;
  const isDepartment = !!department;

  const handleBack = () => {
    navigate("/editcoursemodal1");
  };

  const fetchgenedData = async (subjectid, subjectName, subjectKey) => {
    try {
      setLoading(true);
      const requestBody = { "school_year": parseInt(subjectkey) }
      
      // 요청 전 로그 출력
      console.log("교양 과목 PATCH 요청 시작");
      console.log("과목 ID:", subjectid);
      console.log("과목 이름:", subjectKey);
      console.log("요청 바디:", requestBody);
  
      const response = await axiosInstance.post(
        `/api/requirements/colleges/${subjectid}/gened/subjects/add/`, // endpoint 수정
        requestBody
      );
  
      console.log("응답 데이터:", response.data);
      setSubjectdata(response.data);
      navigate("/editcoursepage", { state: { subjectid, subjectdata: response.data } });
    } catch (err) {
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };
  
  
  const handleSubject = (subjectid, isGened, subjectName) => {
    if (isGened) {
      fetchgenedData(subjectid, subjectName); // 선택된 데이터가 일반 교양 과목일 경우
    } else {
      fetchsubjectData(subjectid); // 전공 과목일 경우
    }
  };


  return (
    <Container>
      <ModalHeader>
        <ModalBack onClick={handleBack}>돌아가기</ModalBack>
      </ModalHeader>
      <ModalContainer>
        <BigContainer>
          <BarContainer>
            <Bar />
            <BigText>
              {currentData
                ? isDepartment
                  ? currentData.department_name
                  : currentData.gened_category_name
                : "카테고리를 찾을 수 없음"}
            </BigText>
          </BarContainer>
        </BigContainer>
        <MajorContainer>
        <ClassContainer>
          {currentData && currentData.courses ? (
            currentData.courses.map((course) => {
              const isGened = !!course.subject_gened_id; // 일반 교양 여부 확인
              const subjectid = course.subject_department_id || course.subject_gened_id; // id 추출

              return (
                <ClassButton
                  key={subjectid}
                  onClick={() => handleSubject(subjectid, isGened)}
                >
                  <ClassTitle>
                    {course.subject_department_name || course.subject_gened_name}
                  </ClassTitle>
                  <InfoContainer>
                    <InfoName>
                      {course.subject_department_professor || course.subject_gened_professor}
                    </InfoName>
                    <InfoText>
                      {`${course.subject_department_credit || course.subject_gened_credit}학점`}
                    </InfoText>
                  </InfoContainer>
                  <DayText>
                    {course.subject_department_room_date || course.subject_gened_room_date}
                  </DayText>
                </ClassButton>
              );
            })
          ) : (
            <p>이 카테고리에 수업이 없습니다.</p>
          )}
        </ClassContainer>
        </MajorContainer>
      </ModalContainer>
    </Container>
  );
}