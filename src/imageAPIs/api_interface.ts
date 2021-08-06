import ImageInterface from "./image_interface";

export default interface ApiInterface {
  getImagesByTag(query: string, tag: string): Promise<ImageInterface[]>;
  getImagesByQuery(query: string): Promise<ImageInterface[]>;
  getApiLogoPath(): string;
  getApiName(): string;
  getApiColor(): string;
  getApiTagList(): Array<string>;
}
