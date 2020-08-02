// Responsive navbar for Mobile view
  function navbar() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
// Show/Hide Abstracts in Research Section
  function abstract1() {
    var x = document.getElementById("abstract1");
    var btn = document.getElementById("abs1");
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.innerHTML = 'Hide Abstract';
    } else {
      x.style.display = "none";
      btn.innerHTML = 'Show Abstract';
    }
  }
  function abstract2() {
    var x = document.getElementById("abstract2");
    var btn = document.getElementById("abs2");
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.innerHTML = 'Hide Abstract';
    } else {
      x.style.display = "none";
      btn.innerHTML = 'Show Abstract';
    }
  }
  function abstract3() {
    var x = document.getElementById("abstract3");
    var btn = document.getElementById("abs3");
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.innerHTML = 'Hide Abstract';
    } else {
      x.style.display = "none";
      btn.innerHTML = 'Show Abstract';
    }
  }
  function abstract4() {
    var x = document.getElementById("abstract4");
    var btn = document.getElementById("abs4");
    if (x.style.display === "none") {
      x.style.display = "block";
      btn.innerHTML = 'Hide Abstract';
    } else {
      x.style.display = "none";
      btn.innerHTML = 'Show Abstract';
    }
  }