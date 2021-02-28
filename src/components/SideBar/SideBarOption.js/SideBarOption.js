import React from "react";
import styled from "styled-components";

function SideBarOption({ Icon, title }) {
  return (
    <>
      <SideBarOptionContainer>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      </SideBarOptionContainer>
    </>
  );
}

export default SideBarOption;

const SideBarOptionContainer = styled.div``;
