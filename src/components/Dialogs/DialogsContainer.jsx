import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToPtops = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToPtops = (dispatch) => {
  return {
    updateMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToPtops, mapDispatchToPtops)(Dialogs)

export default DialogsContainer;