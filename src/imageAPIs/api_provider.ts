import ApiInterface from "./api_interface";
import ImageInterface from "./image_interface";
import UnsplashApi from "./unsplash_api/api";
import UnsplashImage from "./unsplash_api/image";
import PexelsApi from "./pexels_api/api";
import PexelsImage from "./pexels_api/image";

export default class ApiProvider {
  public static provideApi(): ApiInterface {
    return new UnsplashApi();
    //return new PexelsApi();
  }

  public static provideImage(json: any): ImageInterface {
    return new UnsplashImage(json);
    //return new PexelsImage(json);
  }

  public static provideImageType() {
    return typeof UnsplashImage;
    //return typeof PexelsImage;
  }
}
