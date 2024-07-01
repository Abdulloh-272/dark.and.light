// function dark() {
//   const dark = document.querySelector(".mode");
//   dark.classList.remove("bg-white");

//   dark.classList.add("bg-black");
// }

// function light() {
//   const light = document.querySelector(".mode");
//   light.classList.remove("bg-black");
//   light.classList.add("bg-white");
// }

function dark2() {
    const dark1 = document.querySelector(".dark");
    const light = document.querySelector('.light')
  const mode2 = document.querySelector(".mode2");
    const mode3 = document.querySelector(".mode");
    
    light.classList.remove('rounded-full')
    light.classList.add('rounded-r-full')
    mode3.classList.remove('bg-white')
  mode3.classList.add("bg-black");
    mode2.classList.remove("bg-black");
    mode2.classList.add('bg-white')
  dark1.classList.add("block");
}

function light2() {
  const light1 = document.querySelector(".light");
    const dark = document.querySelector(".dark");
      const mode2 = document.querySelector(".mode2");
    const mode3 = document.querySelector(".mode");
    mode3.classList.remove('bg-black')
    mode3.classList.add('bg-white')
    mode2.classList.remove('bg-white')
    mode2.classList.add('bg-black')
    light1.classList.remove('rounded-r-full')
  light1.classList.add("rounded-full");
}
