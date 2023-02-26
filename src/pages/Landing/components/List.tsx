import Item from "./Item";
type ListProps = {
  listData: any, deleteData: any, submittingStatus: any
}
const List = (props: ListProps) => {
  const { listData, deleteData, submittingStatus} = props
  return (
    <div className="list">
      {listData.map((item: { note: string; date: string; time: string; id: string; }) => {
        const { note, date, time, id } = item;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;