import React, { useContext} from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GlobalStoreContext } from '../store'

export default function EditListModal(props){
    const { store } = useContext(GlobalStoreContext);
    const {open,EditList,close, payload} = props;

    function handleOnChange (event){
        let sourceId = event.target.id;
        let id = sourceId.substring(sourceId.indexOf("-") + 1);
        payload.items[id] = event.target.value;
    }
    function handleNameChange(event){
        payload.name = event.target.value;
    }
    return(
        <Dialog
            id = "listmodal"
            maxWidth='sm'
            open= {open}
            onClose={close}
            >
            <DialogTitle style = {{backgroundColor: "#d4d4f5"}}>
                <TextField
                        id="name"
                        fullWidth
                        variant="standard"
                        style = {{ background: "white"}}
                        onChange = {handleNameChange}
                        defaultValue = {payload.name}
                        // onKeyPress = {(event)=>{
                        //     KeyPress(event)
                        // }}
                    />
            </DialogTitle>
            <DialogContent id = "content-list-modal">
                <Box id="createitembox">
                    <div id="create-numbering">
                        <Box id = "bordermargin">
                        <div id="item-number-border"><Typography variant="h3">1.</Typography></div>
                        </Box>
                        <Box id = "bordermargin">
                        <div id="item-number-border"><Typography variant="h3">2.</Typography></div>
                        </Box>
                        <Box id = "bordermargin">
                        <div id="item-number-border"><Typography variant="h3">3.</Typography></div>
                        </Box>
                        <Box id = "bordermargin">
                        <div id="item-number-border"><Typography variant="h3">4.</Typography></div>
                        </Box>
                        <Box id = "bordermargin">
                        <div id="item-number-border"><Typography variant="h3">5.</Typography></div>
                        </Box>
                    </div>
                    <div id = "creat-items">
                        <TextField fullWidth id ="listitems-0" defaultValue = {payload.items[0]} onChange = {handleOnChange}
                            style = {{marginBottom: "5px", borderRadius: "0.5rem", overflow: "hidden", color: "black", fontSize: "48pt", backgroundColor: "#d6b95e"}}>
                        </TextField>
                        <TextField fullWidth id ="listitems-1" defaultValue = {payload.items[1]} onChange = {handleOnChange}
                            style = {{marginBottom: "5px", borderRadius: "0.5rem", overflow: "hidden", color: "black", fontSize: "48pt", backgroundColor: "#d6b95e"}}>
                        </TextField>
                        <TextField fullWidth id ="listitems-2" defaultValue = {payload.items[2]} onChange = {handleOnChange}
                            style = {{marginBottom: "5px", borderRadius: "0.5rem", overflow: "hidden", color: "black", fontSize: "48pt", backgroundColor: "#d6b95e"}}>
                        </TextField>
                        <TextField fullWidth id ="listitems-3" defaultValue = {payload.items[3]} onChange = {handleOnChange}
                            style = {{marginBottom: "5px", borderRadius: "0.5rem", overflow: "hidden", color: "black", fontSize: "48pt", backgroundColor: "#d6b95e"}}> 
                        </TextField>
                        <TextField fullWidth id ="listitems-4" defaultValue = {payload.items[4]} onChange = {handleOnChange}
                            style = {{marginBottom: "5px", borderRadius: "0.5rem", overflow: "hidden", color: "black", fontSize: "48pt", backgroundColor: "#d6b95e"}}>
                        </TextField>
                    </div>
                    
                </Box>
            </DialogContent>
            <DialogActions id = "action-list-modal">
                    <Button 
                        onClick= {()=>{EditList(payload)}}
                        style = {{backgroundColor: "#c4c4c4", color: "black", fontWeight: "bold"}}
                    >Save</Button>
                    <Button 
                        onClick={close}
                        style = {{backgroundColor: "#c4c4c4", color: "black", fontWeight: "bold"}}
                    >Publish</Button>
            </DialogActions>
        </Dialog>
    )
}