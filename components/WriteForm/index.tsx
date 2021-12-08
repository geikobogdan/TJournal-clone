import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";
import { Api } from "../../utils/api";
import { PostItem } from "../../utils/api/types";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("../Editor").then((m) => m.Editor), {
  ssr: false,
});

interface WriteFormProps {
  data?: PostItem;
}

export const WriteForm: React.FC<WriteFormProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState(data?.title || "");
  const [blocks, setBlocks] = useState(data?.body || []);

  const onAddPost = async () => {
    try {
      setLoading(true);
      const obj = {
        title,
        body: blocks,
      };
      if (!data) {
        const post = await Api().post.create(obj);
        router.push(`/write/${post.id}`);
      } else {
        const post = await Api().post.update(data.id, obj);
      }
    } catch (error) {
      console.warn("Create post", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
      />
      <div className={styles.editor}>
        <Editor initialBlocks={blocks} onChange={(arr) => setBlocks(arr)} />
      </div>
      <Button
        disabled={isLoading || !title || !blocks}
        onClick={onAddPost}
        variant="contained"
        color="primary"
      >
        {data ? "Сохранить" : "Опубликовать"}
      </Button>
    </div>
  );
};
