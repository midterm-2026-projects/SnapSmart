function Reports() {


  const generateReport = () => {
    alert("Report generated successfully!");
  };


  const downloadReport = () => {
    alert("Report download started!");
  };


  const exportReport = () => {
    alert("Report exported successfully!");
  };


  const reports = [
    {
      id: "001",
      date: "July 21, 2026",
      type: "Booking Report",
      status: "Completed",
    },
    {
      id: "002",
      date: "July 21, 2026",
      type: "Financial Report",
      status: "Completed",
    },
    {
      id: "003",
      date: "July 21, 2026",
      type: "Analytics Report",
      status: "Pending",
    },
  ];


  return (

    <div>

      <h2>
        Reports Management
      </h2>


      <div className="section">


        <h3>
          Generate Reports
        </h3>


        <p>
          Create, download, and export system reports.
        </p>


        <button
          className="button"
          onClick={generateReport}
        >
          Generate Report
        </button>



        <button
          className="button"
          onClick={downloadReport}
        >
          Download
        </button>



        <button
          className="button"
          onClick={exportReport}
        >
          Export
        </button>


      </div>



      <div className="section">


        <h3>
          Generated Reports
        </h3>



        <table>


          <thead>

            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Report Type</th>
              <th>Status</th>
            </tr>

          </thead>



          <tbody>


            {
              reports.map((report) => (

                <tr key={report.id}>

                  <td>
                    {report.id}
                  </td>


                  <td>
                    {report.date}
                  </td>


                  <td>
                    {report.type}
                  </td>


                  <td>
                    {report.status}
                  </td>


                </tr>

              ))
            }


          </tbody>


        </table>


      </div>


    </div>

  );

}


export default Reports;