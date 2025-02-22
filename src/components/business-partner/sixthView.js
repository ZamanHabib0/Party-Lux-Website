import React  from "react";

export default function SixthView(props) {


  return (
    <>
           <div className="partnerdata-container mt-5 p-3 " >
             <h5 className="text-light"> {props.isUpdateBusiness ?   "Update Business" : "Become a Partner"}</h5>
             <img
                  src="assets/img/partner-support.png"
                  alt="img"
                  className= "partner-support-img"
                />
                <p className="text-left mb-4">
                {props.isUpdateBusiness ?    "Click the Update Business button to submit your changes. You'll receive an email notification once your updates have been reviewed." : 
                "Just click 'Submit,' and we will review your application. You'll receive an email if you have been selected."}     </p>


                {props.error && <p className="custom-error-text text-left">{props.error}</p>}

                <button className= "become-partner-scroll-btn rounded-custom" style={{ width: "100%" , borderRadius : "10px"}}
                 onClick={() => {               
                 if (!props.uploading) {
            
                {props.isUpdateBusiness ?    props.updateBusinessWithToken() : props.createBusiness()}   
                  }
                 }}
                 disabled={props.uploading}
                 >
              {props.isUpdateBusiness ? (props.uploading ? 'Updating Business...' : 'Update Business') : (props.uploading ? 'Submitting...' : 'Submit')}
      
                </button>

            </div>
    </>
  );
}
