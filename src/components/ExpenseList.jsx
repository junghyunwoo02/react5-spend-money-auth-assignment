import styled from "styled-components";
import ExpenseCard from "./ExpenseCard";
import { useQuery } from "@tanstack/react-query";
import { fetchExpenses } from "../axios/expense";

const ExpenseList = ({ activeIndex }) => {
  const {
    data: expenses = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expense"],
    queryFn: fetchExpenses,
  });

  if (isLoading) {
    return <div>로딩 중입니다...</div>;
  }

  if (error) return <div>로딩 중 오류가 발생했습니다.</div>;

  // 선택된 월에 해당하는 데이터 필터링
  const filteredExpense = expenses.filter((expense) => {
    const itemMonth = new Date(expense.date).getMonth() + 1; // 월은 0부터 시작하므로 +1
    return itemMonth === activeIndex;
  });

  return (
    <Container>
      {filteredExpense.length > 0 ? (
        <CardContainer>
          {filteredExpense.map((data) => (
            <ExpenseCard key={data.id} data={data} />
          ))}
        </CardContainer>
      ) : (
        <Stp>지출이 없습니다.</Stp>
      )}
    </Container>
  );
};

export default ExpenseList;

const Container = styled.section`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Stp = styled.p`
  text-align: center;
  font-size: 16px;
  color: rgb(136, 136, 136);
  padding: 20px;
  background-color: rgb(249, 249, 249);
  border-radius: 8px;
`;
