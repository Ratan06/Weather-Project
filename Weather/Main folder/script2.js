function city() {
    let city=document.getElementById("citybox").value;
    if(city==="new york")
    {
        const element= document.createElement("a");
        element.href= "htmlNY.html";
        document.body.appendChild(element);
        element.click();
    }
    else if(city==="new delhi")
    {
        const element= document.createElement("a");
        element.href= "htmlND.html";
        document.body.appendChild(element);
        element.click();
    }
    else if (city==="tokyo")
    {
        const element= document.createElement("a");
        element.href= "htmlT.html";
        document.body.appendChild(element);
        element.click();
    }
    else if(city==="london")
    {
        const element= document.createElement("a");
        element.href= "htmlL.html";
        document.body.appendChild(element);
        element.click();
    }
    else if(city==="manipal")
    {
        const element= document.createElement("a");
        element.href= "htmlM.html";
        document.body.appendChild(element);
        element.click();
    }
    else if(city==="hyderabad")
    {
        const element= document.createElement("a");
        element.href= "htmlH.html";
        document.body.appendChild(element);
        element.click();
    }
    else if(city!=="(new york,new delhi,tokyo,london,manipal,hyderabad)")
    {
        const element= document.createElement("a");
        element.href= "https://www.accuweather.com/";
        document.body.appendChild(element);
        element.click();
    }

   
}
