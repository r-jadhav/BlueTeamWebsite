function Tabs({filterCategory, tabsData}){
    return(
        <>

 <section className="portfolio_area">
           
            <div className="filters portfolio-filter d-flex justify-content-center">
                <ul>
 {
  tabsData.map((category, index)=>{
      return (

        <li className="active" onClick={()=> filterCategory(category)} key={index} >{category}</li>

        )
      })
    }

    </ul>
  </div>
            
      {/* <button type="button" className="btn btn-outline-primary mx-2 text-capitalize" onClick={()=> filterCategory(category)} key={index}>{category}</button> */}
      </section>

        </>
    )
}
export default Tabs;