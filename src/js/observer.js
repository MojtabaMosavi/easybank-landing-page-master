
export const Observer = (function(){

    // variables
    const sections = document.querySelectorAll(".scrollOnView"); 

    // functions 
    function _handleObservation(entries,observer){
        entries.forEach( entry => {
            if(!entry.isIntersecting){
                entry.target.classList.remove("fadeInRight");
                return
            }else{
                entry.target.classList.add("fadeInLeft");
                observer.unobserve(entry.target);
            }
        })
    }
    
    function init(){
        CreateOberver(sections,_handleObservation);
    }


    function CreateOberver(elements,callBack,options){
        let oberver;
        const defaultOptions = {
            root: null,
            rootMargin: " -100px 0px 0px 0px",
            threshold: 0.01}

        let configuration = options ? defaultOptions : options 
        const observer = new IntersectionObserver(callBack,configuration);

        // observing each element
        elements.forEach(entry => { observer.observe(entry)})
    }


    // Public API 
    return {
        CreateOberver:CreateOberver,
        init:init,
    }
})();


