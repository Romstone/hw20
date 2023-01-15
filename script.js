(()=>{

    const imgDB = [
        'img/house_1.jpg',
        'img/house_2.jpg',
        'img/house_3.jpg',
        'img/house_4.jpg'
    ];

    //elements
    const imgList = document.getElementById('imgList');
    const alertZoneDiv = document.getElementById('alertZone');
    const alertContentDiv = document.getElementById('alertContent');
    const imgContent = document.getElementById('imgContent');

    const render = () => {
        //TODO add to #imgList images 80*80
        //TODO add to #imgList 'click' event listener
        imgList.innerHTML = imgDB.map((value, index) => {
            return `<img src="${value}" id="${index}" alt="img_${index+1}" width="80px" height="80px">`
        }).join('');
        imgList.addEventListener('click', e => {
            const img = e.target.getAttribute('src');
            alertZoneDiv.classList.toggle('hide');
            alertContentDiv.classList.toggle('hide');
            imgContent.setAttribute('src', img);
        });
        alertZoneDiv.addEventListener('click', () => {
            alertZoneDiv.classList.add('hide');
            alertContentDiv.classList.add('hide');
        });
        document.getElementById('close').addEventListener('click', () => {
            alertZoneDiv.classList.add('hide');
            alertContentDiv.classList.add('hide');
        });
    }
    render();

})();
