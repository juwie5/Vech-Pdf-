document.getElementById("myBtn").addEventListener("click", printPdf);
function printPdf(){
var element = document.getElementById("content");
var opt = {
    margin: 0,
    filename: 'VVIR' + '.pdf',
    image: {type: 'jpeg', quality: 0.98},
    html2canvas: {scale : 2},
   jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'}
};   
html2pdf().set(opt).from(element).save()  
};

