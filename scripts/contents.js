/*Messaging Application
ina
A simple messaging application. Makes it easy to manage messages sent from different applications from one user interface.  When provided with the title, e-mail or phone number, the user can choose to either send an email or a message. The corresponding application opens with the fields of a new e-mail or message filled out, depending on their choice.  
iwk
Once the app is opened, the user is presented with a simple UI, that probes them for an email address or a phone number. If an email address is provided, an additional field appears for the email’s subject. Lastly, there is a text field for filling in the email’s or message’s body. 
This field for the email address and phone number is checked for the validity of its content. For instance, whether the email conforms with the standards published by official authorities/ organizations. This kind of validation can prevent simple mistakes with the correct form of email addresses (i.e., two @) or the number of digits in a phone number. In case of such mistakes, a message appears to inform the user as appropriate.
After completing all fields, can press one of the available buttons to open the corresponding application. For instance, if the user chooses to send an email, a small menu pops up with all the available applications for sending emails, installed on the user’s phone listed. Then the user can pick which one to choose. 
tl
Developing this application had the purpose of getting us accustomed to starting activities using URIs. Those activities help communicate with different applications and not new child activities. Furthermore, coding this app familiarized us with building UI’s with XML coding. 
Unfortunately, it was not tested for messaging applications besides the one pre-installed. For instance, applications such as Viber, WhatsApp or others. This can be a feature for future development. 
Scientific Calculator
ina
A calculator for computing the factorial, the Fibonacci sequence and the Great Common Divisor of a stream of numbers. The factorial is computed for every number in the sequence. The Fibonacci sequence is generated for each number in the stream and it is up to that number. Lastly, the GCD is computed for the total numbers in the stream. 
iwk
Starting, the UI includes an EditText field for providing the stream of numbers. The numbers must be separated by commas. No other separator is allowed. The numbers can include white spaces in between commas. In case of incorrect input, a toast message pops up to inform the user. 
Next, there are three buttons, one for each mathematical operation. The user can press the buttons at any given time. They can be pressed with the same or different streams, even before the results of previous streams are calculated. 
Lastly, there is a view for presenting the results. The results are displayed in ascending order of the time needed to calculate them. For example, suppose that the user provides a sequence of large numbers before a stream of smaller numbers. The sequence with smaller ones will be displayed first; since it is a heavier task for the computer to calculate.
tl
This application was developed for getting us accustomed to threads. Tasks that take too long to finish need to be completed in a way that does not freeze the UI. As such, threads take the role of doing heavy tasks in the background, while the user can still interact with the application. The UI updates asynchronously. 
There are limitations when it comes to computational resources. For example, the amount of memory a user has, may not be enough for storing large numbers during the calculation process. Such restrictions can crash the application. I have yet to find a way to detect the memory available and therefore, make customizations or inform the user as appropriate. This could be a task for future reference.
Calendar Events
ina
An application for creating, modifying and storing calendar events. The events are displayed on a list in ascending order of the date they take place. The most recent one is displayed at the top. 
iwk
Once opening the application, the user is presented with a list of all the events that haven’t been concluded yet. They are listed from the closest to the furthest one. For each event on the list, the user can see its title, the date of creation and its due date. Along with this information, next to each event, there is a checkbox. The events that are checked can be bulk deleted, by pressing the delete button at the top right side of the screen.
From the main screen, the user has two choices, apart from mass deleting events. The first one is to press the round orange button. This allows the user to create a new event. The other one is to click on a note from the list to modify its information.
For the new event, a new screen opens by pressing the ‘+’ button. This screen contains a form for filling in the new event’s information. That information includes; its title, the date it takes place and a description. The description is optional, whereas the due date must be in the format indicated by the placeholder. The same form appears for modifying an already existing event from the list. However, the fields contain the event’s information, as was last stored.
Once the form is filled out, the event can be saved, in case it already exists deleted or any changes canceled. After any one of the previously mentioned actions, the user is redirected to the main screen.
tl
The goal, while developing this application, was to learn how to interact with a database and how to create child activities. The database used; was one created locally. An additional learning result was the serialization of objects of custom classes. 
As mentioned in the previous section, the due date provided for an event must be in a specific format. This is not user-friendly, neither visually nor functionally. Maybe a calendar widget could be useful for this purpose. Finally, grouping the events weekly or monthly could assist in organizing them more efficiently. 



//a custom listener for class change of an element
function callback(mutationsList, observer) {
    mutationsList.forEach((mutation)=>{
        if(mutation.type !== "attributes" || mutation.attributeName !== "class") return;
        if(!mutation.target.classList.contains("open")) {
            document.querySelector("."+mutation.target.id).style.borderBottom = "1px solid gray";
            return;
        }
        console.log(document.querySelector("."+mutation.target.id))
        document.querySelector("."+mutation.target.id).style.borderBottom = "1px solid blue";
    })
}

const mutationObserver = new MutationObserver(callback);
mutationObserver.observe(
    document.getElementById("sda"),
    {attributes: true}
)

//##############################################################################


/*
fileSHA stores the SHA of the file we want to fetch.

fileBlob stores the blob fetched from the API.

fileContent is used to store the decoded string.

file has the data that we actually need.

You can find the reference code in the next section, 
just change the folder path with the actual file path 
(with file extension) and you're good to go!
*/

