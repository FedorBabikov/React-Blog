import casual from "casual";
import { v4 as uuid } from "uuid";

const data = {
  users: [
    ...new Array(+process.env.NUM_USERS).fill(undefined).map(() => ({
      name: casual.username,
      password: casual.password,
    })),
  ],
  posts: [
    ...new Array(+process.env.NUM_POSTS).fill(undefined).map(() => ({
      id: uuid(),
      image: process.env.POST_IMG_URL,
      title: casual.title,
      contents: casual.sentences(+process.env.NUM_POST_SENT),
    })),
  ],
};

export default data;
