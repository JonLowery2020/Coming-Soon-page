document.querySelector('.banner-btn').addEventListener('click', ()=>{
    document.querySelector('.banner').style.display = 'none';

    document.querySelector('.form-container')
    .style.cssText ='opacity: 1; visibility: visible';

    document.querySelector('.container')
    .style.background = 'rgb(206, 170, 10)';
});

document.querySelector('.x-btn').addEventListener('click', ()=>{
    document.querySelector('.banner').style.display = 'flex';

    document.querySelector('.form-container')
    .style.cssText ='opacity: o; visibility: hidden';

    document.querySelector('.container')
    .style.cssText = 'background: linear-gradient(rgba(0,0,0, .8), rgba(0,0,0,.7)), url("images/bg1.jpeg") center no-repeat; background-size: cover';
})