import React, { useState } from "react";

const SpecialCharacters = () => {
  const [showTable, setShowTable] = useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  return (
    <div>
      <button onClick={toggleTable}>
        {showTable ? "Close" : "Spanish Characters"}
      </button>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Spanish Characters</th>
              <th>Alt + Numbers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>á</td>
              <td>Alt + 0225</td>
            </tr>
            <tr>
              <td>é</td>
              <td>Alt + 0233</td>
            </tr>
            <tr>
              <td>í</td>
              <td>Alt + 0237</td>
            </tr>
            <tr>
              <td>ó</td>
              <td>Alt + 0243</td>
            </tr>
            <tr>
              <td>ú</td>
              <td>Alt + 0250</td>
            </tr>
            <tr>
              <td>ñ</td>
              <td>Alt + 0241</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SpecialCharacters;
