import "./App.css";
import "./styles/evaluator.css";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";


function App(){

return (

<div className="layout">


<aside className="sidebar">

<h2>
SnapSmart
</h2>


<nav>

<p>📊 Dashboard</p>
<p>📄 Reports</p>
<p>📈 Analytics</p>

</nav>


</aside>



<main className="main-content">


<header className="top-header">

<h1>
Dashboard Overview
</h1>

<p>
End-to-End Testing Evaluation System
</p>

</header>



<Dashboard/>

<Reports/>

<Analytics/>


</main>


</div>

)

}


export default App;