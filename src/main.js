import "./style.css";
import navigation from "./navigation";
import chat from "./chat.js";
import { marked } from "marked";

document.querySelector("#app").innerHTML = `
  <main class="p-5 min-h-dvh bg-[#212121] flex flex-col justify-center items-center">
    ${navigation()}
    <section class="w-full flex-1 flex justify-center items-center flex-col">
        <div id="chat_content" class="w-full mb-5 ">
           
        </div>
        ${chat()}
    </section>
  </main>
`;

const chat_text = document.getElementById("chat_text")
const chat_content = document.getElementById("chat_content");
const submit_btn = document.getElementById("submit_button")

document.getElementById("form_chat").addEventListener("submit",async (event)=> {
    event.preventDefault();
    submit_btn.innerHTML = `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="text-white size-6"><g><circle cx="12" cy="3" r="1"><animate id="spinner_7Z73" begin="0;spinner_tKsu.end-0.5s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="16.50" cy="4.21" r="1"><animate id="spinner_Wd87" begin="spinner_7Z73.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="7.50" cy="4.21" r="1"><animate id="spinner_tKsu" begin="spinner_9Qlc.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="19.79" cy="7.50" r="1"><animate id="spinner_lMMO" begin="spinner_Wd87.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="4.21" cy="7.50" r="1"><animate id="spinner_9Qlc" begin="spinner_Khxv.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="21.00" cy="12.00" r="1"><animate id="spinner_5L9t" begin="spinner_lMMO.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="3.00" cy="12.00" r="1"><animate id="spinner_Khxv" begin="spinner_ld6P.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="19.79" cy="16.50" r="1"><animate id="spinner_BfTD" begin="spinner_5L9t.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="4.21" cy="16.50" r="1"><animate id="spinner_ld6P" begin="spinner_XyBs.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="16.50" cy="19.79" r="1"><animate id="spinner_7gAK" begin="spinner_BfTD.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="7.50" cy="19.79" r="1"><animate id="spinner_XyBs" begin="spinner_HiSl.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><circle cx="12" cy="21" r="1"><animate id="spinner_HiSl" begin="spinner_7gAK.begin+0.1s" attributeName="r" calcMode="spline" dur="0.6s" values="1;2;1" keySplines=".27,.42,.37,.99;.53,0,.61,.73"/></circle><animateTransform attributeName="transform" type="rotate" dur="6s" values="360 12 12;0 12 12" repeatCount="indefinite"/></g></svg>`
    submit_btn.disabled = true;
    submit_btn.classList.add("pointer-events-none")

    const url = 'https://chatgpt-42.p.rapidapi.com/deepseekai';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '43ae469ffamsha1b3470098ee84bp1f4f62jsnf14d9cd965e5',
            'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: chat_text.value
                }
            ],
            web_access: false
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const chatDiv = document.createElement("div")
        console.log(result);

        chatDiv.innerHTML = `
        <div class="flex flex-col-reverse gap-9 md:grid md:grid-cols-2 max-w-4xl mx-auto w-full">
           <div></div>
           <div class="bg-[#2F2F2F] p-3 rounded-2xl prose prose-invert">
               ${marked.parse(result.result)}
            </div>
           <h1 class="text-lg md:text-xl text-white  p-1 border-l-2 border-l-gray-500 pl-4">${chat_text.value}</h1>
           <div></div>
        </div>`

        chat_content.append(chatDiv);
        submit_btn.innerHTML = "Send"
        submit_btn.disabled = false;
        submit_btn.classList.remove("pointer-events-none");
        chat_text.value = ''
    } catch (error) {
        console.error(error);
    }
})
