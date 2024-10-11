let funk1 = async function () {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/1"
  );
  try {
    let comments = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return comments;
  } catch (error) {
    return Promise.reject(error);
  }
};

let funk2 = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  try {
    let posts = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    setTimeout(() => {
      return posts;
    }, 10000);
  } catch (error) {
    return Promise.reject(error);
  }
};

// Promise.all([funk1(), funk2()]).then((result) => {
//   console.log("Promise.all result: ", result);
// });

// Promise.allSettled([funk1(), funk2()]).then((result) => {
//   console.log("Promise.allSettled result: ", result);
// });

// Promise.race([funk1(), funk2()]).then((result) => {
//   console.log("Promise.race result: ", result);
// });
const func1 = () => {
  return "max";
};
const func2 = () => {
  return "ilya";
};

const test = (title, erhrtehrth) => {
  console.log(title);
  console.log(erhrtehrth() + " LOH");
};

test("test 1", () => {
  return "ilya";
});
test("test 2", func2);
