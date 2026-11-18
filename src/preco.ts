import type { TipoIngresso } from "./tipos.ts";

export function valorDoIngresso(precoBase: number): (tipo: TipoIngresso) => number {
  return (tipo) => {
    const valor = tipo === "meia" ? precoBase / 2 : precoBase;
    return Math.round(valor * 100) / 100;
  };
}
