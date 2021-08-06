import ImageInterface from "../image_interface";

export default class Image implements ImageInterface {
  public alt_description: string;
  public description: string;
  public id: string;
  public urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };

  constructor(jsonPhoto: any) {
    this.alt_description = jsonPhoto.alt_description;
    this.description = jsonPhoto.description;
    this.id = jsonPhoto.id;
    this.urls = jsonPhoto.urls;
  }
}
