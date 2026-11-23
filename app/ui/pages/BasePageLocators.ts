import { Page } from "@playwright/test";

export class BasePageLocators {
    page: Page

    constructor(page: Page) {
        this.page = page
    }
}