async function main(params) {
  //Add event listner for hamburger button
  document.querySelector(".hambuger").addEventListener("click", (e) => {
    document.querySelector(".links").style.left = "0px";


    // document.querySelector(".hambuger").style.display = "none";
  });
  //Add event listner for cross button
  document.getElementById("cross-icon").addEventListener("click", () => {
    document.querySelector(".links").style.left = "-200px";

  });
}

main();
