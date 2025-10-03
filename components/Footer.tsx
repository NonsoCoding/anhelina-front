import { MessageSquareIcon } from "lucide-react";

const Footer = () => {
  const navItems = [
    { name: "Meet Anhelina", link: "./" },
    { name: "About", link: "./" },
    { name: "Explore plans", link: "./" },
    { name: "FAQ", link: "./" },
  ];

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700">
      <div className="w-[90%] md:w-[80%] mx-auto py-12 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo + brand */}
        <div className="flex items-center gap-3">
          <MessageSquareIcon size={25} color="white" />
          <p className="text-2xl text-white font-semibold">Anhelina</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 mt-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative text-white text-sm after:content-[''] py-2 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-200 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700">
        <div className="w-[80%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Anhelina. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
