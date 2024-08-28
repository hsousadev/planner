import { CircleCheck } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      {/* item de atividade */}
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-500 font-semibold">Dia 17</span>
          <span className="text-xl text-zinc-500">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade foi cadastrada
        </p>
      </div>

      {/* item de atividade */}
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-500 font-semibold">Dia 18</span>
          <span className="text-xl text-zinc-500">Domingo</span>
        </div>

        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-100 rounded-xl  flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-900">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="px-4 py-2.5 bg-zinc-100 rounded-xl  flex items-center gap-3">
            <CircleCheck className="size-5 text-lime-300" />
            <span className="text-zinc-900">Academia em grupo</span>
            <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
