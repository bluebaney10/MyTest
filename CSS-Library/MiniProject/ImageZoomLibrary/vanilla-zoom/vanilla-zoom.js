(function(window){

    function define_library(){
        let vanillaZoom={}
        vanillaZoom.init = function(el){
            let container=document.querySelector(el);
            if(!container){
                return;
            }

            let firstSmallImage =container.querySelector('.small-preview');
            let zoomedImage =container.querySelector('.zoomed-image');
            if(!firstSmallImage){
                console.error('Please add image with the small preivew class');
                return;
            }else{
                zoomedImage.style.backgroundImage =`url(${firstSmallImage.src})`;
            }

            if(!zoomedImage){
                console.error('Please add a zoomed image element');
                return;
            }

            container.addEventListener('click',function(event){
                let elem = event.target;
                if(elem.classList.contains("small-preview")){
                    let imageSrc = elem.src;
                    zoomedImage.style.backgroundImage = `url(${imageSrc})`;
                }
            })

            zoomedImage.addEventListener('mouseenter',function(){
               this.style.backgroundSize = "250%";
            },false)

            zoomedImage.addEventListener('mouseleave',function(){
                this.style.backgroundSize = "cover";
                this.style.backgroundPosition = "center";
             },false)


             zoomedImage.addEventListener('mousemove',function(e){
                let dimensions = this.getBoundingClientRect();
                let x = e.clientX - dimensions.left;
                let y = e.clientY - dimensions.top;
              
                let xPercent = Math.round(100 / (dimensions.width / x))
                let yPercent = Math.round(100 / (dimensions.height / y))

                this.style.backgroundPosition = xPercent+'%'+yPercent+'%';
            },false)
        }

        return vanillaZoom;
    }


    if(typeof(vanillaZoom)=== 'undefined'){
        window.vanillaZoom = define_library();
    }else{
        console.log('Library already');
    }

})(window);