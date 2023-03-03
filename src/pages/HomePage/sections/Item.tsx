type ItemProps = {
  id: string, 
  note: string, 
  date: string, 
  time: string, 
  deleteData: any, 
  submittingStatus: any
}
const Item = (props: ItemProps) => {
  const { id , note, date, time, deleteData, submittingStatus } = props
  function deleteItem() {
    submittingStatus.current = true
    deleteData(function(prev: any[]) {
      return prev.filter((item: { id: string; }) => item.id !== id)
    })
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">刪除</button>
    </div>
  );
};

export default Item;