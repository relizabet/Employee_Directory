import axios from "axios";

export class API {

    public static getEmployees() {
        return axios.get("https://randomuser.me/api/?results=20&nat=us");
    }

}