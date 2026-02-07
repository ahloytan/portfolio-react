
const Card = ({project, index}) => {

    const pfDir = 'assets/carousel/';
    const linkDir = 'https://';
    
    return (
        <div className="pb-8 rounded" key={index}>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="overflow-auto">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                    <a href={linkDir + project.link} rel="noreferrer" target="_blank" alt={project.img}>
                    <img className="w-full" src={pfDir + project.img + '.webp'} alt={project.img} width="450" height="350" />
                    </a>
                    <p className="text-justify text-gray-700 dark:text-gray-400 mt-4">{project.desc}</p>
                    {project.icons.map((icon, index) => (
                    icon.link ? (
                        <a href={linkDir + icon.link} key={icon.icon + index} rel="noreferrer" target="_blank" alt={project.img}>
                        <img className="portfolioIcons" src={`assets/icons/${icon.icon}.svg`} alt={icon.icon} title={icon.icon} width="40" height="40"/>
                        </a>
                    ) : (
                        <img className="portfolioIcons" src={`assets/icons/${icon.icon}.svg`} alt={icon.icon} key={icon.icon + index} title={icon.icon} width="40" height="40"/>
                    )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card;