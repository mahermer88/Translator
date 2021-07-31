let translatedFileAsArray = [];

export function dealWithTranslated() {
  const downloadName = document.getElementById("download-name");
  let wordsTable = document.getElementById("words-table");
  for (const line of wordsTable.children) {
    const targetPart = line.children[0].dataset.key;
    const translatedWord = `${line.children[1].textContent}`;
    translatedFileAsArray.push(`${targetPart}=${translatedWord}\n`);
  }
  const translatedFile = new File(
    translatedFileAsArray,
    `${downloadName.value}.txt`,
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(translatedFile);
}
