function Dashboard(){

const cards=[
{
title:"Total Bookings",
value:"120"
},
{
title:"Completed",
value:"95"
},
{
title:"Pending",
value:"25"
},
{
title:"Revenue",
value:"₱75,000"
}
];


return (

<div>


<h2>
Dashboard Overview
</h2>



<div className="card-container">


{
cards.map((card,index)=>(

<div className="card" key={index}>

<h3>
{card.title}
</h3>


<h2>
{card.value}
</h2>


</div>

))
}


</div>




<div className="section">


<h2>
Recent Bookings
</h2>


<table>

<thead>

<tr>
<th>Customer</th>
<th>Package</th>
<th>Status</th>
</tr>

</thead>


<tbody>


<tr>
<td>Juan Dela Cruz</td>
<td>Wedding Package</td>
<td>Completed</td>
</tr>


<tr>
<td>Maria Santos</td>
<td>Birthday Package</td>
<td>Pending</td>
</tr>


</tbody>


</table>


</div>



</div>

)


}


export default Dashboard;