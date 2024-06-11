import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ expenseData, setExpenseData }) => {
  // useRef를 사용하여 각 입력 필드의 참조를 생성
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  const navigate = useNavigate();
  const { id } = useParams(); // URL 파라미터에서 ID를 가져옴
  const expense = expenseData.find((item) => item.id === id); // 현재 id와 일치하는 지출 항목 찾기

  useEffect(() => {
    if (expense) {
      // expense 데이터를 사용하여 입력 필드의 초기 값을 설정
      dateRef.current.value = expense.date || "";
      itemRef.current.value = expense.item || "";
      amountRef.current.value = Number(expense.amount) || "";
      descriptionRef.current.value = expense.description || "";
    }

    // 첫 번째 입력 필드에 포커스 설정
    if (itemRef.current) {
      itemRef.current.focus();
    }
  }, [expense]);

  const handleUpdate = () => {
    // 각 입력 필드에서 현재 값 가져오기
    const updatedDate = dateRef.current.value;
    const updatedItem = itemRef.current.value;
    const updatedAmount = amountRef.current.value;
    const updatedDescription = descriptionRef.current.value;

    if (!updatedDate || !updatedItem || !updatedAmount || !updatedDescription) {
      alert("입력창에 모두 입력해주세요.");
      return;
    }

    // 수정된 지출 항목 객체 생성
    const updatedExpense = {
      id: expense.id,
      date: updatedDate,
      item: updatedItem,
      amount: updatedAmount,
      description: updatedDescription,
    };

    // 기존 expenseData에서 수정된 항목을 업데이트
    const updatedExpenseData = expenseData.map((item) =>
      item.id === id ? updatedExpense : item
    );

    // 업데이트된 expenseData를 상태로 설정
    setExpenseData(updatedExpenseData);
    // 수정 후에는 메인 페이지로 이동
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      // 현재 id와 일치하지 않는 항목만 필터링하여 새로운 데이터를 생성
      const updatedExpenseData = expenseData.filter((item) => item.id !== id);
      // 삭제된 데이터를 상태로 설정
      setExpenseData(updatedExpenseData);

      // 삭제 후에는 메인 페이지로 이동
      navigate("/");
    }
  };

  return (
    <StContainer>
      <StDiv>
        <StLabel htmlFor="date">날짜</StLabel>
        <StInput type="date" id="date" placeholder="YYYY-MM-DD" ref={dateRef} />
      </StDiv>
      <StDiv>
        <StLabel htmlFor="item">항목</StLabel>
        <StInput type="text" id="item" placeholder="지출 항목" ref={itemRef} />
      </StDiv>
      <StDiv>
        <StLabel htmlFor="amount">금액</StLabel>
        <StInput
          type="number"
          id="amount"
          placeholder="지출 금액"
          ref={amountRef}
        />
      </StDiv>
      <StDiv>
        <StLabel htmlFor="description">내용</StLabel>
        <StInput
          type="text"
          id="description"
          placeholder="지출 내용"
          ref={descriptionRef}
        />
      </StDiv>
      <StButtonDiv>
        <StUpdateButton onClick={handleUpdate}>수정</StUpdateButton>
        <StDeleteButton onClick={handleDelete}>삭제</StDeleteButton>
        <PrevButton onClick={() => navigate("/")}>뒤로 가기</PrevButton>
      </StButtonDiv>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const StLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: rgb(51, 51, 51);
  text-align: left;
`;

const StInput = styled.input`
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
`;

const StButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const StUpdateButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;

const StDeleteButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(255, 77, 77);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;

const PrevButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;
