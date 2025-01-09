const { Mail, Copy, Twitter, Github, Figma } = require("lucide-react");

const ContactMe = () => {
  return (
    <div className="h-[472px] flex flex-col items-center justify-center gap-6 px-4 py-14">
      <p className="px-5 py-1 w-[122px] h-[28px] bg-gray-200 border-solid rounded-xl text-sm flex justify-center">
        Get in touch
      </p>
      <p className="flex justify-center items-center text-xl font-normal text-gray-600">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </p>
      <div className="flex flex-col justify-center text-gray-900 text-lg font-semibold">
        <div className="flex flex-row gap-1">
          <Mail className="w-6 h-6" />
          <p>tom@pinecone.mn</p>
          <Copy />
        </div>
        <div className="flex flex-row gap-1">
          <Mail />
          <p>+976 88112233</p>
          <Copy />
        </div>
      </div>
      <div>
        <p className="flex text-base font-normal text-gray-600 justify-center">
          You may also find me on these platforms!
        </p>
        <div className="flex flex-row justify-center">
          <Github className="w-9 h-9 p-[6px]" />
          <Twitter className="w-9 h-9 p-[6px]" />
          <Figma className="w-9 h-9 p-[6px]" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
