export default interface ImageInterface {
  alt_description: string;
  description: string;
  id: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}
