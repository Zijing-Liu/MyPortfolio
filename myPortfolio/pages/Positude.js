document.addEventListener("DOMContentLoaded", function () {
  const ham = document.getElementById("hambuger");
  let dropdown = document.getElementById("dropDown");

  ham.addEventListener("click", () => {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
});

// JS function to view large picutre in a modal when users cilcks on the images in the prototye section
function zoomIn() {
  var modal = document.getElementById("modal");

  var imgs = document.querySelectorAll("img");
  var modalImg = document.getElementById("modal-img");

  imgs.forEach((i) => {
    i.onclick = function () {
      modalImg.src = i.src;
      modal.style.display = "block";
    };
  });

  modalImg.onclick = function () {
    modal.style.display = "none";
  };
}

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA1Zd2fc1cWOwZ_WiQs9pFdU6Y0XKSwpxo",
//   authDomain: "nodeapp-1801a.firebaseapp.com",
//   projectId: "nodeapp-1801a",
//   storageBucket: "nodeapp-1801a.appspot.com",
//   messagingSenderId: "1028228763263",
//   appId: "1:1028228763263:web:2a952ff875573f30a8f94a",
//   measurementId: "G-H9HE39LZH8",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
