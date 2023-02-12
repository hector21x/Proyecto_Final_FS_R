import axios from "axios";
export const login = async (user) => {
    console.log(user);
    const response = await axios.post("http://localhost:8000/users", user);
    return response.data;
}