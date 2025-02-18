const chat = ()=> {

    return `
    <form id="form_chat" class="mt-auto w-full flex justify-center items-center flex-col gap-y-12">
        <div class="relative max-w-3xl w-full">
          <textarea id="chat_text" rows="4" class="resize-none bg-[#303030] border-none outline-none text-white py-3 px-4 text-lg  w-full rounded-2xl" placeholder="Message ChatGPT"></textarea>
             <div class="absolute inset-x-0 bottom-0 p-5 flex justify-end items-center">
                <button id="submit_button" type="submit" class="w-[150px]  flex justify-center items-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-full cursor-pointer transition-colors duration-150">Send</button>
            </div>
        </div>
    </form>
    `
}

export default chat;