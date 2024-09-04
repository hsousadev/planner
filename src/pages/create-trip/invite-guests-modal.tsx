import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6  bg-zinc-100 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email, index) => {
            return (
              <div
                key={index}
                className="py-1.5 px-2.5 rounded-md bg-zinc-300 flex items-center gap-2"
              >
                <span>{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailFromInvites(email)}
                >
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-600" />

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-200 border border-zinc-300 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidadado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <Button type="submit" variant="primary">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
