import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Api } from "../utils/api";
import { CommentItem } from "../utils/api/types";

type UseCommentsProps = {
  setComments: Dispatch<SetStateAction<CommentItem[]>>;
  comments: CommentItem[];
};
export const useComments = (postId?: number): UseCommentsProps => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId);
        setComments(arr);
      } catch (error) {
        console.warn("Fetch comments", error);
      }
    })();
  }, []);
  return { comments, setComments };
};
