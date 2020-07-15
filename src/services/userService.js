// import { Person } from "../entities/Person";
import axios from "axios";
import { Person } from "../entities/Person";

export const fetchUsers = () => {
    return axios.get("https://randomuser.me/api/?results=50")
        .then(response => response.data.results)
        .then(response => {
            const users = []
            response.forEach(elem => {
                const onePerson = new Person(
                    elem.email, elem.picture.large, elem.gender, elem.name.first, elem.name.last, elem.dob.date, elem.id.value)
                users.push(onePerson)
            })
            return users;
        }
        )
}