function getELe(id) {
  return document.getElementById(id);
}

var data = new Data();
let clothtList = [];

function getData() {
  const promise = data.fetchJSON();
  promise.then((data) => {
    // console.log(data.navPills);
    renderNavPills(data.navPills);
    clothtList = data.tabPanes;
    return clothtList;
  });
}

getData();

const renderNavPills = (navPills) => {
  let contentTabs = "";
  let contentMain = "";
  navPills.map((item, id) => {
    contentTabs += `<li class="nav-item">
      <a class="btn nav-link" onclick="renderClothList('${item.type}',${id})"data-toggle="tab" href="#${item.type}">${item.showName}</a>
    </li>`;

    contentMain += `<div id="${item.type}" class=" tab-pane">
    <div id="${id}" class="cloth-list row"></div>
   </div>`;
  });

  getELe("nav").innerHTML = contentTabs;
  getELe("navContent").innerHTML = contentMain;
};

const renderClothList = (type, id) => {
  let selectedType = [];
  clothtList.forEach((item) => {
    if (item.type == type) {
      selectedType.push(item);
    }
  });
  getELe(id).innerHTML = renderClothCard(selectedType);
};

const renderClothCard = (clothtList) => {
  let content = "";
  clothtList.forEach((item) => {
    content += `
    <div class="col-3  pt-3">
    <img src="${item.imgSrc_jpg}" alt="">
    <h4>${item.name}</h4>
    <button class="btn btn-success" onclick ="show('${item.id}')">Thử đồ</button>
  </div></div>

    `;
  });
  return content;
};

const show = (item) => {
  // for (let i = 0; i < clothtList.length; i++) {
  //   if (item == clothtList[i].id) {
  //     console.log(clothtList[i]);
  //     break;
  //   }
  // }
  const clothSelected = clothtList.filter((cloth) => cloth.id == item);
  const selected = clothSelected[0];
  let _topclothes = "";
  let _botclothes = "";
  let _shoes = "";
  let _handbags = "";
  let _necklaces = "";
  let _hairstyle = "";
  let _background = "";
  switch (selected.type) {
    case "topclothes":
      _topclothes = selected.imgSrc_jpg;
      break;
    case "botclothes":
      _botclothes = selected.imgSrc_jpg;
      break;
    case "shoes":
      _shoes = selected.imgSrc_jpg;
      break;
    case "handbags":
      _handbags = selected.imgSrc_jpg;
      break;
    case "necklaces":
      _necklaces = selected.imgSrc_jpg;
      break;
    case "hairstyle":
      _hairstyle = selected.imgSrc_jpg;
      break;
    case "background":
      _background = selected.imgSrc_jpg;
      break;
    default:
  }

  let selectedCloth = new SelectedCloth(
    _topclothes,
    _botclothes,
    _shoes,
    _handbags,
    _necklaces,
    _hairstyle,
    _background
  );

  return selectedCloth;
};
