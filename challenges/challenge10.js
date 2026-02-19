//create Main element
let mainContiner=document.createElement('div');

//styling main container

//create sub elements
let header =document.createElement('div');
let content=document.createElement('div');
let footer=document.createElement('div');

//create inner header
let headerText=document.createElement('h2');
headerText.appendChild(document.createTextNode("Nada"));
//append header text
header.appendChild(headerText);

//styling header
header.style.cssText="padding:10px 20px; color:white; border-bottom: 2px solid #7698ba; height:50px; display:flex; align-items:center";
headerText.style.cssText="font-size: 35px; color:#386da2";

//create spans container
let MainSpanContainer=document.createElement('div');

//create Spans
for (let i=0 ;i<4; i++){
    let headerSpan=document.createElement('span');
    headerSpan.setAttribute('data-index',i);

    if(i== 0){
        headerSpan.appendChild(document.createTextNode("Home"))
    }
    if(i==1){
        headerSpan.appendChild(document.createTextNode("About"))
    }
    if(i==2){
        headerSpan.appendChild(document.createTextNode("Services"))
    }
    if(i==3){
        headerSpan.appendChild(document.createTextNode("Contact"))
    }

    //append spans in header
    MainSpanContainer.appendChild(headerSpan);
}
//append spanscontainer in header
header.appendChild(MainSpanContainer);
//styling spans container
MainSpanContainer.style.cssText="width:100%; display:flex; justify-content:flex-end; gap:10px";
//styling spans
Array.from(MainSpanContainer.children).forEach(span => {
    span.style.cssText="color:#5a85f2; font-size:20px";
});


//styling content continer
content.style.cssText="padding: 20px; background-color:#bcd8f4; display:grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap:20px;";
//create inner content
for (let i=0; i<15; i++){

    let box = document.createElement('div');
    //create within box

    //create span number
    let boxSpan=document.createElement('span');
    boxSpan.appendChild(document.createTextNode(`${i+1}`));

    //create paragraph text
    let boxPara=document.createElement('p');
    boxPara.appendChild(document.createTextNode("product"));

    //append all in box
    box.appendChild(boxSpan);
    box.appendChild(boxPara);

    //styling 
    box.style.cssText="background-color:white; text-align:center; padding:20px 0;";
    boxSpan.style.cssText="color:#386da2; font-weight:bold; font-size:40px; padding:10px;";
    boxPara.style.color="#386da2";
    
    content.appendChild(box);
}

//footer
footer.appendChild(document.createTextNode("copyRight 2026"));
//styling
footer.style.cssText="background-color:#386da2; text-align:center; padding:30px; font-size:30px; color:white;"

// append main parts
mainContiner.append(header, content, footer);


//append main container to document
document.body.appendChild(mainContiner);