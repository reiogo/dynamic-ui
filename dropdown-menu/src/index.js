// import DropdownIcon from './images/menu.svg';
const DropdownIcon = "";

const dropdownMenu = function createNewDropdownMenu() {
  const addMenuIcon = function addMenuIconToMenu(menu) {
    const dropIcon = new Image();
    dropIcon.src = DropdownIcon;
    menu.appendChild(dropIcon);
  };

  const createContent = function createDropdownContent() {
    const dropdownContent = document.querySelector("#drop-down-content");
    dropdownContent.style = "border: none; width: 160px; display:none;";
    dropdownContent.class = "hidden";

    const style = document.createElement("style");
    style.innerHTML = `
          .drop-buttons {
            appearance: none;
            background-color: azure;
            border: none;
          }
          .drop-buttons:hover {
            background-color: cornflowerblue;
          }
        `;

    document.head.appendChild(style);
  };

  const dropdown = function dropdownMenuItemsOnClick() {
    const dropdownContent = document.querySelector("#drop-down-content");
    if (dropdownContent.class == "hidden") {
      dropdownContent.style =
        "border: none; width: 160px; display:flex; flex-direction: column;";
      dropdownContent.class = "visible";
    } else {
      dropdownContent.style = "border: none; width: 160px; display:none;";
      dropdownContent.class = "hidden";
    }
  };

  const menu = document.querySelector("#menu-button");
  addMenuIcon(menu);
  menu.style = `
    appearance: none;
    background-color: azure;
    border: none;
    width: 160px;
    display: flex;
    justify-content: center;
    gap: 4px
    `;
  menu.addEventListener("click", dropdown);
  createContent();
};

dropdownMenu();
