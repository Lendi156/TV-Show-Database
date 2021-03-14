import "regenerator-runtime";
import "./styles/style.css";
import main from "./script/view/main.js";
import "./script/Component/app-bar.js";

import webpackLogo from './Assets/show-list.jpg';

document.querySelector('show-list').src = webpackLogo;


document.addEventListener("DOMContentLoaded", main);