//toogle kelas active
const navbarnav = document.querySelector(".navbar-nav");
//ketika garis-menu di klik
document.querySelector("#garis-menu").onclick = () => {
  navbarnav.classlist.toggle("active");
};
