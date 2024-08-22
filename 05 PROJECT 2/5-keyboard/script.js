const insert = document.querySelector("#insert");
window.addEventListener("keydown", (e) => {
  // insert.innerHTML = e.key
  insert.innerHTML = `
    <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <th>${e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
        </table>
    
    </div>`;
  // console.log(e.key)
});
