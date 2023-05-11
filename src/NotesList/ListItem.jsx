const ListItem = (props) => {
    console.log(props)
  return (
    <>
    <div>
    <button onClick={(e) => {
          props.noteToDelete(props.note)
          e.target.style.backgroundColor="red"
        }}
      >
      <div>{props.note.inputTextNote}</div>
      </button>
      </div>
    </>
  );
};
export default ListItem;
