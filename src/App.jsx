import { useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import fakeData from "./fakeData.json";

const App = () => {
  const [expenseData, setExpenseData] = useState(() => {
    const savedData = localStorage.getItem("expenseData");
    return savedData ? JSON.parse(savedData) : fakeData;
  }); // expenseData를 로컬 스토리지에서 가져오거나 기본값으로 fakeData를 사용하여 초기화하고, 상태가 변경될 때마다 로컬 스토리지에 저장

  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenseData]); // expenseData가 변경될 때마다 로컬 스토리지에 저장

  return (
    <div>
      <GlobalStyle />
      <Router expenseData={expenseData} setExpenseData={setExpenseData} />
    </div>
  );
};

export default App;
