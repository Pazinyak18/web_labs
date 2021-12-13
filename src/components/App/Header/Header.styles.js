import styled from 'styled-components';

export const LinkingWrapper = styled.div`
#header{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7DCEA0;
    border-bottom: solid;
    border-color: gray;
}

.selected {
    display:flex;
    flex-direction: column-reverse;
    align-items:center;
    :after {
        content: '';
        display: block;
        position: absolute;
        justify-content: center;
        height: 3px;
        border-left: 50px solid black;
    }
}
ul {
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}
li {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    font-weight: bold;
    margin: 10px 30px;
    font-size: 24px;
    font-weight: 100;
    a {
        color: black;
        text-decoration: none;
    }
}
`
export const Image = styled.div`
  img {
    width: 70px;
    height: 70px;
    margin-left: 5px;
    margin-top: 10px;
  }
`