let fileSHA, fileBlob, fileContent, file

const getFileSHA = async () => {
  try {
    const response = await fetch(
        "https://api.github.com/repos/apapadaki-edu/home/contents/images?ref=new"
    );
    const data = await response.json();
    // console.log(data);
    
    fileSHA = data[1].sha
    //console.log(fileSHA);

  } catch (error) {
    console.log(error);
  }
  
  getFileBlob()
}

const getFileBlob = async (fileSHA)=> {
  try {
  const response = await fetch(
    `https://api.github.com/repos/apapadaki-edu/home/git/blobs/d8e4b0c68d1d399be4123d595dfae32843427975`
    );
  const data = await response.json();
    
  fileBlob = data.content
  convertBlob(fileBlob)
  } catch (error) {
    console.log(error);
  }
}

const convertBlob = async blob => {
  //console.log(blob)
  try {
    // const fileContents = Buffer.from(blob, "base64").toString()
    // file = JSON.parse(fileContents)

    
    // ..... UNCOMMENT FOR FILES ..........
    //fileContents = base64EncodeUnicode(blob)
    //file = JSON.parse(fileContents)
    //console.log(file)

    //...... FOR IMAGES ....
    var base64img = `data:image/webp;base64,${blob}`;
    await Base64ToImage(base64img).then((img) => {
        //document.body.appendChild(img);
    });

  } catch(error) {
    console.log(error)
  }
}

function Base64ToImage(base64img) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function() {
            resolve(img);
        };
        img.onerror = reject;
        img.src = base64img; 
        
    });
}

//.....FOR FILES.....
function base64EncodeUnicode(str) {
  utf8Bytes = decodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  });

  return atob(utf8Bytes);
}


getFileSHA()

/* the api call url includes
    user: aspapadaki-edu/
    repo: home/
    new: branch (in ref= '' parameter) 
*/
document.body.style.forntSize = "3rem";
fetch('https://api.github.com/repos/apapadaki-edu/home/contents/images?ref=new')
  .then(res => res.json())
  .then((json) => {
    document.body.innerHTML = `<pre>${JSON.stringify(json, undefined, 2)}</pre>`});

/*
fetch(`https://api.github.com/repos/apapadaki-edu/home/git/blobs/d8e4b0c68d1d399be4123d595dfae32843427975`)
.then(res=>res.json())
.then((json)=>{
    let data = json.content;
    var base64img = `data:image/webp;base64,${data}`;
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = function() {
          resolve(img);
      };
      img.onerror = reject;
      img.src = base64img;
      console.log("outimage")  
      
  });
})
.then((img)=>{
  document.body.appendChild(img);
})
*/


