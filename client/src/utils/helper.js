import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";

export const convertTxtToPdf = (txtFilePath, pdfFileName) => {
  fetch(txtFilePath)
    .then(response => response.text())
    .then(txtContent => {
      const doc = new jsPDF();
      doc.text(txtContent, 10, 10);
      const pdfBlob = doc.output("blob");
      saveAs(pdfBlob, pdfFileName);
    })
    .catch(error => {
      console.error("Error converting text to PDF:", error);
    });
};
