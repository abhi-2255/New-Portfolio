import { useEffect, useState } from "react";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function Portfolio() {
    const [projects, setProjects] = useState<Project[]>([]);
    const URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${URL}/projects`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error loading Projects:", err));
    }, [])

    return (
        <div className="gap-6 px-6 lg:px-20 md:px-10 sm:px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <div key={project.id}>
                    <div className="rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <img
                            src= {project.image}
                            alt={project.title}
                            className="object-cover object-center w-full h-full transform hover:scale-100 transition-transform duration-300"
                        />
                    </div>
                    <div className="px-1 py-4">
                        <h3 className="lg:text-xl md:text-lg sm:text-lg mb-2">
                            {project.title}
                        </h3>
                        <p className="text-md text-gray-700">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
