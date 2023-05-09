import React from 'react'

export const FuelUsage = () => {
  return (
    <div className="card mb-4 shadow-sm">
            <article className="card-body">
                <h5 className="card-title">Fuel Usage</h5>
                <iframe 
                style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);" ,
                width:"100%", 
                height:"350px" }}
                src="https://charts.mongodb.com/charts-southern-agro-serve-yxqwr/embed/charts?id=645a0553-d3ec-4d2a-84ca-6b93ed8b0fec&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            </article>
        </div>
  )
}
