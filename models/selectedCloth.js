function SelectedCloth() {
  this.selectedItem = {
    topclothes: "",
    botclothes: "",
    shoes: "",
    handbags: "",
    necklaces: "",
    hairstyle: "",
    background: "",
  };
  this.add = (item) => {
    switch (item.type) {
      case "topclothes":
        this.selectedItem.topclothes = item.imgSrc_jpg;
        break;
      case "botclothes":
        this.selectedItem.botclothes = item.imgSrc_jpg;
        break;
      case "shoes":
        this.selectedItem.shoes = item.imgSrc_jpg;
        break;
      case "handbags":
        this.selectedItem.handbags = item.imgSrc_jpg;
        break;
      case "necklaces":
        this.selectedItem.necklaces = item.imgSrc_jpg;
        break;
      case "hairstyle":
        this.selectedItem.hairstyle = item.imgSrc_jpg;
        break;
      case "background":
        this.selectedItem.background = item.imgSrc_jpg;
        break;
      default:
    }
  };
}
