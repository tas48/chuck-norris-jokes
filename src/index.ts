const url:string = "https://api.chucknorris.io/jokes/random";
const paragraph:any = document.querySelector(".joke-text");
const button =document.querySelector(".another-joke-btn");


async function getJoke(): Promise<string>{

  let response = await fetch(url);
  let data = await response.json();
  
  try {
    
    if(response.status != 200){
      throw new Error("Cannot get any response");
    }
    
  } catch (error)
  {
    console.log(error);
  }

  paragraph.textContent = `"${data.value}"`;

}


function getNewJoke(){
  button?.addEventListener('click', () =>{
    getJoke();
  });
}

getJoke();
