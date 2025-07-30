import { useEffect, useRef, useState } from "react";

interface DropdownOption {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => Promise<void> | void;
}

interface DropdownProps {
  name?: React.ReactNode | string;
  options: DropdownOption[];
}

export default function Dropdown({ name = "Menú", options }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="cursor-pointer p-2"
      >
        {name}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-fit min-w-40 rounded-md bg-white text-black shadow-lg">
          {options.map(({ label, onClick, icon }) => (
            <button
              type="button"
              key={label}
              className="flex w-full items-center gap-2 px-4 py-2 text-left hover:bg-gray-100"
              onClick={() => {
                onClick?.();
                closeDropdown();
              }}
            >
              {icon && <span>{icon}</span>}
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
