export type NewsStory = {
    id: string;
    title: string;
    content: string;
    link?: string;
    linkText?: string;
  };
  
export const newsStories: NewsStory[] = [
    {
        id: "1",
        title: "CS Club App Launch",
        content:
        "Celebrating the launch of the new CS Club website!",
    },
    {
        id: "2",
        title: "CS Club Meeting Recap",
        content:
        "Last week’s meeting was a great success! We discussed the upcoming CS Club Christmast light show, new tutorials, and had a great turnout.",
    },
    {
        id: "3",
        title: "New Tutorials Added",
        content:
        "We’ve added several new tutorials on web development and data science. Head over to the Tutorials page to start learning!",
        link: "/tutorials",
        linkText: "Go to Tutorials",
    },
];

export default function News() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-red-600">CS Club News</h1>
      <p className="text-center mt-4 text-gray-700">
        Stay up to date with the latest announcements and updates from the Minot State University CS Club.
      </p>

      {/* Dynamic News Articles */}
      <div className="mt-8 space-y-8">
        {newsStories.map((story: NewsStory) => (
          <div key={story.id} className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-red-600">{story.title}</h2>
            <p className="mt-2 text-gray-600">{story.content}</p>
            {story.link && story.linkText && (
              <a
                href={story.link}
                className="text-blue-600 underline hover:text-blue-800 mt-2 block"
              >
                {story.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}