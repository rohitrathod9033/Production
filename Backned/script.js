// let url = "https://dog.ceo/api/breeds/image/random";
// let iamge = document.querySelector("img")

// async function randomImage() {
//   let data = await axios.get(url);
//   console.log(data.data.message);

//   iamge.setAttribute("src", data.data.message)
//     return data.data.message;
// }

// console.log(randomImage())

let weakMap = new WeakMap();
console.log(weakMap);
let obj = { name: "rohit" };
weakMap.set(obj, "hello");
console.log(weakMap);
obj = null;
console.log(weakMap);