export interface Word {
  word: string;
  type: string;
  level: string;
  definition: string;
  examples: {
    sentence: string;
    paragraph: string;
    phrase: string;
  };
  memory_aid: string;
  visual_image_description: string;
  image_path: string;
  id: string;
}
