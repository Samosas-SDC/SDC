import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import propTypes from 'prop-types';
import dropDownSrc from './drop-down-arrow-icon.svg';
import dropDownDarkSrc from './drop-down-arrow-light-icon.svg';

// Components
import StyledSelection from './Selection.jsx';

function SelectionContainer({
  className, selections, name, inStock,
}) {
  return (
    <select className={className} name={name} id="size-selection" disabled={!inStock}>
      {!inStock && <StyledSelection value="Out of Stock" disabled={false} />}

      {inStock && <StyledSelection value="Select Size" disabled={false} hidden />}
      {inStock && selections.map((item) => {
        const isOutOfStock = item.stock === 0;
        return (
          <StyledSelection
            key={uniqid()}
            value={item.value}
            disabled={isOutOfStock}
            hidden={isOutOfStock}
          />
        );
      })}
    </select>
  );
}

const StyledSelectionContainer = styled(SelectionContainer)`
  display: flex;
  font-family: var(--fnt-bold);
  font-size: 1.2rem;
  display: block;
  height: 65px;
  min-width: 300px;  // remove this at some point
  padding: 0 10px;
  text-transform: uppercase;
  appearance: none;
  background: url("${dropDownSrc}");
  ${({ inStock }) => (!inStock ? `background: url("${dropDownDarkSrc}");` : '')}
  background-repeat: no-repeat;
  background-position: calc(100% - 10px);
  overflow: hidden;
  background-size: 15px 15px;
  cursor: pointer;
`;

SelectionContainer.propTypes = {
  className: propTypes.string.isRequired,
  selections: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    stock: propTypes.number.isRequired,
  })).isRequired,
  name: propTypes.string.isRequired,
  inStock: propTypes.bool.isRequired,
};

function StyledSelectSize({ selections }) {
  const inStock = selections.some((item) => item.stock > 0);

  return (
    <label htmlFor="size-selection">
      <StyledSelectionContainer selections={selections} name="size-selection" inStock={inStock} />
    </label>
  );
}

StyledSelectSize.propTypes = {
  selections: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    stock: propTypes.number.isRequired,
  })).isRequired,
};

export default StyledSelectSize;