import React from 'react'
import {LightBox} from 'react-lightbox-pack'; 
import "react-lightbox-pack/dist/index.css";


function Items({data}){

  const [toggle, setToggle] =  React.useState(false);
	const [sIndex, setSIndex] =  React.useState(0);

	const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};

    return (
        <div className="row ">

            <div className="filters-content gridImgHolder mb-6 mb-lg-9">
				          <div className="row portfolio-grid justify-content-center">

        {
          data.map((value, index)=>{
           const {id, image, title, description} = value;
           return (
            <div className="my-3 col-md-12 col-lg-4 all" key={id}>

             <div className="portfolio_box">
							  <div className="single_portfolio">
             
                <img key={id} src={image} alt={title} 
                // style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
                  onClick={() => {
                  lightBoxHandler(true, index);
                }}
				        />
                <div className="short_info">
                    <h3>{title}</h3>
                    <a href={description} target="_blank"><p>{description}</p></a>
                </div>

                </div>
              </div>
              
                <LightBox
                  state={toggle}
                  event={lightBoxHandler}
                  data={data}
                  imageWidth="60vw"
                  imageHeight="70vh"
                  thumbnailHeight={50}
                  thumbnailWidth={50}
                  setImageIndex={setSIndex}
                  imageIndex={sIndex}
              />

         </div>


           )
          })
        }

        </div>
    </div>
</div>
    )
}
export default Items;