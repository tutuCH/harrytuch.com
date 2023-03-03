import { SetStateAction, useState } from "react";
import { v4 } from "uuid";
type EditProps = { add: any, submittingStatus: any }
const Edit = (props: EditProps) => {
  const { add, submittingStatus } = props
  const [note, setNote] = useState("");
  function noteChange(e: { target: { value: SetStateAction<string>; }; }) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e: { target: { value: SetStateAction<string>; }; }) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e: { target: { value: SetStateAction<string>; }; }) {
    setTime(e.target.value);
  }

  // TODO del
  // console.log(note, date, time);

  function addItem() {
    submittingStatus.current = true
    add(function (prevData: any) {
      return [       
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;