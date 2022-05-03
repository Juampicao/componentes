// const phantomPdf = require("phantom-pdf");
// var PhantomPDF = require("phantom-pdf");

// var manifest = {
//   phantomjsPath: __dirname + "/node_modules/phantomjs/bin/phantomjs", // Optional
//   templates: {
//     body: __dirname + "/templates/body.hbs", // Body is required as its the entry point
//     // If header is defined it will be the page header
//     // Note: phantomSettings.paperSize.header.height must also be set
//     header: __dirname + "/templates/header.hbs",
//     // If footer is defined it will be the page header
//     // Note: phantomSettings.paperSize.footer.height must also be set
//     footer: __dirname + "/templates/footer.hbs",
//     // This is an example of having a parcial view
//     product: __dirname + "/templates/product.hbs",
//   },
//   helpers: __dirname + "/helpers/index.js", // Handlebars helper
//   helperVariables: {}, // Additional data to be passed in the helper such as local
//   less: __dirname + "/less/index.less", // Less file to render into css
//   output: "/tmp/foo.pdf", // This is the destination of the newly created PDF
//   // Settings to be passed into phantom
//   // List of settings: http://phantomjs.org/api/webpage/
//   phantomSettings: {
//     paperSize: {
//       format: "Letter",
//       orientation: "portrait",
//       margin: {
//         top: "0.25in",
//         right: "0.5in",
//         bottom: "0.25in",
//         left: "0.5in",
//       },
//       header: {
//         height: "0.5in",
//       },
//       footer: {
//         height: "0.5in",
//       },
//     },
//   },
// };

// var data = {
//   // Put any data you want to be exposed to your handlebars template
//   products: ["soccer ball", "baseball", "football"],
//   category: "Balls",
// };

// console.log(phantomPdf);
// var pdf = new PhantomPDF(manifest, data, function (err) {});

function printPdf() {
  const element = document.getElementById("areaPdf");

  html2pdf().from(element).save();
}
