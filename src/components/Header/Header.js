import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <HeaderContainer>
      {/* <h2>Test</h2> */}
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
        //TODO: ADD onclick with src
        />
      </HeaderLeft>

      {/* Header Search */}
      {/* Header Right */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  > h2 {
    color: red;
  }
`;

const HeaderLeft = styled.div``;
const HeaderAvatar = styled(Avatar)``;
const HeaderSearch = styled.div``;
const HeaderRight = styled.div``;
