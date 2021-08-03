import React from "react";
import styled from "styled-components";
import LocationsImg from "../images/gsb-icon-locations@2x.png";
import OrderImg from "../images/gsb-icon-order@2x.png";

const Action = ({ content, label }) => {
  let imgSrc = content === "locations" ? LocationsImg : OrderImg;
  return (
    <Button aria-label={label}>
      <img src={imgSrc} alt={content} />
      <p>
        <a href="./">{content}</a>
      </p>
    </Button>
  );
};

export default Action;

const Button = styled.button`
  margin: 0px 10px;
  max-height: 62px;

  img {
    width: 40px;
  }
  p {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 300;
    color: #ffffff;
  }
`;
