import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/tab1Tab/index.html")
@PreventIframe("/tab1Tab/config.html")
@PreventIframe("/tab1Tab/remove.html")
export class Tab1Tab {
}
