import { OutputData } from "@editorjs/editorjs";
import { AxiosInstance } from "axios";
import { PostItem, SearchPostDto } from "./types";

type CreatePostDto = {
  title: string;
  body: OutputData["blocks"];
};

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<PostItem[]>("/posts");
    return data;
  },
  async search(query: SearchPostDto) {
    const {
      data: { items },
    } = await instance.get<{ items: PostItem[] }>("/posts/search", {
      params: query,
    });
    return items;
  },
  async getOne(id: number) {
    const { data } = await instance.get<PostItem>(`/posts/${id}`);
    return data;
  },
  async create(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostItem }>(
      "/posts",
      dto
    );
    return data;
  },
  async update(id: number, dto: CreatePostDto) {
    const { data } = await instance.patch<CreatePostDto, { data: PostItem }>(
      `/posts/${id}`,
      dto
    );
    return data;
  },
});
