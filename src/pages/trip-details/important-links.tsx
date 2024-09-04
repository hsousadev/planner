import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-900">
              Reservar Airbnb
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/teste/1d2a1sd2a1sda5sd1s5d2sad7q7weq8
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-900">
              Reservar Airbnb
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/teste/1d2a1sd2a1sda5sd1s5d2sad7q7weq8
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button size="full" variant="secondary">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
