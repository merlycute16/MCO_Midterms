document.addEventListener("DOMContentLoaded", () => {

  let d = new Date().getDate();
  document.querySelectorAll(".calendar td").forEach(td => {
    if (+td.textContent === d) td.classList.add("highlight");
  });

  document.querySelectorAll("form").forEach(f => f.onsubmit = e => {
    e.preventDefault(); alert("Message sent!"); f.reset();
  });

  let cart=[], box=document.createElement("div");
  box.innerHTML="<b>🛒 Cart (0)</b><ul></ul>";
  Object.assign(box.style,{position:"fixed",bottom:"10px",right:"10px",background:"#fff",padding:"8px",border:"1px solid #ccc",borderRadius:"6px"});
  document.body.appendChild(box);
  let list=box.querySelector("ul"), update=()=>{list.innerHTML=cart.map(i=>`<li>${i}</li>`).join("");box.querySelector("b").textContent=`🛒 Cart (${cart.length})`;};
  document.querySelectorAll("button").forEach(b=>b.textContent.includes("Add")&&(b.onclick=()=>{cart.push(b.parentElement.querySelector("h3").textContent);update();}));

  document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=e=>{
    e.preventDefault();document.querySelector(a.getAttribute("href"))?.scrollIntoView({behavior:"smooth"});
  });
});
