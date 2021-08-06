require("dotenv").config();
const axios = require("axios").default;
import ApiInteface from "../api_interface";
import ImageInterface from "../image_interface";
import Image from "./image";

export default class Api implements ApiInteface {
  private url: string;
  private client_id: string;
  private http: typeof axios;

  constructor() {
    this.url = process.env.VUE_APP_PEXEL_API_URL ?? "";
    this.client_id = process.env.VUE_APP_PEXEL_API_KEY ?? "";
    this.http = axios.create({
      baseURL: this.url,
      timeout: 2000,
      headers: { Authorization: this.client_id },
    });
  }

  private requestPhotos(query: string, tag?: string) {
    return this.http
      .get("/search", {
        params: {
          query: query,
          per_page: 30,
          color: tag,
        },
      })
      .then((response: any) => {
        const photos = new Array<Image>();
        for (const photo of response.data.photos) {
          photos.push(new Image(photo));
        }
        return photos;
      });
  }

  public getImagesByTag(query: string, tag: string): Promise<ImageInterface[]> {
    return new Promise<Image[]>((resolve, reject) => {
      resolve(this.requestPhotos(query, tag));
    });
  }

  public getImagesByQuery(query: string): Promise<ImageInterface[]> {
    return new Promise<Image[]>((resolve, reject) => {
      resolve(this.requestPhotos(query));
    });
  }

  public getApiName(): string {
    return "Pexels";
  }

  public getApiLogoPath(): string {
    return require("../../assets/pexels.png");
  }

  public getApiColor(): string {
    return "#4f3956";
  }

  public getApiTagList(): Array<string> {
    return [
      "red",
      "orange",
      "yellow",
      "green",
      "turquoise",
      "blue",
      "violet",
      "pink",
      "brown",
      "black",
      "gray",
      "white",
    ];
  }
}
