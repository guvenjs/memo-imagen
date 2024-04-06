import { Word } from "../words/Word";

export default interface Category {
  id: string;
  name: string;
  icon: string;
  words: Word[];
}
