import React from 'react'
import Check from './assets/check.svg'
import Dotted from './assets/dotted-line.svg'
import NotCheck from './assets/not-check.svg'

function ProgressBar(props) {
    const pageNumber = props.counter
    const pageTitles = [
        'basic information',
        'tell us more',
        'create your password',
        'confirmation'
    ]

    // console.log(
    //     pageTitles.map((title,index) =>{
    //         return index
    //     })
    // )

    return (
        <div className='progress'>

            {pageTitles.map((titles, index) => {
                return (
                    <div
                        className={`step${index + 1}`}
                        key={index}
                        style={{opacity: `${index > pageNumber? '0.4': '1' }`}}>

                        {index > 0 && <img src={Dotted} alt="dotted-line" />}
                        <div className={`p${index + 1}`}>
                            <div className="right"><img src={pageNumber <= index ? NotCheck : Check} alt='check' /></div>
                            <div className="left">
                                <p>step {index + 1}/4</p>
                                <h4>{titles}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}

            {/* <div className="step1 p1">
                <div className="right"><img src={Check} alt="" /></div>
                <div className="left">
                    <p>step 1/4</p>
                    <h4>basic information</h4>
                </div>
            </div>

            <div className="step2">
                <img src={Dotted} />
                <div className="p2">
                    <div className="right"><img src={NotCheck} alt="" /></div>
                    <div className="left">
                        <p>step 2/4</p>
                        <h4>tell us more</h4>
                    </div>
                </div>
            </div>

            <div className="step3">
                <img src={Dotted} className='dot' />
                <div className="p3">
                    <div className="right"><img src={NotCheck} alt="" /></div>
                    <div className="left">
                        <p>step 3/4</p>
                        <h4>create your password</h4>
                    </div>
                </div>
            </div>

            <div className="step4">
                <img src={Dotted} className='dot' />
                <div className="p4">
                    <div className="right"><img src={NotCheck} alt="" /></div>
                    <div className="left">
                        <p>step 4/4</p>
                        <h4>confirmation</h4>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default ProgressBar