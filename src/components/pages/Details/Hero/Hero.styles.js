import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #A8BCBE;
    width:100%;
    height:100%;
`

export const LoadingWrraper = styled.div`
    display: flex;
    justify-content: center;
    margin:20px;
`

export const HeroInner = styled.div`
    display: flex;
    margin:20px;
    padding:25px;
    border-radius:20px;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #fff;
    width:700px;
    height:300px;
    box-shadow: 7px 5px 5px #A1A8A9;

    .item__photo {
        width: 45%;
        border-radius: 10px;
        margin-right:25px;
    }

    .add{
        outline: none;
        border: none;
        padding: 10px 20px;
        margin-left:20px;
        font-family: Avenir;
        font-weight: 600;
        font-size: 15px;
        line-height: 160%;
        color: #273746;
        background-color: #F9EBEA;
        border-radius:5px;

        :hover {
            background-color: #009595;
            border-radius:5px;
        }
    }
`

export const Text = styled.div`
    margin:10px;
    padding:20px;
    background-color: #F2F3F4;
    border-radius:15px;

    h5{
        font-family: Avenir;
        font-weight: 900;
        font-size: 20px;
        line-height: 100%;
        color: #034545;
    }

    h3{
        font-family: Avenir;
        font-weight: 900;
        font-size: 20px;
        line-height: 100%;
        color: #566573;
    }
    
`

