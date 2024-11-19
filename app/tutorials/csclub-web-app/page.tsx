export default function CSClubAppTutorial() {
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-4">CS Club App Setup Guide</h2>
            <p className="mb-4">
                This tutorial will guide you through the steps to clone the CS Club web app and get it running on your local machine.
            </p>

            <h3 className="text-2xl font-semibold mb-2">1. Prerequisites</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>
                    Install <a href="https://code.visualstudio.com/" target="_blank" className="text-blue-600 hover:underline">Visual Studio Code</a> for code editing.
                </li>
                <li>
                    Install <a href="https://nodejs.org/" target="_blank" className="text-blue-600 hover:underline">Node.js</a> (LTS version recommended).
                </li>
                <li>
                    Optionally, install <a href="https://git-scm.com/downloads" target="_blank" className="text-blue-600 hover:underline">Git</a> if it's not already installed.
                </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">2. Clone the Repository</h3>
            <p className="mb-4">
                Open a terminal or command prompt and run the following command to clone the CS Club web app repository:
            </p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                git clone https://github.com/MSUCSClub/csclub-web-app.git
            </pre>

            <h3 className="text-2xl font-semibold mb-2">3. Navigate to the Project Directory</h3>
            <p className="mb-4">
                Change into the project directory using the following command:
            </p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                cd csclub-web-app
            </pre>

            <h3 className="text-2xl font-semibold mb-2">4. Install Dependencies</h3>
            <p className="mb-4">
                Run the following command to install the necessary packages:
            </p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                npm install
            </pre>

            <h3 className="text-2xl font-semibold mb-2">5. Run the Development Server</h3>
            <p className="mb-4">
                Start the development server using the following command:
            </p>
            <pre className="bg-gray-100 p-4 rounded mb-4">
                npm run dev
            </pre>
            <p className="mb-4">
                Open your browser and visit <a href="http://localhost:3000" target="_blank" className="text-blue-600 hover:underline">http://localhost:3000</a> to see the application running.
            </p>

            <h3 className="text-2xl font-semibold mb-2">6. Next.js Resources</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>
                    <a href="https://nextjs.org/docs" target="_blank" className="text-blue-600 hover:underline">Official Next.js Documentation</a>
                </li>
                <li>
                    <a href="https://nextjs.org/learn" target="_blank" className="text-blue-600 hover:underline">Next.js Learning Path</a>
                </li>
                <li>
                    <a href="https://react.dev/learn" target="_blank" className="text-blue-600 hover:underline">React Documentation</a>
                </li>
            </ul>

            <p>
                If you encounter any issues, please refer to the repository's README file or reach out to the CS Club for support.
            </p>
        </div>
    );
}