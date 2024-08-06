document.addEventListener("DOMContentLoaded", () => {
    let blocks = document.querySelectorAll("pre");
  
    blocks.forEach((block) => {
      // replace every pre with a div containing a pre and a copy-code-button
      let div = document.createElement("div");
      div.classList.add("code-block-wrapper");
  
      let button = document.createElement("button");
      button.classList.add("copy-code-button");
      button.innerText = "Copy";
  
      button.addEventListener("click", () => {
        navigator.clipboard.writeText(block.innerText).then(() => {
          button.innerText = "Copied!";
          setTimeout(() => {
            button.innerText = "Copy";
          }, 2000);
        });
      });
  
      div.appendChild(button);
      div.appendChild(block.cloneNode(true));
      block.replaceWith(div);
    });
  });
  