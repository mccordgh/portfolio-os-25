export default class ImageHelper {
  static getImagePath = (directory: string, imageName: string): string =>
    `resources/${directory}/${imageName}`;
}
