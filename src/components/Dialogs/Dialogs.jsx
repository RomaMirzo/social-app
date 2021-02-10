import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
// s like styles

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d, i) => <DialogItem name={d.name} id={d.id} key={i} />);  
  let messagseElements = props.dialogsPage.messages.map((m, i) => <Message message={m.message}  key={i}/>);  

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateMessageBody(body);
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          { dialogsElements }
        </div>

        <div className={s.messages}>
          <div>{ messagseElements }</div>

          <div>
            <textarea placeholder='Enter your message'
                      onChange={onNewMessageChange}
                      value={props.dialogsPage.newMessageBody}
                      /><br/>
            <button onClick={ onSendMessageClick }>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;