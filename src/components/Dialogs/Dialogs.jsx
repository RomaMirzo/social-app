import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
// s like styles

const Dialogs = (props) => {

  let dialogsElements = props.dialogsInfo.dialogs.map((d, i) => <DialogItem name={d.name} id={d.id} key={i} />);  
  let messagseElements = props.dialogsInfo.messages.map((m, i) => <Message message={m.message}  key={i}/>);  

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          { dialogsElements }
        </div>

        <div className={s.messages}>
          { messagseElements }
        </div>
      </div>
    </div>
  );
}

export default Dialogs;