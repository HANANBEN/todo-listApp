import { useSelector } from "react-redux";

const useTodoData = () => useSelector(({ todo }) => todo);

export default useTodoData;
