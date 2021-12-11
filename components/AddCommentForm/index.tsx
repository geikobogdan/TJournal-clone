import React from "react";
import Input from "@material-ui/core/Input";
import styles from "./AddCommentForm.module.scss";
import { Button } from "@material-ui/core";
import { Api } from "../../utils/api";
import { CommentItem } from "../../utils/api/types";

interface AddCommentFormProps {
  postId: number;
  onSuccessAdd: (obj: CommentItem) => void;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({
  postId,
  onSuccessAdd,
}) => {
  const [clicked, setClicked] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("");

  const onAddComment = async () => {
    try {
      setLoading(true);
      const comment = await Api().comment.create({ postId, text });
      setClicked(false);
      setText("");
      setLoading(false);
      onSuccessAdd(comment);
    } catch (error) {
      console.warn("Add comment", error);
    }
  };
  return (
    <div className={styles.form}>
      <Input
        disabled={isLoading}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          disabled={isLoading}
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Опубликовать
        </Button>
      )}
    </div>
  );
};
