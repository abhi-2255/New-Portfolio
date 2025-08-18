import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faJs, faHtml5, faCss3Alt, type IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faServer } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

type Skill = {
    id: number;
    name: string;
    icon: string;
}

const iconMap: Record<string, IconDefinition> = {
    faReact: faReact,
    faNodeJs: faNodeJs,
    faLeaf: faLeaf,
    faServer: faServer,
    faJs: faJs,
    faHtml5: faHtml5,
    faCss3Alt: faCss3Alt,
}

export default function Skills() {
    const [skills, setSkills] = useState<Skill[]>([])

    useEffect(() => {
        axios
            .get("/db.json")
            .then((res) => setSkills(res.data.skills))
            .catch((err) => console.error("Error loading Skills:", err))
    }, [])

    return (
        <div className="lg:px-20 md:px-10 sm:px-5 px-5 py-4 mt-5">
            <h2 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl font-bold">
                Skills
            </h2>

            <div className="pt-5 flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <h3
                        key={skill.id}
                        className="border border-gray-400 rounded-md px-4 py-2 flex items-center gap-2 
                    lg:text-xl md:text-xl sm:text-lg font-semibold  hover:bg-gray-100 transition duration-200"
                    >
                        <FontAwesomeIcon icon={iconMap[skill.icon]} /> {skill.name}
                    </h3>
                ))}
            </div>
        </div>
    );
}

