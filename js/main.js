"use strict";

{
  const weeks = ["日", "月", "火", "水", "木", "金", "土"];

  const date = new Date();
  const monthNow = date.getMonth() + 1;
  const yearNow = date.getFullYear();
  const daynow = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const title = document.querySelector("h2");
  const table = document.querySelector(".table");
  const next = document.getElementById("next");
  const today = document.getElementById("today");

  //ボタンクリック
  next.addEventListener("click", () => {
    month++;
    create(year, month);
    if (month === 12) {
      month = 0;
      year++;
    }
  });

  prev.addEventListener("click", () => {
    month--;
    create(year, month);
    if (month === 1) {
      month = 13;
      year--;
    }
  });

  today.addEventListener("click", () => {
    month = monthNow;
    year = yearNow;
    create(year, month);
  });

  //カレンダーの描画
  function create(year, month) {
    title.textContent = month + "/" + year;

    const firstDate = new Date(year, month - 1, 1);
    const firstDay = firstDate.getDay();
    const lastDate = new Date(year, month, 0);
    const lastDay = lastDate.getDate();

    let dayCount = 1;
    let createHTML = "";

    createHTML = "<table>" + "<tr>";

    for (let i = 0; i < weeks.length; i++) {
      createHTML += "<td>" + weeks[i] + "</td>";
    }

    createHTML += "</tr>";

    for (let i = 0; i < 6; i++) {
      createHTML += "<tr>";

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          createHTML += "<td></td>";
        } else if (dayCount > lastDay) {
          createHTML += "<td></td>";
        } else {
          createHTML += "<td>" + dayCount + "</td>";
          dayCount++;
        }
      }
      createHTML += "</tr>";
    }

    createHTML += "</table>";
    table.innerHTML = createHTML;


  }

  //現在の日にちを色付けする関数
  function NowCheck() {
    if (year === yearNow && month === monthNow && dayCount === daynow) {
      
    }
  }

  create(year, month);

  
}
