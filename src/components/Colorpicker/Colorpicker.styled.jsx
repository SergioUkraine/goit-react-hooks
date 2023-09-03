import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 30px;
`;

export const ColorTab = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 10px;
  transform: ${props => (props.active ? 'scale(1.1)' : 'scale(1)')};
  transition: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition-duration: 250ms;
  background-color: ${props => props.color};
  cursor: pointer;
  :last-of-type {
    margin-right: 0;
  }
  :hover {
    transform: scale(1.1);
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    transition-duration: 250ms;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: -25px;
  left: 10px;
`;
