import {
  Cpu,
  Gpu,
  Grid3x3,
  HardDrive,
  Headphones,
  Keyboard,
  Laptop,
  MemoryStick,
  Microchip,
  Monitor,
  Mouse,
  PcCase,
  Plug,
} from "../components/Icons";

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export const categories: Category[] = [
  { id: "", name: "Todos", icon: <Grid3x3 /> },
  { id: "procesadores", name: "Procesadores", icon: <Cpu /> },
  { id: "placas de video", name: "Placas de video", icon: <Gpu /> },
  { id: "memorias ram", name: "Memorias RAM", icon: <MemoryStick /> },
  { id: "motherboards", name: "Motherboards", icon: <Microchip /> },
  { id: "fuentes", name: "Fuentes", icon: <Plug /> },
  { id: "gabinetes", name: "Gabinetes", icon: <PcCase /> },
  { id: "almacenamiento", name: "Almacenamiento", icon: <HardDrive /> },
  { id: "mouses", name: "Mouses", icon: <Mouse /> },
  { id: "teclados", name: "Teclados", icon: <Keyboard /> },
  { id: "auriculares", name: "Auriculares", icon: <Headphones /> },
  { id: "notebooks", name: "Notebooks", icon: <Laptop /> },
  { id: "monitores", name: "Monitores", icon: <Monitor /> },
];
