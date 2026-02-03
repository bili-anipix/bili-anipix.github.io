import datas from "@/raw/datas.json";

export interface AnimeImage {
  id: string;
  category: string;
  title: string;
  src: string;
  tags: string[];
  height: number;
  width: number;
  size: number;
  description: string;
  date_time: number;
  author_id: string;
}

export const animeImages: AnimeImage[] = (datas as any).map(
  (data: any) => ({
    id: data.id,
    category: data.category,
    title: data.title,
    src: data.src,
    tags: data.tags,
    height: data.height,
    width: data.width,
    size: data.size,
    description: data.description,
    date_time: data.date_time,
    author_id: data.author_id,
  }),
);

export function getRandomImage(): AnimeImage {
  const randomIndex = Math.floor(Math.random() * animeImages.length);
  return animeImages[randomIndex];
}

export function searchImages(query: string): AnimeImage[] {
  const lowerQuery = query.toLowerCase();
  return animeImages.filter(
    (image) =>
      image.title.toLowerCase().includes(lowerQuery) ||
      image.description.toLowerCase().includes(lowerQuery) ||
      image.author_id.toLowerCase().includes(lowerQuery),
  );
}

export function getImageByTitle(title: string): AnimeImage | undefined {
  return animeImages.find((image) => image.title === title);
}

export function getImagesByTag(tag: string): AnimeImage[] {
  return animeImages.filter((image) =>
    image.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  animeImages.forEach((image) => {
    image.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
