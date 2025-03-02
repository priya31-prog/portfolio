import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../stylesheets/Achievements.css';

const Achivements = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };


    const achivements = [
    {
      
      'desciption': 'Awarded as a star performer of the Quarter(JUL - SEPT)',
      'img': '/images/star_performer.jpg',

      // public\star_performer.jpg
    // background-image: url(../images/mobile_bg.jpg);
      
    },
    {
     
      'desciption': "Fostered a collaborative team environment that improved communication and problem-solving, leading to a 15% increase in overall productivity",
      'img': '../images/team_work.jpg',
    },
     {
     
      'desciption': "Developed the User Interfaces without any defects",
      'img': '../images/zero-defect.png',
    },
    {
      'desciption': "Integrated complex payment methods and worked on NPCI to initiate payments.",
      'img': '../images/payment.jpg',
    }
    ];
    

    return (
        

<div className='w-3/4 m-auto'>
              <div className='mt-20'>
                <Slider {...settings}>
                {
                  achivements.map((activities, index) => (
                    <div className='bg-blue-100 h-[250px] text-black rounded-xl'>
                      <div className='h-35 rounded-t-xl flex justify-center item-center p-4'>
                        <img src={process.env.PUBLIC_URL + activities.img} alt='hello' className='h-24 w-24 rounded-full'/>
                      </div>
                      <div className='flex flex-col justify-center items-center gap-4 p-4' >
                        <p className='text-xs'>{activities.desciption}</p>
                      </div>
                    </div>
                  ))
                  }
                  </Slider>
              </div>
    </div>
    
     );
}

export default Achivements;
