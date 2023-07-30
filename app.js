import axios from "axios";

async function Write(num){

    const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+num);
    const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+num);

    console.log("users", user);
    console.log("post", post);
}

export default Write;