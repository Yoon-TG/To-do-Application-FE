import { DeleteOutlined } from "@mui/icons-material";
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import React from "react";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={item:props.item, readOnly:true};
        this.delete = props.delete;
        this.update = props.update;
    }

    deleteEventHandler = () => { //todo 아이템 delete()
        this.delete(this.state.item);
    }

    offReadOnlyMode = () => { //todo 아이템의 readOnly - false
        console.log("Event!", this.state.readOnly);
        this.setState({readOnly:false}, () => {
            console.log("ReadOnly? ", this.state.readOnly)
        });
    }

    enterKeyEventHandler = (e) => { //enter키를 누를 경우 readOnly - true 전환
        if(e.key === "Enter"){
            this.setState({readOnly: true});
            this.update(this.state.item); //수정된 정보값을 백엔드 update처리
        }
    }
    
    editEventHandler = (e) => { //tilte 수정을 위해 새로 작성된 value값을 저장
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item:thisItem});
    }

    checkboxEventHandler = (e) => { //checkbox의 done 상태를 변경하는 함수
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item:thisItem});
        this.update(this.state.item); //수정된 정보값을 백엔드 update처리
    }


    
    render(){
        const item = this.state.item;
        
        return(
            <ListItem>
                <Checkbox 
                checked={item.done} 
                onClick={this.checkboxEventHandler}
                // onChange={this.checkboxEventHandler}
                /> {/*disableRipple == materialUi 버튼에서 사용할 수 있는 옵션 */}
                <ListItemText>
                    <InputBase
                    inputProps={{"aria-label":"naked",
                    readOnly: this.state.readOnly,
                }}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    onClick={this.offReadOnlyMode}
                    onKeyDown={this.enterKeyEventHandler}
                    onChange={this.editEventHandler}
                    />
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton 
                    aria-label="Delete Todo"
                    onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            );
    }
}

export default Todo;