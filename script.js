"use strict"

$(() => {
    $.get("https://www.reddit.com/r/aww/.json").then((data) => {
            console.log(data.data.children);
            for (let i = 0; i < 10; i++) {
                $("body").append(`
            <section class = "posts">    
            <section class="post">
            <p class = "author">${data.data.children[i].data.author}</p>
            <a href="https://www.reddit.com${data.data.children[i].data.permalink}" target="_blank"> 
                <img class = "img" src="${data.data.children[i].data.thumbnail}">
                </a>
            <p class = "title">${data.data.children[i].data.title}</p>
            </section>
            </section>
            
            `);
            }
        })
        .catch((error) => {
            alert(error);
        });

});