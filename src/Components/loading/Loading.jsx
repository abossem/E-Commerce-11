import { LoaderIcon } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed min-h-full min-w-full left-0 top-0 bg-primary-white z-50 flex items-center justify-center">
      <LoaderIcon className="size-12 text-yellow animate-spin" />
    </div>
  );
}
