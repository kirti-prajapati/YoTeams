import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/tab2Tab/index.html")
@PreventIframe("/tab2Tab/config.html")
@PreventIframe("/tab2Tab/remove.html")
export class Tab2Tab {
}
