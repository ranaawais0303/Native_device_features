class Place {
  constructor(title, imageUri, address, location) {
    (this.title = title),
      (this.imageUri = imageUri),
      (this.address = address),
      (this.location = location); //{lat:0.334, lng:127.989}
    this.id = new Date().toString() + Math.random().toString();
  }
}
