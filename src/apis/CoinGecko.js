import axios from "axios"

//create axios object with endpoint
export default axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
})