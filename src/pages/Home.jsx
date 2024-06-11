import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import BoxContainer from "../components/BoxContainer";
import styled from "styled-components";
import ExpenseDetail from "../components/ExpenseDetail";

const Home = ({ expenseData, setExpenseData }) => {
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

  // 선택된 월에 해당하는 데이터 필터링
  const filteredData = expenseData.filter((item) => {
    const itemMonth = new Date(item.date).getMonth() + 1; // 월은 0부터 시작하므로 +1
    return itemMonth === activeIndex;
  });

  return (
    <StyledMain>
      {/* 지출 항목을 입력받는 폼입니다. */}
      <InputForm expenseData={expenseData} setExpenseData={setExpenseData} />
      {/* 월별 필터링을 위한 박스 컨테이너와 개별 박스입니다. */}
      <BoxContainer activeIndex={activeIndex} handleClick={handleClick} />
      {/* 지출 내역을 보여주는 컴포넌트들입니다. */}
      <ExpenseDetail filteredData={filteredData} />
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