function getImageUrls(currPr="") {
  // fetches an array with objects containing the image URLs, and their names 
  // names, of all images matching a string in the images folder 
  // of the specified branch in the specified repo(using github's Content API)
  return new Promise((resolve)=>{
      fetch('https://api.github.com/repos/apapadaki-edu/home/contents/images?ref=new')
      .then(res => res.json())
      .then((json) => {
        const imgLinks = []
        json.forEach((img)=>{
          //this can be done with the start of a string ex. /^fs/
          const regex = new RegExp(`^${currPr}.*[.]webp$`);
          if(!regex.test(img.name)) return; 
          imgLinks.push({"name": img.name,
                      "git_url": img.git_url});
        });

        resolve(imgLinks);
      });
    });
}

function getImageInBase64(imgUrl) {
  // fetches an image in its base64 encoding from the specified git url
  // the url can be found from github's content API
  return new Promise((resolve) =>{fetch(imgUrl)
      .then(res=>res.json())
      .then((json)=>resolve(json.content));
    });
}

function loadImageFromBase64(base64img){
  // loads an image with the specified data url as source
  // the data url is of the form "prefix,image_base64_str"
  // where prefix specifies the type of data and format
  return new Promise((resolve, reject) => {
      var base64imgDataUrl = `data:image/webp;base64,${base64img}`;
      var img = new Image();
      img.onload = function() {
          resolve(img);
      };
      img.onerror = reject;
      img.src = base64imgDataUrl; 
      img.style.width = "100%";
      img.classList.add()
    
    });
}


async function getAllImages(currPr="", imgsContainer=null){
  // the getImageUrls takes the following argument
  // currPr "c", "ca", "pg" etc (used in the includes function or test function
  // in line 229) to check the images to download based on the project.
  
  //fetching images urls
  const imgUrls = await getImageUrls(currPr);

  
  // mapping each image url from the array above with 
  // a promise that retrieves the image in base64,
  // the result is an array of promises that can be executed in 
  // parallel with the Promise.all method
  const promises = imgUrls.map((imgUrl)=>{
      return getImageInBase64(imgUrl.git_url).then((img)=>{
        return { "name": imgUrl.name, "imgBase64": img };
      })
  });

  // fetching images in base64 encoding from remote host  
  // img is of the form {"name":str, "imgBase64":str}
  const results = await Promise.all(promises);

  // mapping each image in base64 to a promise that returns
  // an image node with the loaded image and appends it 
  // to the the specified DOM element
  const promisesNodes = results.map((img)=>{
    return loadImageFromBase64(img.imgBase64).then((imgNode)=>{
      const parentNode = (imgsContainer)? imgsContainer: document.body;
      parentNode.appendChild(imgNode);
    })
  })

  // loads all images in parallel
  await Promise.all(promisesNodes);
}

getAllImages()
/*
async function loadImages(){
  const promisesImgs = await getAllImages();

  const fetchedImgs = await Promise.all(promisesImgs);
  // img is of the form {"name":str, "imgBase64":str}
  const promises = fetchedImgs.map((img)=>{
    return getImage(img.imgBase64).then((imgNode) => {
      document.body.appendNode(imgNode);
      //return json.parse({"name": img.name, "imgNode": imgNode});
    });
  })

  await Promise.all(promises);
  console.log("COMPLETE");

}
*/

/*
WORKS
async function getAllImages(){
  const imgUrls = await getImageUrls();
  const promises = imgUrls.map((imgUrl)=>{
    return getImage(imgUrl.git_url).then((img)=>{
      return { "name": imgUrl.name, "imgBase64": img };
    })
    
  });

  const results = await Promise.all(promises);
  console.log(results)
  return results
}
*/
  /*
    const response = await fetch(imgUrl);
    const data = await response.json();
  return new Promise((resolve)=>{
    resolve(data.content);
  })
  fileBlob = data.content
  convertBlob(fileBlob)
  */



