import Link from "next/link";

export default function TutorialsPage() {
    const tutorials = [
        {
            title: "CS Club App Setup",
            path: "/tutorials/csclub-web-app",
            description: "Learn how to clone, set up, and run the CS Club web app locally.",
        },
        {
            title: "Getting Started with Next.js",
            path: "https://nextjs.org/docs",
            description: "Official Next.js documentation to help you get started with your Next.js projects.",
        },
        {
            title: "React Beginner's Guide",
            path: "https://react.dev/learn",
            description: "A comprehensive guide to learning React, the library used by Next.js.",
        },
        {
            title: "Node.js Basics",
            path: "https://nodejs.dev/en/learn",
            description: "Learn the fundamentals of Node.js, a JavaScript runtime for server-side development.",
        },
        {
            title: "Git and GitHub Guide",
            path: "https://docs.github.com/en/get-started",
            description: "Understand the basics of Git and GitHub for version control and collaboration.",
        },
    ];

    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-6">Tutorials</h2>
            <div className="space-y-6">
                {tutorials.map((tutorial, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                        {tutorial.path.startsWith("http") ? (
                            <a href={tutorial.path} target="_blank" className="text-blue-600 hover:underline">
                                <h3 className="text-2xl font-semibold">{tutorial.title}</h3>
                                <p className="text-gray-600">{tutorial.description}</p>
                            </a>
                        ) : (
                            <Link href={tutorial.path}>
                                <div className="cursor-pointer">
                                    <h3 className="text-2xl font-semibold text-blue-600 hover:underline">
                                        {tutorial.title}
                                    </h3>
                                    <p className="text-gray-600">{tutorial.description}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}