import axios from "axios";
import { appMode, domain } from "../utils/urls";

const axiosUrl = axios.create({
    baseURL: `${domain}${appMode}`
})

export default axiosUrl;