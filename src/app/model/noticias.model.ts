import { Artigo } from "./artigo.model";

export class Noticias {
  articles: Array<Artigo>;
  status: string;
  totalResults: number;
}