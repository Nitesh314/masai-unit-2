
let movie=[
    "https://cdn1.vectorstock.com/i/1000x1000/06/50/bollywood-indian-film-vintage-movie-poster-vector-22360650.jpg",
    "https://c7.alamy.com/comp/F762X7/indian-bollywood-hindi-film-movie-poster-of-ek-tha-tiger-F762X7.jpg",
   " https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg",
   "https://static-koimoi.akamaized.net/wp-content/new-galleries/2016/03/rustom-movie-posters.jpg",
   "https://wallpapercave.com/wp/wp8807385.jpg",
]
let i=0;
let img=document.createElement("img");
img.innerHTML=null
img.setAttribute("id","img")
id=setInterval(function (){

    if(i==movie.length){
        i=0;
    }
    else{
        img.src=movie[i];
        document.getElementById("slideshow").append(img)

        i++;
    }
},2000);

let moviearr=[

     {image:"https://i.pinimg.com/originals/f6/35/fd/f635fda7eac6e9315006ecfba15db2b6.jpg",
       reating:"⭐⭐⭐⭐⭐"
    },
    
    {image:"https://webneel.com/daily/sites/default/files/images/daily/08-2018/4-india-movie-poster-design-idea-bahubali.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://img.mensxp.com/media/content/2020/Jun/1_5eda2639c2947.png",
    reating:"⭐⭐⭐⭐"
    },

    {image:"https://oilcanvasportrait.in/wp-content/uploads/2018/03/Bollywood-customise-poster-save-the-date-cards.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://scontent.fbom37-1.fna.fbcdn.net/v/t1.6435-9/119988755_1761977270621070_7751453738800976530_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=104&ccb=1-7&_nc_sid=110474&_nc_ohc=VxkSMNtVY8MAX-w-CkB&_nc_ht=scontent.fbom37-1.fna&oh=00_AT88msTRTdcLo7_8Z4185qqgkDPXmsauGAgERY6EUJTvpA&oe=62E5E547",
    reating:"⭐⭐⭐"
    },

    {image:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://5.imimg.com/data5/CO/IP/MQ/SELLER-30220222/bollywood-wall-poster-500x500.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://oilcanvasportrait.in/wp-content/uploads/2018/03/Best-old-Indian-movie-poster-hand-painted.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ftCcriCWLKNr550S7aWMIz2lcfsTS6OPEw&usqp=CAU",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://i.ebayimg.com/images/g/uCcAAOSwB09YOY45/s-l400.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://i.pinimg.com/736x/ec/54/88/ec5488d54bbe54fc90363acf8012fcca.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kpl74fKJ47-vvrWUJ8vfoBcdipoK6bSFqAEVfUNXQTAQsrirKgdC1DIlCFuEI0vFqKo&usqp=CAU",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://c8.alamy.com/comp/DH1R41/indian-bollywood-hindi-movie-film-poster-of-mughal-e-azam-k-asif-naushad-DH1R41.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://custombollywoodposter.in/wp-content/uploads/2015/08/Hand-painted-Indian-Bollywood-movie-poster-artist-Mumbai-640x897.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://i.pinimg.com/originals/a3/55/83/a3558350a8f77d97d7ead34811cc1265.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },

    {image:"https://wallpapercave.com/wp/wp7967692.jpg",
    reating:"⭐⭐⭐⭐⭐"
    },
]
moviearr.forEach(function (ele){

    let div=document.createElement("div");

    let photo=document.createElement("img");
    photo.setAttribute("src",ele.image);

    let Reating=document.createElement("p");
    Reating.innerText="Reating:-"
    Reating.append(ele.reating)

    div.append(photo,Reating);
    document.getElementById("movies").append(div)

})

// document.getElementById("home").addEventListener("click",function(){
//     homefun();
// })


