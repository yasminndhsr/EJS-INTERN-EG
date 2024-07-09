import { home } from "../controllers/pages.js"
import { cekTurnitin, parafraseIn, sarangFreelance, translateIn } from "../controllers/services.js"
import { affiliate, myProject, profile, withdraw } from "../controllers/user.js";

export const route = function (app) {
    app.get("/", home);
    app.get("/cek-turnitin", cekTurnitin);
    app.get("/parafrase-in", parafraseIn);
    app.get("/translate-in", translateIn);
    app.get("/sarang-freelance", sarangFreelance);
    app.get("/profile", profile);
    app.get("/affiliate", affiliate);
    app.get("/withdraw", withdraw);
    app.get("/myproject", myProject);
};
