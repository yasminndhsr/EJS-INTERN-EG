export const route = (app) => {
    app.get("/", (req,res) => {
        res.render ("pages/home");
      });
      
      app.get("/home", (req,res) => {
          res.render("pages/home");
      });
      
      app.get("/cek-turnitin", (req,res) => {
          res.render("pages/cek-turnitin");
      });    
};
