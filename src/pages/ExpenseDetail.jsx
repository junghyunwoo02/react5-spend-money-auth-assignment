import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  deleteExpense,
  fetchExpenseById,
  patchExpense,
} from "../axios/expense";

const ExpenseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // URL 파라미터에서 ID를 가져옴

  const {
    data: selectedExpense,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expense", id],
    queryFn: fetchExpenseById,
  });

  const mutationEdit = useMutation({
    mutationFn: patchExpense,
    onSuccess: () => {
      navigate("/");
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      navigate("/");
    },
  });

  // useRef를 사용하여 각 입력 필드의 참조를 생성
  const dateRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (selectedExpense) {
      // 선택된 지출 항목의 데이터를 사용하여 입력 필드의 초기 값을 설정
      dateRef.current.value = selectedExpense.date || "";
      itemRef.current.value = selectedExpense.item || "";
      amountRef.current.value = selectedExpense.amount || "";
      descriptionRef.current.value = selectedExpense.description || "";
      itemRef.current.focus();
    }
  }, [selectedExpense]);

  const handleUpdate = () => {
    // 수정된 지출 항목 객체를 생성
    const editExpense = {
      id: selectedExpense.id, // 선택된 지출 항목의 ID
      date: dateRef.current.value, // 날짜 입력 필드의 현재 값
      item: itemRef.current.value, // 항목 입력 필드의 현재 값
      amount: Number(amountRef.current.value), // 금액 입력 필드의 현재 값 (숫자로 변환)
      description: descriptionRef.current.value, // 내용 입력 필드의 현재 값
    };

    // 모든 필드가 채워져 있는지 확인
    if (
      !editExpense.date ||
      !editExpense.item ||
      !editExpense.amount ||
      !editExpense.description
    ) {
      alert("입력창에 모두 입력해주세요.");
      return;
    }

    // 수정된 지출 항목 객체를 전달하여 서버에 수정 요청을 전송
    mutationEdit.mutate(editExpense);
  };

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      mutationDelete.mutate(id);
    }
  };

  if (isLoading) return <div>로딩 중입니다...</div>;
  if (error) return <div>로딩 중 오류가 발생했습니다.</div>;

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

export default ExpenseDetail;

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
