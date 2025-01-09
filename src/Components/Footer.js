const { Copyright } = require("lucide-react");

const Footer = () => {
  return (
    <div className="flex flex-row py-6 justify-center">
      <Copyright className="w-4 h-4" />
      <p className="text-sm font-normal">
        2024 | Greetings with ❤️️ from Ulaanbaatar
      </p>
    </div>
  );
};

export default Footer;
