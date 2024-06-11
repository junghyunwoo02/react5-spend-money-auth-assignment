import { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

const InputForm = ({ expenseData, setExpenseData }) => {
  const [formData, setFormData] = useState({
    date: "",
    item: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidDate =
      /^(19[7-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (!isValidDate.test(formData.date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }

    if (!formData.item.trim() || !formData.amount.trim()) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }

    const newData = {
      id: uuid(),
      date: formData.date,
      item: formData.item,
      description: formData.description,
      amount: formData.amount,
    };

    setExpenseData([...expenseData, newData]);
    setFormData({
      date: "",
      item: "",
      description: "",
      amount: "",
    });
  };

  return (
    <StFormContainer>
      <StForm onSubmit={handleSubmit}>
        <StInputDiv>
          <StLabel>날짜</StLabel>
          <StInput
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="YYYY-MM-DD"
          />
        </StInputDiv>
        <StInputDiv>
          <StLabel>항목</StLabel>
          <StInput
            type="text"
            id="item"
            value={formData.item}
            onChange={handleChange}
            placeholder="지출 항목"
          />
        </StInputDiv>
        <StInputDiv>
          <StLabel>금액</StLabel>
          <StInput
            type="number"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="지출 금액"
          />
        </StInputDiv>
        <StInputDiv>
          <StLabel>내용</StLabel>
          <StInput
            type="text"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="지출 내용"
          />
        </StInputDiv>
        <StButton type="submit">저장</StButton>
      </StForm>
    </StFormContainer>
  );
};

export default InputForm;

const StFormContainer = styled.section`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 20px;
`;

const StLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const StForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const StInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
`;

const StInput = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const StButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: rgb(6, 44, 85);
    transition: background-color 0.2s ease-in-out 0s;
  }
`;
