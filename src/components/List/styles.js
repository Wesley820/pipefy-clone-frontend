import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
  }

  h2 {
    display: flex;
    align-items: center;
    font-weight: 500px;
    font-size: 16px;
    padding: 0 10px;

    p {
      margin-left: 8px;
      font-size: 14px;
      font-weight: normal;
      color: #707070;
    }
  }

  button {
    height: 42px;
    width: 42px;
    border: 0;
    border-radius: 18px;
    background-color: #006dc1;
    cursor: pointer;
  }

  ul {
    margin-top: 30px;
    opacity: ${(props) => (props.done ? 0.6 : 1)};
  }

  > p {
    text-align: center;
    color: #20202090;
    margin: 35px 0 30px;
  }
`;
