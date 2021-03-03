import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../../features/appSlice";
import ChatInput from "../ChatInput/ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessage] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-Name</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon /> Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>{/* List out the ChatMessages */}</ChatMessages>
        <ChatInput
          //Channel Name
          channelId={roomId}
        />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatMessages = styled.div``;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  /* display: flex; */
  > p {
    display: flex;
    text-transform: lowercase;
    font-size: 14px;
    align-items: center;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
