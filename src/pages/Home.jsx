import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import BoxContainer from "../components/BoxContainer";
import styled from "styled-components";
import ExpenseList from "../components/ExpenseList";

const Home = ({ user }) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    const savedMonth = localStorage.getItem("month");
    return savedMonth ? parseInt(savedMonth) : 1; // 기본값은 1월로 설정
  });

  useEffect(() => {
    localStorage.setItem("month", activeIndex);
  }, [activeIndex]);

  const handleClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <StyledMain>
      {/* 지출 항목을 입력받는 폼입니다. */}
      <InputForm user={user} />
      {/* 월별 필터링을 위한 박스 컨테이너와 개별 박스입니다. */}
      <BoxContainer activeIndex={activeIndex} handleClick={handleClick} />
      {/* 지출 내역을 보여주는 컴포넌트들입니다. */}
      <ExpenseList activeIndex={activeIndex} />
    </StyledMain>
  );
};

export default Home;

const StyledMain = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;
