import React from 'react';
import styled from 'styled-components';

const Search = () => {
  const SearchStyle = styled.div`
    width: 430px;
    display: inline-block;
    background-color: white;
    height: 480px;
    position: relative;
    top: 10px;
    left: 50px;
    padding: 20px 30px;
  `;

  const SearchTitleStyle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: black;
  `;

  const SearchSubTitleStyle = styled.td`
    font-size: 12px;
    padding: 10px 0px;
    font-weight: 600;
  `;
  const SearchInputStyle = styled.input`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;
  const SearchInputStyle2 = styled.select`
    height: 45px;
    width: 100%;
    color: rgb(100, 100, 100);
    font-size: 15px;
    border: 1px solid rgb(230, 230, 230);
  `;

  const SearchButtonBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: end;
    padding: 20px 0px;
  `;
  const SearchButtonStyle = styled.button`
    background-color: rgb(255, 90, 95);
    color: white;
    font-size: 15px;
    font-weight: 600;
    width: 70px;
    height: 45px;
    border-radius: 7px;
    border: 0px;
    cursor: pointer;
  `;

  return (
    <SearchStyle>
      <SearchTitleStyle>
        특색 있는 숙소와 즐길거리를 예약하오.
        <br />
      </SearchTitleStyle>
      <table style={{ width: '100%' }}>
        <tr>
          <SearchSubTitleStyle colSpan="2">목적지</SearchSubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchInputStyle type="text" placeholder="모든위치" />
          </td>
        </tr>
        <tr>
          <SearchSubTitleStyle>체크인</SearchSubTitleStyle>
          <SearchSubTitleStyle>체크아웃</SearchSubTitleStyle>
        </tr>
        <tr>
          <td>
            <SearchInputStyle type="date" />
          </td>
          <td>
            <SearchInputStyle type="date" />
          </td>
        </tr>
        <tr>
          <SearchSubTitleStyle colSpan="2">인원</SearchSubTitleStyle>
        </tr>
        <tr>
          <td colSpan="2">
            <SearchInputStyle2>
              <option>인원</option>
            </SearchInputStyle2>
          </td>
        </tr>
      </table>
      <SearchButtonBoxStyle>
        <SearchButtonStyle>검색</SearchButtonStyle>
      </SearchButtonBoxStyle>
    </SearchStyle>
  );
};

export default Search;
