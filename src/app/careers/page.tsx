type Career = {
    id: number;
    name: string;
    description: string;
};

const careers: Career[] = [
    {
        id: 1,
        name: "Ingeniería en Sistemas de Información",
        description: "Se enfoca en el desarrollo, implementación y gestión de sistemas informáticos para resolver problemas empresariales.",
    },
    {
        id: 2,
        name: "Ingeniería en Computación",
        description: "Combina la electrónica y la programación para crear hardware y software, enfocándose en el diseño de computadoras y redes.",
    },
    {
        id: 3,
        name: "Ciencias de la Computación",
        description: "Estudia de manera teórica y práctica la computación, incluyendo algoritmos, inteligencia artificial, y desarrollo de software.",
    },
    {
        id: 4,
        name: "Ingeniería en Software",
        description: "Se especializa en el diseño, desarrollo, mantenimiento y mejora de sistemas de software a gran escala.",
    },
    {
        id: 5,
        name: "Ciberseguridad",
        description: "Protección de sistemas, redes y datos contra ataques cibernéticos, mediante análisis de vulnerabilidades y gestión de incidentes.",
    },
    {
        id: 6,
        name: "Tecnologías de la Información (TI)",
        description: "Abarca la gestión de sistemas de información, redes, bases de datos y soporte técnico en una organización.",
    },
    {
        id: 7,
        name: "Ingeniería en Telecomunicaciones",
        description: "Se enfoca en la transmisión y recepción de datos mediante redes de comunicación, como internet, telefonía y redes móviles.",
    },
    {
        id: 8,
        name: "Desarrollo de Videojuegos",
        description: "Creación de videojuegos, abarcando programación, diseño de mecánicas, arte y narrativa interactiva.",
    },
    {
        id: 9,
        name: "Análisis de Datos (Data Science)",
        description: "Recopilación, procesamiento, análisis e interpretación de grandes volúmenes de datos para la toma de decisiones.",
    },
    {
        id: 10,
        name: "Inteligencia Artificial y Machine Learning",
        description: "Desarrollo de sistemas que aprenden y toman decisiones basadas en datos, como redes neuronales y algoritmos de aprendizaje automático.",
    },
    {
        id: 11,
        name: "Ingeniería en Redes y Comunicaciones",
        description: "Creación y administración de redes de comunicación que permiten la transmisión eficiente de datos entre dispositivos.",
    },
    {
        id: 12,
        name: "Robótica",
        description: "Combina mecánica, electrónica y software para diseñar y construir robots, sistemas de automatización y control.",
    },
    {
        id: 13,
        name: "Administración de Sistemas Informáticos",
        description: "Gestión, administración y mantenimiento de sistemas informáticos y redes en organizaciones o empresas.",
    },
    {
        id: 14,
        name: "Ingeniería en Inteligencia Artificial",
        description: "Desarrollo de sistemas basados en IA para resolver problemas complejos que imitan capacidades humanas como el razonamiento y la toma de decisiones.",
    },
    {
        id: 15,
        name: "Realidad Virtual y Aumentada",
        description: "Creación de entornos simulados o aumentados mediante tecnologías de realidad virtual y aumentada.",
    },
    {
        id: 16,
        name: "Desarrollo Web y Aplicaciones Móviles",
        description: "Creación de sitios web, aplicaciones móviles y servicios en línea, tanto en el lado del cliente (front-end) como en el servidor (back-end).",
    },
    {
        id: 17,
        name: "Arquitectura de Software",
        description: "Planificación y diseño de sistemas de software a gran escala, considerando su estructura, mantenimiento y escalabilidad.",
    },
    {
        id: 18,
        name: "DevOps",
        description: "Combina desarrollo de software y operaciones de TI para mejorar la colaboración y automatización en la creación de aplicaciones y servicios.",
    },
    {
        id: 19,
        name: "Ingeniería en Big Data",
        description: "Gestión y análisis de grandes volúmenes de datos utilizando herramientas avanzadas de almacenamiento y procesamiento.",
    },
    {
        id: 20,
        name: "Computación Cuántica",
        description: "Uso de principios cuánticos para desarrollar una nueva generación de computadoras extremadamente potentes y rápidas.",
    }
];
export default function Carreer() {
    return <div>
        <h1 className="bg bg-blue-500">Lista de Carreras IT</h1>
        {careers.map((career) => (
            <ul key={career.id}>
                <li>{career.name}</li>
            </ul>
        ))}

    </div>
}