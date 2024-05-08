import React from 'react'
import { useSelector } from 'react-redux'

function Videocard({cssStyle}) {
  const count = useSelector((state)=> state.counterReducer)
  console.log(count);
  return (
    <>
    
    <div className="container">
    <div className="row row-res" style={{marginTop: '-400px', marginLeft:cssStyle}}>

        {count.video && !("value" in count)  ? 
        count.video?.map((item)=>(
            <div className="col-md-3 mb-5 videoCards" style={{cursor:'pointer'}} id="play">
             <a href="#" target='_blank' style={{textDecoration: 'none'}}>
                <div className="card" style={{width:'100%'}}>
              <img src={item?.thumbnailUrl} className="card-img-top" alt="..." style={{height:'200px'}} />
              <p className='ms-auto' style={{marginTop: '-30px',marginRight: '10px', backgroundColor: 'black', color: 'white',fontSize:'14px'}}>{item?.duration}</p>
              <div className="card-body">
                  <p className="card-text video-title" style={{fontWeight:'bold'}}>{item?.description}</p>
                  <p style={{fontSize:'14px', color:'#606060', marginTop:'-14px'}}>{item?.author}</p>
                  <div className='d-flex justify-content-between' style={{marginTop: '-10px'}}>
                      <p>{item?.views + ' views'}</p>
                      |<p style={{marginRight:'40px'}}>{item?.uploadTime}</p>
                  </div>
              </div>
              </div>
              </a>
        </div>
        ))
    : 
    ''
    }


{count.value ? 
        count.value?.map((item)=>(
            <div className="col-md-3 mb-5 videoCards" style={{cursor:'pointer'}} id="play">
             <a href="#" target='_blank' style={{textDecoration: 'none'}}>
                <div className="card" style={{width:'100%'}}>
              <img src={item?.thumbnailUrl} className="card-img-top" alt="..." style={{height:'200px'}} />
              <p className='ms-auto' style={{marginTop: '-30px',marginRight: '10px', backgroundColor: 'black', color: 'white',fontSize:'14px'}}>{item?.duration}</p>
              <div className="card-body">
                  <p className="card-text video-title" style={{fontWeight:'bold'}}>{item?.description}</p>
                  <p style={{fontSize:'14px', color:'#606060', marginTop:'-14px'}}>{item?.author}</p>
                  <div className='d-flex justify-content-between' style={{marginTop: '-10px'}}>
                      <p>{item?.views + ' views'}</p>
                      |<p style={{marginRight:'40px'}}>{item?.uploadTime}</p>
                  </div>
              </div>
              </div>
              </a>
        </div>
        ))
    : 
    ''
    }

    </div>

    </div>

    </>
  )
}

export default Videocard