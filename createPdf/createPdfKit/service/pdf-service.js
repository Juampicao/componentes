const PDFDocument = require("pdfkit");

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: "Courier" });

  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.fontSize(20).text(`Asociate INC`);

  doc
    .fontSize(12)
    .text(`Mira juansito querido, ya tenemos una impresora de pdf automatica.`);
  doc.end();
}
// console.log("desde ac");

module.exports = { buildPDF };
