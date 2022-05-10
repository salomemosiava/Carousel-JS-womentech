let data = [
    {
        id: 1,
        imageUrl: 'https://www.dudleyzoo.org.uk/wp-content/uploads/Flamingo-Pinky-photo.jpg',
        title: '1. Flamingo',
        url: 'https://www.google.com/search?q=flamingo&sxsrf=ALiCzsYljkbPSNkNuKNn37zWGfgz4Aew9g:1652188105534&source=lnms&tbm=isch&sa=X&ved=2ahUKEwito4epgNX3AhVSSvEDHXIiB2sQ_AUoAXoECAMQAw&biw=1920&bih=969&dpr=1',
    },
    {
        id: 2,
        imageUrl: 'https://media.globalcitizen.org/thumbnails/97/76/97766969-a665-4fe5-871f-b01abc7bc7e8/world-giraffe-day-hero-2.jpg__1600x900_q85_crop_subsampling-2.jpg',
        title: '2. Giraffe',
        url: 'https://www.google.com/search?q=Giraffe&tbm=isch&ved=2ahUKEwjrica_gNX3AhX9if0HHRIqDEUQ2-cCegQIABAA&oq=Giraffe&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzoFCAAQgAQ6BggAEAcQHjoECAAQGDoGCAAQChAYULMIWLwLYN0OaAFwAHgAgAHVAYgB-wKSAQUwLjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=-GN6YuutKv2T9u8PktSwqAQ&bih=969&biw=1920'
    },
    {
        id: 3,
        imageUrl: 'https://wildlifesos.org/wp-content/uploads/2020/12/Maya-L-and-Phoolkali-R-enjoying-her-special-cake-at-the-Wildlife-SOS-center--1920x900.jpg',
        title: '3. Elephant',
        url: 'https://www.google.com/search?q=elephant&tbm=isch&ved=2ahUKEwig85LVgNX3AhUZgv0HHcikCMIQ2-cCegQIABAA&oq=elephant&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCCMQ7wMQJzIFCAAQgAQyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgARQ2A9YuRRg4h1oAHAAeACAAZ4CiAGIBZIBBTAuMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=JWR6YuDMPJmE9u8PyMmikAw&bih=969&biw=1920'
    },
    {
        id: 4,
        imageUrl: 'https://sdzsafaripark.org/sites/default/files/styles/hero_with_nav_gradient/public/hero/hero-crownedcrane.jpg?itok=2d40kArl',
        title: '4. Crowned Crane',
        url: 'https://www.google.com/search?q=crowned+crane&hl=en&sxsrf=ALiCzsZnbFDyz6pgK7rb45KuI7I_g2f1lQ:1652188368850&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjU4M6mgdX3AhVbQvEDHYQHDTkQ_AUoAXoECAIQAw&biw=1920&bih=969&dpr=1'
    },
    {
        id: 5,
        imageUrl: 'https://media.wired.com/photos/5bda3f63b8e3ca51fea010bf/16:9/w_2400,h_1350,c_limit/MandarinDuck-971545542.jpg',
        title: '5. Mandarin duck',
        url: 'https://www.google.com/search?q=Mandarin+duck&sxsrf=ALiCzsYalOgGWVkNRzipbE5oN3aQ0EFoiA:1652188480823&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiwi4HcgdX3AhWvQvEDHSgxDv0Q_AUoAXoECAIQAw&biw=1920&bih=969&dpr=1'
    },
];

let arrowLeft = document.getElementById ('arrow-left');
let arrowRight = document.getElementById ('arrow-right');
let sliderContainer = document.getElementById ('slider');
let dotsList = document.getElementsByClassName ('dot');

let sliderIndex = 0;

function createATag (item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slider-a');

    return aTag;
}

function createImgTag(item) {
    // let imgTag = document.body.style.backgroundImage = 'url(' + item.imageUrl + ')';
    sliderContainer.style.backgroundImage = 'url('+ item.imageUrl +')';
    sliderContainer.style.backgroundRepeat = "no-repeat";
    sliderContainer.style.backgroundSize = "cover";
}


function createH2Tag (item) {
    let h2Tag = document.createElement('a');
    h2Tag.setAttribute.href = item.url;
    h2Tag.classList.add('slider-title');
    h2Tag.append(item.title);

    return h2Tag;
}

function createDots() {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach((element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id-1);

        dot.onclick = () => {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlider();
        }
        dots.appendChild(dot);
    })
    return dots;
}

function setSlider() {
    sliderContainer.innerText = '';
    createImgTag(data[sliderIndex]);
    let sliderItem = createATag (data[sliderIndex]);
    let title = createH2Tag (data[sliderIndex]);
    let dots = createDots();
    sliderItem.appendChild(title);
    sliderContainer.appendChild(sliderItem);
    sliderContainer.appendChild(dots);
    currentDotActive();
    
}

function currentDotActive () {
    dotsList[sliderIndex].classList.add('active')
}

function arrowLeftClick () {
    if (sliderIndex == 0) {
        sliderIndex = data.length;
     }
    sliderIndex--;
    setSlider();
}

function arrowRightClick () {   
    if(sliderIndex == data.length-1) {
        sliderIndex = -1;
    }
    sliderIndex++;
    setSlider();
}
//1.
arrowLeft.addEventListener('click', arrowLeftClick)
arrowRight.addEventListener('click', arrowRightClick)
//2.
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        arrowLeftClick();
    } else if (event.keyCode == 39) {
        arrowRightClick();
    }
})
//3.
setInterval( () => {
    arrowRightClick ();
}, 4000);

setSlider();
