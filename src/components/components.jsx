import { useEffect, useState } from "react";
import axios from "axios";

export default function Project() {

    const [projects, setProjects] = useState < any > (null)
    const [skills, setSkills] = useState < any > (null)
    const URL = import.meta.env.API_URL

    const loadProjects = () => {
        fetch(`${URL}/projects`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error in Fetch Projects:", err));
    }

    const loadSkills = () => {
        axios
            .get(`${URL}/skills`)
            .then((res) => setSkills(res.data))
            .catch((err) => console.error("Error Fetching Skills:", err));
    }

    useEffect(() => {
        loadProjects()
        loadSkills()
    })

    return (
        <div>
            <h2>Projects Section</h2>
        </div>
    )
}
