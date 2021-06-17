import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    padding-bottom:10px;
    border-bottom:1px solid #ccc;
`

const Form = styled.form`
    display:flex;
    width:300px;
    justify-content:space-between;
`

const Input = styled.input`
    width:200px;
`

const Button = styled.button`
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


const AddFrom = (props) => {

    const [addItem, setAddItem] = useState({text:'', key:''})

    const onSubmit =  e => {
        e.preventDefault()
        props.addList(addItem)
    }
    
    return (
        <StyleDiv>
            <Form onSubmit={e=>{onSubmit(e)}}>
                <Input 
                    type="text" 
                    onChange={e => setAddItem({text: e.target.value, key:Date.now()})}
                    value={addItem.text} />
                <Button type="submit">Add</Button>
            </Form>
        </StyleDiv>
    )
}

export default AddFrom;