window.addEventListener("load",function timeout(){
    var loader=document.getElementById("loader");
    $('.blue').css("animation","updown 1.2s infinite ease-in-out alternate");
    $('.red').css("animation","updown 1.2s 0.2s infinite ease-in-out alternate");
    $('.yellow').css("animation","updown 1.2s 0.4s infinite ease-in-out alternate");
    $('.green').css("animation","updown 1.2s 0.6s infinite ease-in-out alternate");

    setTimeout(function(){
        $('.blue').css("animation","sound-1 1.4s");
        $('.red').css("animation","sound-2 1.4s 0.25s");
        $('.yellow').css("animation","sound-1 1.4s 0.10s");
        $('.green').css("animation","sound-2 1.4s 0.15s");

        setTimeout(function(){
        $('.blue').css("animation","finalani 0.4s");
        $('.red').css("animation","finalani 0.4s 0.05s");
        $('.yellow').css("animation","finalani 0.4s 0.1s");
        $('.green').css("animation","finalani 0.4s 0.15s");

           setTimeout(function(){
            timeout();

            this.setTimeout(
                function open(event){
                    loader.style.display="none";
                },
                5000
            );
           },550);

        },1190);

    },3000);

}

);