class Clothe {
  constructor(_id, _type, _name, _desc, _imgSrc_jpg, _imgSrc_png) {
    this.id = _id;
    this.name = _name;
    this.type = _type;
    this.desc = _desc;
    this.imgSrc_jpg = _imgSrc_jpg;
    this.imgSrc_png = _imgSrc_png;
  }

  render(index) {
    return `
    <div class="col-3 pt-3"id=${this.id}>
    <img src="./../assets/images/clothes/${this.imgSrc_jpg}" alt="">
    <h4>${this.name}</h4>
    <button class="btn btn-success">Thử đồ</button>
  </div>
    `;
  }
}
