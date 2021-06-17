import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    padding:10px;
`
const Li = styled.li`
    width:300px;
    display: flex;
    justify-content:space-between;
    margin-bottom:4px;

    :hover{
        background:rgba(150, 40, 255, 0.5);
    }
`

const Button = styled.button`
    font-size:12px;
    border:none;
    border-radius: 5px;
    background: rgb(121, 81, 255);
    color:#fff;
    cursor:pointer;

    :hover {
    background: rgb(121, 81, 150);
    color:#fff;
    }
`

const List = props => {

    const onClick = removeKey => {
        props.handleRemove(removeKey)
    }

    const renderList = props.lists.map(list => {
        return (
            <Li key={list.key}>
                {list.text}
                <Button onClick={() => onClick(list.key)}>刪除</Button>
            </Li>
        )
    })

    return(
        <Ul>{renderList}</Ul>
    )

}

export default List;