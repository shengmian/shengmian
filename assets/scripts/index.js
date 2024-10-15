/* global swal, renderMarkdown */

document.addEventListener("DOMContentLoaded", async () => {
    // 输出控制台欢迎消息
    console.log("%c 乾杯 - ( ゜- ゜)つロ", "background:#24272A; color:#ffffff", "");
    console.log("");

    // 渲染 Markdown 内容
    renderMarkdown();

    // 获取 Hitokoto 一言
    fetch("https://v1.hitokoto.cn")
        .then((response) => response.json())
        .then((data) => {
            const hitokoto = document.querySelector("#hitokoto-text");
            hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`;
            hitokoto.innerText = data.hitokoto;
        })
        .catch(console.error);
});