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
    this.url = process.env.VUE_APP_UNSPLASH_API_URL ?? "";
    this.client_id = process.env.VUE_APP_UNSPLASH_CLIENT_ID ?? "";
    this.http = axios.create({
      baseURL: this.url,
      timeout: 2000,
      headers: { Authorization: "Client-ID " + this.client_id },
    });
  }

  private requestPhotos(query: string, tag?: string) {
    return this.http
      .get("/search/photos", {
        params: {
          query: query,
          per_page: 30,
          color: tag,
        },
      })
      .then((response: any) => {
        const photos = new Array<Image>();
        for (const photo of response.data.results) {
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
    return "Unsplash";
  }

  public getApiLogoPath(): string {
    return require("../../assets/unsplash.svg");
  }

  public getApiColor(): string {
    return "#4f3956";
  }

  public getApiTagList(): Array<string> {
    return [
      "black_and_white",
      "black",
      "white",
      "yellow",
      "orange",
      "red",
      "purple",
      "magenta",
      "green",
      "teal",
      "blue",
    ];
  }
}
