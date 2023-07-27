import axios from "axios"
const newConnectorssfasdasd = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/104376/connectors",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
