import axios from "axios";
export const register = async (user) => {
    console.log(user);
    const response = await axios.post("http://localhost:8000/users", user);
    console.log(response);
    return response.data;
}