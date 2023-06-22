import Hello from "./components/Hello.js"

window.onload = () =>{
  main("app", Hello())
}

const main = (root, message) =>{
  let app = document.getElementById(root)
  app.innerHTML = message
}