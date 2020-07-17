import images from "Services/data.json";

class unsplashImages {
  getImages() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(images);
      }, 250);
    });
  }
}

const apiService = new unsplashImages();

export default apiService;
