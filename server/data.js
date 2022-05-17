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
      created: casual.date("YYYY-MM-DD"),
    })),
  ],
  categories: ["Express", "Axios", "React", "CSS", "Javascript"],
};

// take random number of random unique categories from `data.categories` and put that array into each post
for (const post of data.posts) {
  let i = 0;
  const categories = [];
  const numCategories = Math.floor(Math.random() * data.categories.length);

  do {
    categories.push(
      data.categories[Math.floor(Math.random() * data.categories.length)]
    );

    i++;
  } while (i <= numCategories);

  post.categories = [...new Set(categories)];
}

export default data;
