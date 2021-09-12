import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardsBlock = styled.span`
  overflow-wrap: break-word;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 500px;
  height: 100px;
  margin: 0 0px 27px 0px;
  padding: 10px;
`

export const Lines = styled.div`
  pointer-events: none;
  width: 482px;
  position:absolute; 

  img{
    width: 482px;
  }
`

export const ImageLines = styled.img`
  width: 482px;
  
`
