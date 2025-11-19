import styled from "styled-components";

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    width: 300px;
    border-radius: 12px;
    border: 2px solid #121212;
    background: transparent;
`

const SearchInput = styled.input`
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: inherit;
    background: transparent;
    color: white;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: white;
        opacity: 0.7;
    }
`

export { SearchBox, SearchContainer, SearchInput };