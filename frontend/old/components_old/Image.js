import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.heightComputed}px;
  border: 1px solid #cccccc;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.objectPosition};
`;

const demoImage =
  "https://images.unsplash.com/photo-1543340904-0b1d843bccda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

export default ({
  ratio = 1,
  src = demoImage,
  objectPosition = "center center",
}) => {
  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  useEffect(() => {
    const wrapperWidth = wrapperRef.current.offsetWidth;
    setWrapperWidth(wrapperWidth);
  }, []);

  return (
    <Wrapper ref={wrapperRef} heightComputed={wrapperWidth * ratio}>
      <Image src={`${src}`} objectPosition={`${objectPosition}`} />
    </Wrapper>
  );
};
