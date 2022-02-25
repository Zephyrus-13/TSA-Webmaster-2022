import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AfricaShow = () => {
  const africaData =[
    {
      countryName: "Mali",
      demographics: "The largest ethnic groups are Bambara (33.3%), Fulani (13.3%), and Sarakole (9.8%) in Mali.",
      language: "The official language is French.",
      festivals: "Popular festivals are the Gouin festival, festival on the Niger, and Desert festival.",
      sources: "IndexMundi, ArcGIS, and iExplore."
    },
    {
      countryName: "Egypt",
      demographics: "The largest ethnic group is the Ethnic Egyptians (91%) in Egypt.",
      language: "The official language is Arabic.",
      festivals: "Popular festivals are Coptic Christmas, Eid Al Ghetas, and Sham Al Naseem.",
      sources: "Travel Triangle, WorldAtlas, and World Population Review."
    },
    {
      countryName: "South Africa",
      demographics: "The largest racial groups are Black (79%), White (9%), and Asian (3%) in South Africa.",
      language: "South Africa has 11 official languages. The most commonly spoken language is Zulu.",
      festivals: "Popular festivals are the National Arts festival, Cape Town Jazz festival, and Knysna Oyster festival.",
      sources: "WorldAtlas, World Population Review, and Travel Triangle."
    }
  ];

  const ArrowLeft = (props) => (
    <button {...props} className="arrowButtonL"/>
  );
  const ArrowRight = (props) => (
    <button {...props} className="arrowButtonR"/>
  );

  const settings = {
    dots: true,
    fade: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    prevArrow: <ArrowLeft/>,
    nextArrow: <ArrowRight/>
  }

  return (
    <Slider {...settings}>
      {africaData.map((data) => {
        return(
          <div className="outer">
            <div className="countryName">
              <p>{data.countryName}</p>
            </div>

            <div>
              <p className="exText">Demographics: {data.demographics}</p>
            </div>
            <div>
              <p className="exText">Language: {data.language}</p>
            </div>
            <div>
              <p className="exText">Festivals: {data.festivals}</p>
            </div>
            <div>
              <p className="exText">Sources: {data.sources}</p>
            </div>

          </div>
        )
      })}
    </Slider>
  );
}
 
export default AfricaShow;