import { prisma } from "../../../generated/prisma-client";

// This file is for computed field

export default {
    Post: {
      likes: ({ id }) => prisma.post({ id }).likes(),
      files: ({ id }) => prisma.post({ id }).files(),
      comments:  ({ id }) => prisma.post({ id }).comments(),
      user: ({ id }) => prisma.post({ id }).user(),

      isLiked: (parent, _, {request}) => {
        const { user } = request;
        const { id } = parent;
        return prisma.$exists.like({
          AND: [
            {
              user: {
                id: user.id
              }
            },
            {
              post: {
                id
              }
            }
          ]
        });
      },

      likeCount: parent =>
        prisma
          .likesConnection({
            where: { post: { id: parent.id } }
          })
          .aggregate()
          .count(),

      commentCount: parent =>
        prisma
          .commentsConnection({
            where: { post: { id: parent.id } }
          })
          .aggregate()
          .count()
    }
  };