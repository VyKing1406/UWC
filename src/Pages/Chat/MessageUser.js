import { memo } from "react";
import { Avatar } from "@mui/material";
import styles from "./style_messageuser.module.css";

function MessageUser({ data, onSelect }) {
  return (
    <div
      className={styles.wrapper}
      onClick={(e) => {
        onSelect(e, data.id);
      }}
    >
      <div className={styles.left}>
        <Avatar
          src={data.avatar}
          sx={{
            width: "40px",
            height: "40px",
            border: "1px solid #cccccc",
          }}
        ></Avatar>
        <div className={styles.info}>
          <h4
            style={{
              color: "#121212",
              fontWeight: "500",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {data.name}
          </h4>
          <p
            style={{
              fontWeight: "300",
              fontSize: "14px",
              color: "#a1a1a1",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              maxWidth: "16ch",
            }}
          >
            {/* {fakeLastMess()} */}
            You welcome.
          </p>
        </div>
      </div>
      <div className={styles.right}>{/* fakeTime() */}8:12 AM</div>
    </div>
  );
}

export default memo(MessageUser);