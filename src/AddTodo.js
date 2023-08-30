import { Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={item:{title:""}}; //사용자의 입력을 저장할 오브젝트
        this.add = props.add; //props로 넘겨받은 add함수를 this.add에 연결시키기
    }

    onInputChange = (e) => { //todoItem 입력된 title 저장 이벤트
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
        console.log(thisItem);
    }

    onButtonClick = () => { //+버튼 누르면 add 되는 이벤트
        this.add(this.state.item); //add함수 사용하기
        this.setState({item:{title: ""}});
    }

    enterKeyEventHandler = (e) => { //input 필드에서 enter키 사용시 onbuttonclick()이벤트처럼 작동하기 위함
        if(e.key === 'Enter'){
            this.onButtonClick();
        }
    }
    

    render(){
        return(
            <Paper style={{margin:16, padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Add Todo here" 
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.item.title}
                        onKeyDown={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                        fullWidth 
                        color="secondary" 
                        variant="outlined"
                        onClick={this.onButtonClick}>
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AddTodo;