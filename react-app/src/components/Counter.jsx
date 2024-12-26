import { useDispatch, useSelector } from "react-redux";
import { increment, setCount } from "../redux/counter.slice";
import { useEffect, useRef } from "react";
import {
  getSingleUserDetails,
  getUserList,
  saveUsers,
} from "../redux/user.slice";

function Counter() {
  let inputRef = useRef(null);
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);

  let { users, userDetails } = useSelector((state) => state.myUser);
  let inputChange = (event) => {
    if (event.keyCode === 13) {
      let { value } = event.target;
      dispatch(setCount(Number(value)));
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  return (
    <>
      <h1>Counter: {count}</h1>
      <input ref={inputRef} type="number" onKeyUp={inputChange} />
      <button onClick={() => dispatch(increment())}>INC</button>

      <select
        onChange={(event) => dispatch(getSingleUserDetails(event.target.value))}
      >
        <option value="">---- select ----</option>
        {users.map((value) => {
          return (
            <option value={value.id} key={value.id}>
              {value.name}
            </option>
          );
        })}
      </select>
      <section>
        {userDetails ? (
          <>
            <p>{userDetails.name}</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.email}</p>
          </>
        ) : null}
      </section>
    </>
  );
}

export default Counter;
