import fetch from "node-fetch";

export const home = async (req, res) => {
    const result = await fetch("http://192.168.18.22:3000/product", { 
        method: "GET",
    });
    const resultTesti = await fetch("http://192.168.18.22:3000/testimoni", { 
        method: "GET",
    });
    

    const products = await result.json();
    const testi = await resultTesti.json();


    res.render("pages/home/index.ejs", {
        products, 
        testi,
    }); 
};