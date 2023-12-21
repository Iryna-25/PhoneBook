import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  margin: 0rem auto;
  padding: 1.5rem;
`;

export const Form = styled.form`
  padding: 2rem 0rem;
  margin-bottom: 1.5rem;
  label {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

export const List = styled.ol`
  border: 0.5px solid #f7f1f1;
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.05rem;
  padding-left: 1rem;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 50%;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border-radius: 0.75rem;
  background-color: #ba7ee4;
  color: #fff;
  &:hover, &:focus {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #6e2ead;
  }
`;

export const DeleteButton = styled.button`
  background-color: #f26b6b;
  border-radius: 0.75rem;
  margin: 0.25rem;
  &:hover, &:focus {
    background-color: #d32828;
  }
`;