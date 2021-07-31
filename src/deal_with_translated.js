let translatedFileAsArray = [];
let translatedWordsAsArray = [];

export function dealWithTranslated() {
  const downloadName = document.getElementById("download-name");
  let wordsTable = document.getElementById("words-table");
  for (const line of wordsTable.children) {
    const targetPart = line.children[0].dataset.key;
    const originalWord = line.children[1].dataset.key;
    const translatedWord = `${line.children[1].textContent}`;
    translatedWordsAsArray.push(`${originalWord}=${translatedWord}\n`);
    translatedFileAsArray.push(`${targetPart}=${translatedWord}\n`);
  }
  const translatedWords = new File(
    translatedWordsAsArray,
    `${downloadName.value}_words.txt`,
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(translatedWords);
  const translatedFile = new File(
    translatedFileAsArray,
    `${downloadName.value}.txt`,
    {
      type: "text/plain;charset=utf-8",
    }
  );
  saveAs(translatedFile);
}
