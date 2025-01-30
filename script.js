let prevScrollPos = 0;

const header = document.querySelector('header');
const headerUI = document.querySelector('header nav ul');
window.addEventListener('scroll',() => {
    const scrollDir = document.documentElement.scrollTop - prevScrollPos;
    
    const transition = '-translate-y-full'
    if(scrollDir > 0){
        header.classList.add(transition);
        headerUI.classList.remove('active');
    }
    else{
        header.classList.remove(transition);
    }
    prevScrollPos = document.documentElement.scrollTop
})

const sleep = async (delay) => {
    await new Promise((resolve) => setTimeout(resolve, delay));
}

function handleHam(){
    document.querySelector('header ul').classList.toggle('active')
    
}

const dtxt = document.querySelectorAll('.dtext');
let dynamicTextDelay;
const dynamicText = () => {
    dynamicTextDelay = 50;
    dtxt.forEach(dt => {
        if(dt.getAttribute('direction') === null)
            dt.setAttribute('direction','inc');
        
        const target = dt.getAttribute('value');
        const tdir = dt.getAttribute('direction');
        const tarr = dt.getAttribute('darray').split(',');
        const value = dt.innerHTML;

        let ns = value.length - 1;
        if(ns == target.length && tdir == 'inc'){
            dynamicTextDelay = 1000;
            dt.setAttribute('direction','dec');
        }

        else if(ns == 0 && tdir == 'dec'){
            for(let i=0;i<tarr.length;i++){
                if(tarr[i].match(target)){
                    let tv = i;
                    tv += 1;
                    if(tv >= tarr.length)
                        tv = 0;
                    dt.setAttribute('value',tarr[tv])
                }
            }
            dt.setAttribute('direction','inc');
        }

        if(tdir == 'inc'){
            ns += 1;
            dynamicTextDelay = Math.max(dynamicTextDelay,200);
        }
        else
            ns -= 1;

        
        dt.innerHTML = target.substring(0,ns) + '|';
    }); 
    
    setTimeout(dynamicText,dynamicTextDelay);
};

dynamicText();

document.addEventListener('DOMContentLoaded',() => {
    const observer = new IntersectionObserver( async (elements) => {
        elements.forEach(element => {
            if(element.intersectionRatio != 0){
                element.target.classList.add('pop-in');
                
            }
        });
    });
    
    document.querySelectorAll('.tobepoped').forEach(element => {
        observer.observe(element);
    });
    document.querySelectorAll('time').forEach(element => {
        observer.observe(element);
    });
    document.querySelectorAll('timepoint').forEach(element => {
        observer.observe(element);
    });
    document.querySelectorAll('.card').forEach(element => {
        observer.observe(element);
    });
})

