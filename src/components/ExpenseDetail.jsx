import styled from "styled-components";
import ExpenseCard from "./ExpenseCard";

const ExpenseDetail = ({ filteredData }) => {
  return (
    <Container>
      {filteredData.length > 0 ? (
        <CardContainer>
          {filteredData.map((data) => (
            <ExpenseCard key={data.id} data={data} />
          ))}
        </CardContainer>
      ) : (
        <Stp>지출이 없습니다.</Stp>
      )}
    </Container>
  );
};

export default ExpenseDetail;

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
