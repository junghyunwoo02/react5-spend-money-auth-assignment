import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5000";

export const fetchExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된 것 같아요! 전체 데이터를 로드 할 수 없어요. ㅠ.ㅠ");
  }
};

export const fetchExpenseById = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_HOST}/expenses/${queryKey[1]}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된 것 같아요! Id 데이터를 로드 할 수 없어요. ㅠ.ㅠ");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const { data } = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된 것 같아요! 데이터가 써지지가 않아요. ㅠ.ㅠ");
  }
};

export const patchExpense = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await axios.patch(
      `${JSON_SERVER_HOST}/expenses/${id}`,
      rest
    );
    return data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된 것 같아요! 데이터를 수정할 수 없어요. ㅠ.ㅠ");
  }
};

export const deleteExpense = async (id) => {
  try {
    const { data } = await axios.delete(`${JSON_SERVER_HOST}/expenses/${id}`);
    return data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된 것 같아요! 데이터를 삭제할 수 없어요. ㅠ.ㅠ");
  }
};
