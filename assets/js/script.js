async function main(params) {
  //Add event listner for hamburger button
  document.querySelector(".hambuger").addEventListener("click", (e) => {
    document.querySelector(".links").style.left = "244px";

    document.querySelector(".cross").style.display = "inline";
    document.querySelector(".hambuger").style.display = "none";
  });
  //Add event listner for cross button
  document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".links").style.left = "-300px";
    document.querySelector(".hambuger").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  });
}

main();
