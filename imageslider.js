let leftbutton = document.getElementById('l1');
let rightbutton = document.getElementById('r1');
let image = document.getElementById('image');

const images= document.querySelectorAll('.image1');
let imageslider=1;
let lenght = images.length;

function leftSlider()
{
    if(imageslider<0)
    {
        imageslider=lenght-1;
        image.style.transform = `translateX(-${imageslider*600}px)`;
    }
    else
    {
       
        image.style.transform = `translateX(-${imageslider*600}px)`;
        imageslider--;
    }
}
function rightSlider()
{
    if(imageslider>lenght-1)
    {
        imageslider=0;
        image.style.transform = `translateX(-${imageslider*600}px)`;
    }
    image.style.transform = `translateX(-${imageslider*600}px)`;
    imageslider++;

}

   rightbutton.addEventListener('click',rightSlider);
   leftbutton.addEventListener('click',leftSlider);
   


