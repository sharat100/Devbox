function Table({data}) {
  return (
    <div className="api-usage">
      <h2>API Usage Stats</h2>
      <table className="api-table">
        <thead>
          <tr>
            <th>API Name</th>
            <th>Time</th>
            <th>Status</th>
            <th>Response Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.name}</td>
              <td>{entry.time}</td>
              <td>{entry.status}</td>
              <td>{entry.responseTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
