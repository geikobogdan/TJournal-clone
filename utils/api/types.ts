import { OutputData } from "@editorjs/editorjs";

export type LoginDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginDto;

export type SearchPostDto = {
  title?: string;
  body?: string;
  views?: "DESC" | "ASC";
  limit?: number;
  take?: number;
  tag?: string;
};

export type ResponseUser = {
  createdAt?: string;
  email: string;
  fullName: string;
  commentsCount?: number;
  id: number;
  token: string;
  updatedAt?: string;
};

export type PostItem = {
  title: string;
  body: OutputData["blocks"];
  description: string;
  tags: null | string;
  id: number;
  views: number;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
};

export type CommentItem = {
  id: number;
  post: PostItem;
  text: string;
  user: ResponseUser;
  createdAt: string;
  updatedAt: string;
};
