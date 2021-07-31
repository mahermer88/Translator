export function dealWithFile() {
  let input = document.querySelector("input");
  let wordsTable = document.getElementById("words-table");
  let fileAsObject = {};

  input.addEventListener("change", () => {
    let files = input.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      const file = e.target.result;
      const lines = file.split(/\r\n|\n/);
      for (const line of lines) {
        const lineRow = document.createElement("tr");
        wordsTable.appendChild(lineRow);
        const lineCellKey = document.createElement("td");
        lineRow.appendChild(lineCellKey);
        const lineCellWord = document.createElement("td");
        lineRow.appendChild(lineCellWord);

        const equalIndex = line.indexOf("=");
        const beforeEqualIndex = line.substring(0, equalIndex).trim();
        lineCellKey.dataset.key = `${beforeEqualIndex}`;
        lineCellKey.textContent = `${beforeEqualIndex}`;
        const afterEqualIndex = line
          .substring(equalIndex + 1, line.length)
          .trim();
        lineCellWord.dataset.key = `${afterEqualIndex}`;
        lineCellWord.textContent = `${afterEqualIndex}`;
        fileAsObject[beforeEqualIndex] = `${afterEqualIndex}`;
      }
    };

    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
  });
}
