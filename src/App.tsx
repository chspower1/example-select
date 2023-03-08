import React from "react";
import { useForm } from "react-hook-form";

interface Form {
  name: string;
  career: string;
}

function App() {
  const { register, handleSubmit } = useForm<Form>();

  const arr = [
    {
      id: 0,
      name: "123",
    },
    {
      id: 1,
      name: "하이",
    },
    {
      id: 2,
      name: "하하",
    },
    {
      id: 3,
      name: "ㅎ로로",
    },
    {
      id: 4,
      name: "키키",
    },
    {
      id: 5,
      name: "에에",
    },
  ];
  const onValid = (form: Form) => {
    console.log(form);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onValid)}>
        <select {...register("career")} defaultValue="5">
          {arr.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button>btn</button>
      </form>
    </div>
  );
}

export default App;
