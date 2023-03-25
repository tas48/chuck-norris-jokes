const url:string = "https://api.chucknorris.io/jokes/random";
const paragraph:any = document.querySelector(".joke-text");

async function getJoke(): Promise<void>{

  let response = await fetch(url);
  let data = await response.json();
  
  try {
    
    if(response.status != 200){
      throw new Error("Cannot get any response from server");
    }
    
  } catch (error)
  {
    console.log(error);
  }

  paragraph.textContent = `"${data.value}"`;

}

getJoke();
