import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@tanstack/react-router";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="text-sm">
      <ScrollArea className="w-full max-w-full overflow-x-auto">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <Link to={item.path} className="text-primary-600 hover:text-primary-800 max-w-full truncate">
                {item.label}
              </Link>
              {index < items.length - 1 && <FaChevronRight className="mx-2 text-gray-400" />}
            </li>
          ))}
        </ol>
      </ScrollArea>
    </nav>
  );
};
