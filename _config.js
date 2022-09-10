import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import windi_css from "lume/plugins/windi_css.ts";

const site = lume();

site.use(jsx());
site.use(windi_css());

export default site;
