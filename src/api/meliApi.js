import axios from "axios";

export const meliApi = axios.create ({
    baseURL: "https://api.mercadolibre.com/sites/MLA/",
}) 