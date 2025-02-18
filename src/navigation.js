import Logo from "../public/deepseek.svg";

const navigation = () => {
    return `
       <nav class="container mx-auto flex gap-1 items-center py-4">
             <button class="flex items-center gap-3 text-xl font-bold text-white py-2 px-4 hover:bg-[#424242] transition-colors duration-150 rounded-md cursor-pointer">
            <img src=${Logo} alt="DeepSeek Logo" class="h-8"/>
                 DeekSeep R1
             </button>
           
      </nav>
    `;
};

export default navigation;
