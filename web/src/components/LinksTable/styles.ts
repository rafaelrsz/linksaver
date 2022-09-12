import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  table {
    margin-top: 2rem;
    width: 100%;
    border-spacing: 0 0.5rem;

    td {
      padding: 1rem 2rem;
      text-align: center;
      border: 0;
      color: var(--text-body);
      background: var(--shape-terc);

      &:first-child {
        text-align: left;
      }
    }

    td:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    td:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }

    td:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    td:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }

  td.button {
    padding: 0rem 0.15rem;
    text-align: center;
    border: 0;
    color: var(--text-body);
    background: var(--shape-terc);

    &:last-child {
      padding: 0 1rem 0 0;
    }
  }

  button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    margin-top: 1rem;

    border: 0px;
    :focus {
      outline-color: ${lighten(0, "#121214")};
    }
    background: var(--background);

    font-weight: 400;
    font-size: 1rem;

    color: var(--placeholder);
  }
`;
