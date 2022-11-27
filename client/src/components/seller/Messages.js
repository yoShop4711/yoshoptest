import React, {  useState, useContext, useRef, useEffect } from "react"
import { GlobalState } from "../../GlobalState"
import axios from "axios"
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
// import socketIOClient from "socket.io-client";
  

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100%",
    },
    headerRow: {
      maxHeight: 60,
      zIndex: 5,
    },
    paper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      color: theme.palette.primary.dark,
    },
    messageContainer: {
      height: "100%",
      display: "flex",
      alignContent: "flex-end",
    },
    messagesRow: {
      maxHeight: "calc(100vh - 184px)",
      overflowY: "auto",
    },
    newMessageRow: {
      width: "100%",
      padding: theme.spacing(0, 2, 1),
    },
    messageBubble: {
      padding: 10,
      border: "1px solid white",
      backgroundColor: "white",
      borderRadius: "0 10px 10px 10px",
      boxShadow: "-3px 4px 4px 0px rgba(0,0,0,0.08)",
      marginTop: 8,
      maxWidth: "40em",
    },
    messageBubbleRight: {
      borderRadius: "10px 0 10px 10px",
    },
    inputRow: {
      display: "flex",
      alignItems: "flex-end",
    },
    form: {
      width: "100%",
    },
    avatar: {
      margin: theme.spacing(1, 1.5),
    },
    listItem: {
      display: "flex",
      width: "100%",
    },
    listItemRight: {
      flexDirection: "row-reverse",
    },
  }));
  
  
  
  

function Messages({id}) {

    let chatBottom = useRef(null);
    const classes = useStyles();

    
 
  
    const state = useContext(GlobalState)
    const[users] = state.UsersApi.users
    const[peoples, setPeoples] = useState([])

    
    
    const [token] = state.token
    const [messages, setMessages] = useState([])
    const [body, setNewMessage] = useState("");
    


    

    
     useEffect(() => {

      const getMessages = async () => {

        const res = await axios.get(`/message/coversation/query?userId=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`

          }
        })

        setMessages(res.data);


      }

      getMessages()

     }, [id, token])


     


     const handleChange = (event) => {
      

      setNewMessage(event.target.value)


     }

     let to = id

    

     
     const handleSubmit = async () => {
      

      const res = await axios.post('/message/send', {to, body}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


      console.log(res);


     
     } 

console.log(messages);

const getInitialsFromName = (username) => {
  const letters = String(username)
    .split(" ")
    .map((i) => i.charAt(0));
  return letters.join("");
}



    return(
<Grid container className={classes.root}>
      <Grid item xs={12} className={classes.headerRow}>
        <Paper className={classes.paper} square elevation={2}>
          <Typography color="inherit" variant="h6">
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={classes.messageContainer}>
          <Grid item xs={12} className={classes.messagesRow}>
    
              {
                messages && (
                  <List>
                    {
                      messages.map((message) => (
                        <ListItem key={message._id} 
                        className={classes.listItem} 
                        alignItems="flex-start">

                          <ListItemAvatar className={classes.avatar}>
                            <Avatar>
                              { getInitialsFromName(message.fromObj[0])}
                              
                            </Avatar>



                          </ListItemAvatar>



                          <ListItemText secondary={ <React.Fragment>{message.body}</React.Fragment> } />
                         

                        </ListItem>





                      ))
                    }



                  </List>

                )}
        
            <div ref={chatBottom} />
          </Grid>
          <Grid item xs={12} className={classes.inputRow}>
            <form onSubmit={ handleSubmit }  className={classes.form}>
              <Grid
                container
                className={classes.newMessageRow}
                alignItems="flex-end"
              >
                <Grid item xs={11}>
                  <TextField
                    id="message"
                    label="Message"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    value={body}
                    onChange={ handleChange || "" }
                    
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton type="submit">
                    <SendIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>


    )
}

export default Messages

