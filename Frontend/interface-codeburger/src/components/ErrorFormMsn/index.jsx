import React from "react";
import PropTypes from "prop-types";
import { ErrorMessageStyled } from "./style";

export function ErrorFormMsn({ children, ...rest }) {
  return <ErrorMessageStyled {...rest}>{children}</ErrorMessageStyled>;
}

ErrorFormMsn.propTypes = {
  children: PropTypes.node.isRequired, // Espera qualquer nó renderizável
};
