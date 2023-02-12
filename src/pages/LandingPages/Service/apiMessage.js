import axios from "axios";
export const message = async (client) => {
    console.log(client);
    const response = await axios.post("http://localhost:8000/clients", client);
    return response.data;
}