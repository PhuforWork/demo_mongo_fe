import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function NestedList() {
     const [open1, setOpen1] = React.useState(true);
     const [open2, setOpen2] = React.useState(true);

     const handleClick1 = () => {
          setOpen1(!open1);
     };
     const handleClick2 = () => {
          setOpen2(!open2);
     };

     return (
          <List
               sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    border: 'none',
               }}
               component="nav"
               aria-labelledby="nested-list-subheader"
               subheader={
                    <ListSubheader
                         sx={{
                              fontSize: '1.3em',  // Cỡ chữ (có thể thay đổi)
                              color: 'black',       // Màu chữ (có thể thay đổi)
                              fontWeight: 'normal',  // Đậm chữ (nếu cần)
                              display: 'flex',
                              alignItems: 'center',
                         }}
                         component="div" id="nested-list-subheader">
                         <FilterAltOutlinedIcon sx={{ marginRight: 1 }} />
                         Bộ lọc tìm kiếm
                    </ListSubheader>
               }
          >
               {/* <ListItemButton>
                    <ListItemIcon>
                         <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
               </ListItemButton>
               <ListItemButton>
                    <ListItemIcon>
                         <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
               </ListItemButton> */}
               <ListItemButton onClick={handleClick1}>
                    <ListItemText primary="Hãng sản xuất" />
                    {open1 ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>
               <Collapse in={open1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                         <ListItemButton sx={{ pl: 4 }}>
                              <FormGroup>
                                   <FormControlLabel control={<Checkbox />} label="Label" />
                                   <FormControlLabel control={<Checkbox />} label="Label" />
                                   <FormControlLabel control={<Checkbox />} label="Label" />
                              </FormGroup>
                         </ListItemButton>
                    </List>
               </Collapse>
               <ListItemButton onClick={handleClick2}>
                    <ListItemText primary="Danh mục sản phẩm" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
               </ListItemButton>
               <Collapse in={open2} timeout="auto" unmountOnExit>
                    {/* <List component="div" disablePadding> */}
                         <ListItemButton sx={{ pl: 4 }}>
                              <FormGroup>
                                   <FormControlLabel control={<Checkbox />} label="Label" />
                                   <FormControlLabel control={<Checkbox />} label="Label" />
                                   <FormControlLabel control={<Checkbox />} label="Label" />
                              </FormGroup>
                         </ListItemButton>
                    {/* </List> */}
               </Collapse>
          </List>
     );
}
