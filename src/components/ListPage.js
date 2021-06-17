import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AddForm from '../components/AddForm';
import List from '../components/List';

const StyleDiv = styled.div`
    width:300px;
    background:#fff;
    margin:0 auto;
    flex-direction:column;
    align-items: center;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    padding:20px;
`;

const Button = styled.button`
    width: 80px;
    margin:0 auto;
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: #fff;
    color:rgb(121, 81, 255);
    cursor:pointer;

    :hover {
    border:1px solid rgb(121, 81, 255);
    border-radius: 5px;
    background: rgb(121, 81, 255);
    color:#fff;
    }
`

const ListPage = props => {

    const [lists, setLists] = useState([])
    
    const addList = newItem => {
        if (newItem.text) {
            const data = [...lists, newItem]
            setLists(data)
        }else{
            alert('請輸入內容')
        }
    }
    
    const handleRemove = (key) => {
        const finishRemoveLists = lists.filter(list =>list.key !== key)
        setLists(finishRemoveLists)
    }

  
 
    return(
        <StyleDiv style={{display:`${props.display}`}}>
            <AddForm addList={addList}/>
            <List lists={lists} handleRemove={handleRemove}/>
            <Button onClick={() => props.switchPage()} >回首頁</Button>
        </StyleDiv>
    )
}

export default ListPage;