import { prisma } from "~/db.server";

import type { Post } from "@prisma/client";

// type Post = {
//   slug: string;
//   title: string;
// };

// export async function getPosts(): Promise<Array<Post>> {
//   return [
//     {
//       slug: "my-first-post",
//       title: "My First Post",
//     },
//     {
//       slug: "90s-mixtape",
//       title: "A Mixtape I Made Just For You",
//     },
//   ];
// }

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post });
}

export async function updatePost(
  slug: string,
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.update({ where: { slug }, data: post });
}

export async function deletePost(slug: string) {
  return prisma.post.delete({ where: { slug } });
}
