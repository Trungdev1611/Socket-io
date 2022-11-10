import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { listItem } from "../../constant";
export default function ListItemUser() {
  return (
    <div>
      <List dense={true} sx={{ paddingLeft: "15px", marginTop: "10px" }}>
        {listItem.map((item, index) => {
          return (
            <ListItem key={item.key}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
