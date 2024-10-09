async function main(params) {
  //Add event listner for hamburger button
  document.querySelector(".hambuger").addEventListener("click", (e) => {
    document.querySelector(".links").style.right = "62px";

    document.querySelector(".cross").style.display = "inline";
    document.querySelector(".hambuger").style.display = "none";
  });
  //Add event listner for cross button
  document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".links").style.right = "-300px";
    document.querySelector(".hambuger").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  });
}

main();
