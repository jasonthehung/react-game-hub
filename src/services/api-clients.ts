import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8b34ee3755cf40f18f0e53d6c0356881",
    },
})
