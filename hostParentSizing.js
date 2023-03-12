/*
Suppose we want to load content from a child  webpage to an iframe in a parent webpage.
This code is included in the child page in order to send the height of the child page every time it is resized to the parent page.
Then the parent page takes the height values sent and dynimacally customizes the size of the iframe to that of the child webpage.
*/

/*
In this repo it  is used in the README.md file for getting its height size and sending it to the hosting size (my main webpage),
in order to fix the size of the iframe on the parent hosting site the contains it.
*/ 
let height;

  const sendPostMessage = () => {
    if (height !== document.getElementsByClassName("markdown-body")[0].offsetHeight) {
      height = document.getElementsByClassName("markdown-body")[0].offsetHeight;
      window.parent.postMessage({
        frameHeight: height
      }, '*');
    }
  }

  window.onload = () => sendPostMessage();
  window.onresize = () => sendPostMessage();

/*
Parent iframe code
<script>
  window.onmessage = (e) => {
    if (e.data.hasOwnProperty("frameHeight")) {
      let frame = document.getElementById("iframe");
      frame.style.height = `${e.data.frameHeight + 64}px`; // 64px is the top+bottom margin values the github pages gives to the container div of the .md file, important to add to avoid scrollbars
    }
  };
</script>
*/ 

/*
remember to visit (https://github.com/ryanflorence/render-markdown-javascript/blob/master/README.md)
in order to find out how the embed js code into README.md files and look for a safer option
*/