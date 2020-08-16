import React from "react";
import styled, { css } from "styled-components";

const typographyStyles = css`
  text-align: ${(props) => (props.align ? props.align : "left")};
  color: ${(props) => (props.color ? props.color : "#000000")};
`;

const Heading1 = styled.h1`
  ${typographyStyles}
  font-size: 2.25rem;
`;

const Heading2 = styled.h2`
  ${typographyStyles}
  font-size: 1.5rem;
`;

const Heading3 = styled.h3`
  ${typographyStyles}
  font-size: 1.25rem;
`;

const Heading4 = styled.h4`
  ${typographyStyles}
  font-size: 1.125rem;
`;

const Heading5 = styled.h5`
  ${typographyStyles}
  font-size: 1rem;
`;

const Body = styled.p`
  ${typographyStyles}
  font-size: 1rem;
`;

const ButtonText = styled.span`
  ${typographyStyles}
  font-size: 1.125rem;
`;

const Caption = styled.span`
  ${typographyStyles}
  font-size: .875rem;
`;

const Typography = (props) => {
  const { variant, children } = props;

  switch (variant) {
    case "h1":
      return <Heading1 {...props}>{children}</Heading1>;
      break;

    case "h2":
      return <Heading2 {...props}>{children}</Heading2>;
      break;

    case "h3":
      return <Heading3 {...props}>{children}</Heading3>;
      break;

    case "h4":
      return <Heading4 {...props}>{children}</Heading4>;
      break;

    case "h5":
      return <Heading5 {...props}>{children}</Heading5>;
      break;

    case "body":
      return <Body {...props}>{children}</Body>;
      break;

    case "button":
      return <ButtonText {...props}>{children}</ButtonText>;
      break;

    case "caption":
      return <Caption {...props}>{children}</Caption>;
      break;

    default:
      return <Body {...props}>{children}</Body>;
      break;
  }
};

export default Typography;
