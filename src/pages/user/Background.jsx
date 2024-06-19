import React from 'react';

const Background = ({ playStatus, hero }) => {
    if (playStatus) {
        return (
            <video style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay loop muted>
                <source src="https://cdn.pixabay.com/video/2023/10/12/184734-873923034_large.mp4" type="video/mp4" />
            </video>
        );
    }
    else if(hero===0){
            return <img className='w-full h-screen' src="https://t3.ftcdn.net/jpg/03/24/72/86/360_F_324728617_VbBJliGlMNhgPH0lSyodqKo0ouKRZbav.jpg" alt="" />
    }
    else if(hero===1){
        return <img className='w-full h-screen' src="https://images.hindustantimes.com/auto/img/2021/08/15/600x338/Rimac_Nevara_1629031609366_1629031613270.jpg" alt="" />
}
else if(hero===2){
    return <img className='w-full h-screen' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVx7wUzleFUmgotw4H6IOBmbyhGiw37EBIZw&s" alt="" />
}   
else if(hero===3){
    return <img className='w-full h-screen' src="https://t3.ftcdn.net/jpg/03/24/72/86/360_F_324728617_VbBJliGlMNhgPH0lSyodqKo0ouKRZbav.jpg" alt="" />
}
else if(hero===4){
    return <img className='w-full h-screen' src="https://robbreport.com/wp-content/uploads/2017/03/lambo.png" alt="" />
}
    return null;
};

export default Background;
