function getELe(id) {
  return document.getElementById(id);
}

var data = new Data();
let clothtList = [];
const selectedCloth = new SelectedCloth();

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
    <button class="btn btn-success" onclick ="selectItem('${item.id}')">Thử đồ</button>
  </div></div>

    `;
  });
  return content;
};

const selectItem = (item) => {
  const clothSelected = clothtList.filter((cloth) => cloth.id == item);
  const selected = clothSelected[0];

  selectedCloth.add(selected);
};
