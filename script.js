const btn = document.getElementById("btn");
const text = document.getElementById("affirmation");
btn.addEventListener("click",() =>{
    getData("Give me a one-sentence positive affirmation");
});
async function getData(prompt){
    text.innerText = "Loading...";
    try{
const res= await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent",{
    method:"POST",
    headers:{
    "Content-Type": "application/json",
  "X-goog-api-key": "AIzaSyCNM4gB04rVrMdsbNcMkWz7n5aAILdsdM8"
   },

  body: JSON.stringify({
    "contents": [
      {
        "parts": [
          {
            "text": prompt
          }
        ]
      }
    ]
  })
});
const data = await res.json();
const sent = data.candidates[0].content.parts[0].text;
text.innerText = sent;
console.log(data);
} catch (error){
text.innerText = "Failed to fetch affirmation";
}}
