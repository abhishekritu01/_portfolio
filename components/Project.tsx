import Link from "next/link";
import Image from "next/image";
// import foodd from "../public/foodd.png";

const projects = [
    {
        id: 1,
        title: 'Ag-Grid Dashboard & Data Management',
        href: 'https://ag-grid-demo-nine.vercel.app/',
        description: "Experience the power of data with our Ag-Grid Dashboard. We've created a versatile data management platform with Ag-Grid, offering comprehensive table management and data visualization capabilities.",
        imageUrl: '/mainIcons.svg', // Replace with the actual path to your image
        date: 'Jan 15, 2023',
        datetime: '2023-01-15',
        category: { title: 'Web Development', href: 'https://your-category-url.com/web-development' },
        client: {
            name: '',
            industry: '',
            location: '',
        },
    },
    {
        id: 2,
        title: 'Dashboard Development',
        href: 'https://abhishekritu01.github.io/dashboard_deploy_gh/',
        description: 'We created a custom dashboard for a client to help them track their business metrics. The dashboard was built using React and Tailwind CSS.',
        imageUrl: '/mainIcons.svg', // Replace with the actual path to your image
        date: 'Mar 16, 2023',
        datetime: '2023-03-16',
        category: { title: 'Web Development', href: 'https://your-category-url.com/web-development' },
        client: {
            name: '',
            industry: '',
            location: '',
        },
    }
    // Add more projects...
];

const FreelanceProjects = () => {
    return (
        <>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">Freelance Projects</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-200">
                            Explore some of our recent freelancing projects and how we can help your business succeed.
                        </p>
                        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                            {projects.map((project) => (
                                <article key={project.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                        <Image
                                            src={project.imageUrl}
                                            alt="Project Image"
                                            width={500} // Specify the actual width of your image
                                            height={300} // Specify the actual height of your image
                                            className="absolute inset-0 h-full w-full rounded-2xl  object-cover"
                                        />

                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-x-4 text-xs">
                                            <time dateTime={project.datetime} className="text-gray-100">
                                                {project.date}
                                            </time>
                                            <Link href={project.category.href}>
                                                <span className="relative z-10 rounded-full bg-indigo-950 px-3 py-1.5 font-medium text-gray-200 hover:bg-gray-900">
                                                    {project.category.title}
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="group relative max-w-xl">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-200">
                                                <Link href={project.href}>
                                                    <span className="absolute inset-0" />
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <p className="mt-5 text-sm leading-6 text-gray-200">{project.description}</p>
                                        </div>
                                        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                            <div className="relative flex items-center gap-x-4">
                                                <div>
                                                    <p className="font-semibold text-gray-100">
                                                        {project.client.name ? `Client: ${project.client.name}` : ''}
                                                    </p>
                                                    <p className="text-gray-200">
                                                        {project.client.industry ? `Industry: ${project.client.industry}` : ''}
                                                    </p>
                                                    <p className="text-gray-200">
                                                        {project.client.location ? `Location: ${project.client.location}` : ''}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FreelanceProjects;
