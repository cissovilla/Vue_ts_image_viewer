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
    this.alt_description = jsonPhoto.photographer_url;
    this.description = jsonPhoto.photographer;
    this.id = jsonPhoto.id;
    this.urls = {
      full: jsonPhoto.src.large,
      raw: jsonPhoto.src.original,
      regular: jsonPhoto.src.medium,
      small: jsonPhoto.src.small,
      thumb: jsonPhoto.src.portrait,
    };
  }
}
