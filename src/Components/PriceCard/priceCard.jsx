import React from "react"; 
import './priceCard.css'
const PriceCard= ()=>{


    return(

        <div>
          <div className="Container">
            <div className="Card1">
               <h3 className="free">Free</h3>

               <h1 class="card-price text-center">$0<span class="period">/month</span></h1>

               <hr/>

               <ul class="fa-ul">
              <li className="list">
          
                Single User</li>



              <li className="list">5GB Storage</li>
              <li className="list">Unlimited Public Projects</li>
              <li className="list">Community Access</li>
              <li className="list" class="text-muted">Unlimited
                Private Projects
                </li>
              <li className="list" class="text-muted">Dedicated
                Phone Support</li>
              <li className="list" class="text-muted">Free Subdomain
              </li>
              <li className="list" class="text-muted">Monthly Status
                Reports</li>
            </ul>

            <div >
                <button className="btn">Button</button>
            </div>

            </div>

            <div className="Card2">
            <h3 className="plus">Plus</h3>

            <h1 class="card-price text-center">$9<span class="period">/month</span></h1>

            <hr/>

            <ul class="fa-ul">
              <li className="list"><strong>5 Users</strong></li>
              <li className="list">50GB Storage</li>
              <li className="list">Unlimited Public Projects</li>
              <li className="list" >Community Access</li>
              <li className="list">Unlimited Private Projects</li>
              <li className="list">Dedicated Phone Support</li>
              <li className="list">Free Subdomain</li>
              <li className="list" class="text-muted2">Monthly Status
                Reports</li>
            </ul>

            <div >
                <button className="btn">Button</button>
            </div>

            </div>

            <div className="Card3">
            <h3 className="pro">Pro</h3>

            <h1 className="card-price text-center">$49<span class="period">/month</span></h1>

            <hr />

            <ul className="fa-ul">
              <li><span className="fa-li"></span><strong>Unlimited Users</strong>
              </li>
              <li className="list">150GB Storage</li>
              <li className="list">Unlimited Public Projects</li>
              <li className="list">Community Access</li>
              <li className="list">Unlimited Private Projects</li>
              <li className="list">Dedicated Phone Support</li>
              <li className="list"><strong>Unlimited</strong> Free
                Subdomains</li>
              <li className="list">Monthly Status Reports</li>
            </ul>

            <div >
                <button className="btn">Button</button>
            </div>

            </div>
          </div>
        </div>
    )
}

export default PriceCard;