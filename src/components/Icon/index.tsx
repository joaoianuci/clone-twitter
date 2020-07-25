import React from "react";

import { Container } from "./styles";

export interface Props {
  icon: React.ReactElement | React.ReactNode;
  hover?: boolean;
  textHover?: string;
  backgroundHover?: string;
  handleClick?: () => void;
}

const Icon: React.FC<Props> = ({
  icon,
  hover,
  textHover,
  backgroundHover,
  handleClick,
}) => {
  return (
    <Container
      icon={icon}
      hover={hover}
      textHover={textHover}
      backgroundHover={backgroundHover}
      onClick={handleClick}
    >
      {icon}
    </Container>
  );
};

export default Icon;
