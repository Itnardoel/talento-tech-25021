import { GitHub } from "./Icons";

export const Footer = () => {
  return (
    <footer className="flex bg-gray-300 p-2.5 text-center text-black">
      <p className="flex-1"> © {new Date().getFullYear()} - HardNexus</p>
      <a
        href="https://github.com/Itnardoel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub className="size-6 cursor-pointer transition-colors hover:text-gray-500" />
      </a>
    </footer>
  );
};
