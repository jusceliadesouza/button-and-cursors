import { TextAlignJustifyIcon } from "@radix-ui/react-icons";

export function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-screen h-screen max-w-sm flex flex-col justify-center gap-16 bg-[#130F1E] px-11">
        <div>
          <h1>Teste os botões</h1>
          <span>
            Interaja com os botões e observe a mudança de aparência e de
            cursores
          </span>
        </div>

        <div className="flex flex-col gap-8">
          <button className="button primary" type="submit">
            Interaja comigo
          </button>
          <button className="button secondary" disabled>
            Interaja comigo
          </button>
          <button className="button tertiary flex items-center justify-center gap-3">
            <TextAlignJustifyIcon className="w-5 h-5" />
            Interaja comigo
          </button>
        </div>
      </div>
    </div>
  );
}
